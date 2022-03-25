import Block from '../../utils/Block';
import { Button } from '../../components/Button/button';
import template from './signup.hbs';
import { Input } from '../../components/Input/input';
import { PATTERN_VALIDATION } from '../../utils/CONST';
import { validateInputs } from '../../utils/Valid';
import AuthController, { ControllerSignUpData } from '../../controllers/AuthController';
import Router from '../../utils/Router';
import Link from '../../components/Link/index';

export class SignUpPage extends Block {
  constructor() {
    super({});
  }

  async onSignUp() {
    const data = validateInputs(
      { elementId: 'email', regexp: PATTERN_VALIDATION.email },
      { elementId: 'login', regexp: PATTERN_VALIDATION.login },
      { elementId: 'first_name', regexp: PATTERN_VALIDATION.first_name },
      { elementId: 'second_name', regexp: PATTERN_VALIDATION.second_name },
      { elementId: 'phone', regexp: PATTERN_VALIDATION.phone },
      { elementId: 'password', regexp: PATTERN_VALIDATION.password },
      { elementId: 'password_again', regexp: PATTERN_VALIDATION.password_again },
    );

    if (data) {
      try {
        await AuthController.signUp(data as ControllerSignUpData).then(() => alert('Поздравляем, Вы в нашем чате!'));
      } catch (e) {
        console.log(e);
      }
    }
  }

  protected initChildren() {
    this.children.linkLogin = new Link({
      text: 'Войти',
      href: '/signin',
      className: 'popup__link',
      router: new Router(),
    });
    this.children.button = new Button({
      text: 'Зарегистрироваться',
      type: 'submit',
      className: 'popup__button button_blueviolet',
      events: {
        click: (e: any) => {
          e.preventDefault();
          this.onSignUp();
        },
      },
    });
    this.children.inputEmail = new Input({
      type: 'email',
      id: 'email',
      name: 'email',
      placeholder: 'Почта',
      value: '',
      required: true,
      className: 'form__input',
      events: this.inputValidation(),
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
    this.children.inputName = new Input({
      type: 'text',
      id: 'first_name',
      name: 'first_name',
      minlength: '3',
      maxlength: '20',
      placeholder: 'Имя',
      value: '',
      required: true,
      className: 'form__input',
      events: this.inputValidation(),
    });
    this.children.inputSurName = new Input({
      type: 'text',
      id: 'second_name',
      name: 'second_name',
      minlength: '3',
      maxlength: '20',
      placeholder: 'Фамилия',
      value: '',
      required: true,
      className: 'form__input',
      events: this.inputValidation(),
    });
    this.children.inputPhone = new Input({
      type: 'tel',
      id: 'phone',
      name: 'phone',
      placeholder: 'Телефон',
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
    this.children.inputPasswordAgain = new Input({
      type: 'password',
      id: 'password_again',
      name: 'password_again',
      minlength: '8',
      maxlength: '40',
      placeholder: 'Пароль (еще раз)',
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
