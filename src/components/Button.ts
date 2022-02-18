import Handlebars from 'handlebars/dist/handlebars';
import {Component} from './Component'

export class Button extends Component {
    constructor(tagName, config, template: string = '{{text}}') {
        super(tagName, config, template);
    }

    render() {
        return Handlebars.compile(this.template, this.props);
    }
}

// import Handlebars from 'handlebars/dist/handlebars';
// import template from './index.tmpl'
//
// document.addEventListener('DOMContentLoaded', () => {
//     const compiled = Handlebars.compile(template)
//
//     const html = compiled({name: "tanya"})
//
//     document.body.innerHTML = html
//
// })
