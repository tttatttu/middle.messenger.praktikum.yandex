import {Button} from "../../components/Button";
import {template as buttonTemplate} from '../../blocks/button/button';

export const authorizationButton = new Button(
    'a',
    {
        props: {
            text: 'Нет аккаунта?'
        },
        classes: ['button', 'button_blueviolet', 'authorization__button'],
        attrs: {
            href: '/signup'
        }
    },
    buttonTemplate
);


