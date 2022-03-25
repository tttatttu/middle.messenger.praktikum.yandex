import Block from '../../utils/Block';
import template from './chatHeader.hbs';
import {Button} from "../Button/button";
import AuthController from "../../controllers/AuthController";
import ChatController from "../../controllers/ChatController";

interface ChatHeaderProps {
    alt: string;
    href: string;
    name: string;
}

export class ChatHeader extends Block {
    constructor(props: ChatHeaderProps) {
        // @ts-ignore
      super(props);
    }

    protected initChildren() {
        this.children.buttonLogout = new Button({
            text: 'Выйти',
            type: 'button',
            className: 'button_blueviolet header__button',
            events: {
                click: () => {
                    AuthController.logout()
                }
            }
        })
        this.children.buttonDeletChat = new Button({
            text: 'Удалить чат',
            type: 'button',
            className: 'button_white header__button',
            events: {
                click: () => {
                    ChatController.deleteChat(this.props.id)
                }
            }
        })
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
