import Block from "../../utils/Block";
import template from './login.hbs'

export class LoginPage extends Block {
    render() {
        return this.compile(template, {})
    }

}
