import Handlebars from 'handlebars/dist/handlebars';
import {Block, Meta} from './Block';

interface Listener {
    event: string;
    callback: any;
}

interface BlockConfig extends Meta {
    emitter?: Listener[];
    on?: [string, Function];
}

export class Component extends Block {
    needInit = false;

    constructor(tagName, config: BlockConfig = {}, tmpl = '') {
        super(tagName, config, tmpl);
        if (config.on) {
            this.setOn(config.on);
        }

        if (config.emitter) {
            this.setListeners(config.emitter);
        }
    }

    setListeners(listeners: Listener[]) {
        listeners.forEach(({event, callback}) => this._element.addEventListener(event, callback));
    }

    setOn(on) {
        this._eventBus().on(on[0], on[1]);
    }

    getContent() {
        return this._element;
    }

    render() {
        return Handlebars.compile(this.tmpl, this.props);
    }
}
