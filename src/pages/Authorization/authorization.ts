import Block from '../../utils/Block';
import { Button } from '../../components/Button/button';
import template from './authorization.hbs';
import { Input } from '../../components/Input/input';

export class AuthorizationPage extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
    this.children.button = new Button({
      text: 'Авторизоваться',
      type: 'submit',
      className: 'popup__button',
      events: {
        click: () => console.log('вывести все поля формы'),
      },
    });
    this.children.inputLogin = new Input({
      type: 'text',
      id: 'login',
      name: 'login',
      minlength: '3',
      maxlength: '20',
      placeholder: 'Логин',
      required: true,
      className: 'popup__input',
      pattern: '/^[А-ЯЁ]([а-яё]{1,29})([-][А-ЯЁ]([а-яё]{1,29}))$/g',
    });
    this.children.inputPassword = new Input({
      type: 'text',
      id: 'password',
      name: 'password',
      minlength: '6',
      maxlength: '30',
      placeholder: 'Пароль',
      required: true,
      className: 'popup__input',
      pattern: '[А-ЯЁ][а-яё]+(-[А-ЯЁ][а-яё]+)?',
    });
  }

  render() {
    return this.compile(template, {});
  }
}
