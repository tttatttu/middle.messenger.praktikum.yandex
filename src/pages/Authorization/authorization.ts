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
        click: (e) => {
          e.preventDefault();

          const login = document.getElementById('login');
          const password = document.getElementById('password');
          console.log(login.value, password.value);
        },
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
      value: '',
      events: {
        focus: (e) => {
          const error = document.getElementById('login-error');

          if (!e.target.validity.valid) {
            error.classList.add('error_login_active');
          } else {
            error.classList.remove('error_login_active');
          }
        },
        blur: (e) => {
          const error = document.getElementById('login-error');

          if (!e.target.validity.valid) {
            error.classList.add('error_login_active');
          } else {
            error.remove();
          }
        },
      },
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
      value: '',
      events: {
        focus: (e) => {
          const error = document.getElementById('password-error');

          if (!e.target.validity.valid) {
            error.classList.add('error_password_active');
          } else {
            error.remove();
          }
        },
        blur: (e) => {
          const error = document.getElementById('password-error');

          if (!e.target.validity.valid) {
            error.classList.add('error_password_active');
          } else {
            error.remove();
          }
        },
      },
    });
  }

  render() {
    return this.compile(template, {});
  }
}
