import Block from "../../utils/Block";
import {Button} from "../../components/Button/button";
import template from "./authorization.hbs";

export class AuthorizationPage extends Block {
    constructor() {
        super();
    }

    protected initChildren() {
        this.children.button = new Button({
            text: "Авторизоваться",
            type: "submit",
            className: "popup__button",
            events: {
                click: () => console.log("вывести все поля формы")
            }
        })
    }

    render() {
        return this.compile(template, { })
    }

}
