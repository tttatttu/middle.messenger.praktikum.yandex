import {EventBus} from "./EventBus";
// @ts-ignore
import {nanoid} from "nanoid";


class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    public id = nanoid(6)

    private _element: HTMLElement | null = null;
    private _meta: {props: any};

    protected props: any;
    private eventBus: () => EventBus

    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(props: any = {}) {
        debugger
        const eventBus = new EventBus();
        this._meta = {
            props
        };

        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    init() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidMount() {
        this.componentDidMount();
    }

    componentDidMount() {}

    _componentDidUpdate(oldProps, newProps) {
        // const response = this.componentDidUpdate(oldProps, newProps);
        if(this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
        }
    }

    componentDidUpdate(oldProps, newProps) {
        return true;
    }

    setProps = nextProps => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element(): HTMLElement | null {
        return this._element;
    }

    _render() {
        const fragment = this.render();

        const newElement = fragment.firstElementChild as HTMLElement;

        if (this._element) {
            this._removeEvents();
            this._element.replaceWith(newElement);
            console.log( '3', this._element)
        }

        this._element = newElement;
        console.log( '3', newElement)
        this._addEvents()
        console.log('4', this._element)
    }

    protected render(): DocumentFragment {
        // return  this.compile()
        console.log('4', new DocumentFragment())
        return new DocumentFragment();
    }

    getContent(): HTMLElement | null {
        return this._element;
    }

    _makePropsProxy(props) {
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        const self = this;

        return new Proxy(props, {
            get(target: Record<string, unknown>, prop: string) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target: Record<string, unknown>, prop: string, value: unknown) {
                target[prop] = value;

                // Запускаем обновление компоненты
                // Плохой cloneDeep, в след итерации нужно заставлять добавлять cloneDeep им самим
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }

    _removeEvents() {
        const events: Record<string, () => void> = (this.props as any).events;

        if (!events || !this._element) {
            return
        }

        Object.entries(events).forEach(([event, listener]) => {
            this._element!.removeEventListener(event, listener)
        })
    }

    _addEvents() {
        const events: Record<string, () => void> = (this.props as any).events

        if (!events) {
            return
        }

        Object.entries(events).forEach(([event, listener]) => {
            this._element!.addEventListener(event, listener)
        })
    }

    _createDocumentElement(tagName: string): HTMLElement {
        // Можно сделать метод, который через фрагменты в цикле создает сразу несколько блоков
        return document.createElement(tagName);
    }

    show() {
        this.getContent().style.display = "block";
    }

    hide() {
        this.getContent().style.display = "none";
    }

    compile(template: (context: any) => string, context: any) {
        const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

        const htmlString = template(context);

        fragment.innerHTML = htmlString;
        console.log("2", fragment.content)
        return fragment.content
    }
}

export default Block;
