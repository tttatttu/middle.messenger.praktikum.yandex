import Block from '../../utils/Block';
import { Button } from '../../components/Button/button';
import template from './signin.hbs';
import { Input } from '../../components/Input/input';
import { PATTERN_VALIDATION } from '../../utils/Const';
import { validateInputs } from '../../utils/Valid';
import AuthController from '../../controllers/AuthController';
import { SignInData } from '../../api/AuthApi';
import Router from '../../utils/Router';
import Link from '../../components/Link/index';

export class SignInPage extends Block {
  constructor() {
    super();
  }

  async onSignIn() {
    const data = validateInputs(
      { elementId: 'login', regexp: PATTERN_VALIDATION.login },
      { elementId: 'password', regexp: PATTERN_VALIDATION.password },
    );

    if (data) {
      try {
        await AuthController.signIn(data as SignInData).then(() => console.log('Авторизация прошла успешно'));
      } catch (e) {
        console.log(e);
      }
    }
  }

  protected initChildren() {
    this.children.buttonLogout = new Button({
      text: 'Сброс',
      type: 'button',
      className: 'popup__button button_blueviolet',
      events: {
        click: () => {
          AuthController.logout();
        },
      },
    });
    this.children.linkNoAccaunt = new Link({
      text: 'Нет аккаунта?',
      href: '/signup',
      className: 'popup__link',
      router: new Router(),
    });
    this.children.button = new Button({
      text: 'Авторизоваться',
      type: 'submit',
      className: 'popup__button button_blueviolet',
      events: {
        click: (e: any) => {
          e.preventDefault();
          this.onSignIn();
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
      value: '',
      required: true,
      className: 'form__input',
      events: this.inputValidation(),
    });
    this.children.inputPassword = new Input({
      type: 'password',
      id: 'password',
      name: 'password',
      minlength: '8',
      maxlength: '40',
      placeholder: 'Пароль',
      value: '',
      required: true,
      className: 'form__input',
      events: this.inputValidation(),
    });
  }

  inputValidation() {
    return {
      focus: (e: any) => {
        // @ts-ignore
        validateInputs({ elementId: e.target.id, regexp: PATTERN_VALIDATION[e.target.id] });
      },
      blur: (e: any) => {
        // @ts-ignore
        validateInputs({ elementId: e.target.id, regexp: PATTERN_VALIDATION[e.target.id] });
      },
    };
  }

  render() {
    return this.compile(template, {});
  }
}
