import template from './link.hbs';
import Block from '../../utils/Block';
import {WithRouterProps} from "../../utils/Router";

interface LinkProps extends WithRouterProps {
    href: string;
    className?: string;
    text: string;
    events?: {
        click: any;
    };
}

export class Link extends Block {
    constructor({href, router, text, className}: LinkProps) {
        super({
            href,
            events: {
                click: (e: MouseEvent) => {
                    e.preventDefault()

                    router.go(href)
                }
            },
            text,
            className
        })
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
