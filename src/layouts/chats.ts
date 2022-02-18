import {Component} from "../components/Component";
import {tmpl} from "../blocks/button/button.tmpl";
import Handlebars from "handlebars";

export class ChatLayout extends Component {
    constructor(tagName = 'div', config = {}, tmpl = '') {
        super(tagName, {classes: ['root', 'chat'], props: {}, ...config}, tmpl);
        this.setOn(['initLayout', initLayout.bind(this)]);
        this.needInit = true;
    }
}

function initLayout() {
    const compiled = Handlebars.compile(tmpl)

    const html = compiled({text: 'Авторизоваться', type: 'submit', classes: ['button', 'button_blueviolet', 'authorization__button']})

    // document.body.innerHTML = html
    document.getElementById('result').innerHTML = html

}
