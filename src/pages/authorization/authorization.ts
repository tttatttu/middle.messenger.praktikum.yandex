import {Button} from "../../components/Button";
import {tmpl, tmpl as buttonTmpl} from '../../blocks/button/button.tmpl';
import Handlebars from 'handlebars/dist/handlebars';

export const authorizationButton = new Button(
    'button',
    {
        props: {
            text: 'Авторизоваться'
        },
        classes: ['button', 'button_blueviolet', 'authorization__button'],
        attrs: {
            href: ''
        }
    },
    buttonTmpl
);

render(authorizationButton, authorizationButton)

// document.addEventListener('DOMContentLoaded', () => {
//     const compiled = Handlebars.compile(tmpl)
//
//     const html = compiled({text: 'Нет аккаунта?', type: 'submit', classes: ['button', 'button_blueviolet', 'authorization__button']})
//
//     document.body.innerHTML = html
//
// })

