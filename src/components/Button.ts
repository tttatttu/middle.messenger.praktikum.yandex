import {Component} from './Component'

export class Button extends Component {
    constructor(tagName, config, template: string = '{{text}}') {
        super(tagName, config, template);
    }

    render() {
        return Handlebars.compile(template, this.props);
    }
}
