import Block from '../../utils/Block';
import { Button } from '../../components/Button/button';
import template from './registration.hbs';
import { Input } from '../../components/Input/input';
import { PATTERN_VALIDATION } from '../../utils/CONST';
import {Profile} from "../../components/Profile/profile";
import {FormValidator} from "../../utils/FormValidator";
import {validateInputs} from "../../utils/Valid";

const errorMessages = {
  empty: "Это обязательное поле",
  wrongLength: "Должно быть от 2 до 30 символов",
  wrongUrl: "Здесь должна быть ссылка",
};

export class RegistrationPage extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
//     const k = `<form class="popup__form popup__form_new" name="new" novalidate>
//     <input type="text" id="name" name="name" class="popup__input popup__input_type_name" minlength="2" maxlength="30" required placeholder="Название">
//     <span id="name-error" class="error error_name"></span>
//     <input type="url" id="link" name="link" class="popup__input popup__input_type_link-url" required placeholder="Ссылка на картинку">
//     <span id="link-error" class="error error_link"></span>
//     <button id="submit" class="button popup__button popup__button_add" disabled>+</button>
// </form>`
// //
//     this.children.test = new FormValidator('form', k)
    this.children.button = new Button({
      text: 'Зарегистрироваться',
      type: 'submit',
      className: 'popup__button popup__button_add',
      events: {
        click: (e) => {
          e.preventDefault();

          console.log(e.target)
          const email = document.getElementById('email');
          const login = document.getElementById('login');
          const name = document.getElementById('name');
          const surname = document.getElementById('surname');
          const password = document.getElementById('password');
          const passwordAgain = document.getElementById('password_again');
          console.log(email.value, login.value, name.value, surname.value, password.value, passwordAgain.value);
        },
      },
    });
    this.children.inputEmail = new Input({
      type: 'email',
      id: 'email',
      name: 'email',
      placeholder: 'Почта',
      required: true,
      className: 'popup__input',
      pattern: PATTERN_VALIDATION.email,
      value: '',
      events: {
        focus: (e) => {
          const error = document.getElementById('email-error');

          if (!e.target.validity.valid) {
            error.classList.add('popup__error_active');
            error.classList.remove('popup__error_normal');
          } else {
            error.classList.add('popup__error_normal');
            error.classList.remove('popup__error_active');
          }
        },
        blur: (e) => {
          const error = document.getElementById('email-error');

          if (!e.target.validity.valid) {
            error.classList.add('popup__error_active');
            error.classList.remove('popup__error_normal');
          } else {
            error.classList.add('popup__error_normal');
            error.classList.remove('popup__error_active');
          }
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
      className: 'form__input',
      // pattern: '^[А-ЯЁ]([а-яё\-]{1,29})$/g',
      // pattern: '[123]',
      // value: '',
      events: {
        // change: (val => console.log(val)),
        focus: (e) => {

          validateInputs({elementId: e.target.id, regexp: /\d+/})
          // const error = document.getElementById('login-error')
          // console.log(e.target.validity.valid)
          // const error = document.getElementById('login-error');
          //
          // if (!/\d/g.test(e.target.value)) {
          //   console.log('error')
          //   error.classList.add('form__error_active');
          //   error.classList.remove('form__error_normal');
          // } else {
          //   console.log('not')
          //   error.classList.add('form__error_normal');
          //   error.classList.remove('form__error_active');
          // }

          // const error = document.getElementById('login-error');
          //
          // if (!e.target.validity.valid) {
          //   error.classList.add('popup__error_active');
          //   error.classList.remove('popup__error_normal');
          // } else {
          //   error.classList.add('popup__error_normal');
          //   error.classList.remove('popup__error_active');
          // }
        },
        blur: (e) => {
        //   const error = document.getElementById('login-error');
        //
        //   if (!e.target.validity.valid) {
        //     error.classList.add('popup__error_active');
        //     error.classList.remove('popup__error_normal');
        //   } else {
        //     error.classList.add('popup__error_normal');
        //     error.classList.remove('popup__error_active');
        //   }
        },
      },
    });
    this.children.inputName = new Input({
      type: 'text',
      id: 'name',
      name: 'name',
      minlength: '3',
      maxlength: '20',
      placeholder: 'Имя',
      required: true,
      className: 'popup__input',
      pattern: PATTERN_VALIDATION.login,
      value: '',
      events: {
        focus: (e) => {
          const error = document.getElementById('name-error');

          if (!e.target.validity.valid) {
            error.classList.add('popup__error_active');
            error.classList.remove('popup__error_normal');
          } else {
            error.classList.add('popup__error_normal');
            error.classList.remove('popup__error_active');
          }
        },
        blur: (e) => {
          const error = document.getElementById('name-error');

          if (!e.target.validity.valid) {
            error.classList.add('popup__error_active');
            error.classList.remove('popup__error_normal');
          } else {
            error.classList.add('popup__error_normal');
            error.classList.remove('popup__error_active');
          }
        },
      },
    });
    this.children.inputSurName = new Input({
      type: 'text',
      id: 'surname',
      name: 'surname',
      minlength: '3',
      maxlength: '20',
      placeholder: 'Фамилия',
      required: true,
      className: 'popup__input',
      pattern: PATTERN_VALIDATION.login,
      value: '',
      events: {
        focus: (e) => {
          const error = document.getElementById('surname-error');

          if (!e.target.validity.valid) {
            error.classList.add('popup__error_active');
            error.classList.remove('popup__error_normal');
          } else {
            error.classList.add('popup__error_normal');
            error.classList.remove('popup__error_active');
          }
        },
        blur: (e) => {
          const error = document.getElementById('surname-error');

          if (!e.target.validity.valid) {
            error.classList.add('popup__error_active');
            error.classList.remove('popup__error_normal');
          } else {
            error.classList.add('popup__error_normal');
            error.classList.remove('popup__error_active');
          }
        },
      },
    });
    this.children.inputPhone = new Input({
      type: 'tel',
      id: 'phone',
      name: 'phone',
      placeholder: 'Телефон',
      required: true,
      className: 'popup__input',
      pattern: '/^(\+7|8)(([(]9\d{2}[)])|(\s?9\d{2}))(\s|[-])?(\d{3})[-]?(\d{2})[-]?(\d{2})$/g',
      value: '',
      events: {
        focus: (e) => {

            validateInput(e.target.id, /^(\+7|8)(([(]9\d{2}[)])|(\s?9\d{2}))(\s|[-])?(\d{3})[-]?(\d{2})[-]?(\d{2})$/g)


          const error = document.getElementById('phone-error');

          if (!e.target.validity.valid) {
            error.classList.add('popup__error_active');
            error.classList.remove('popup__error_normal');
          } else {
            error.classList.add('popup__error_normal');
            error.classList.remove('popup__error_active');
          }
        },
        blur: (e) => {
          const error = document.getElementById('phone-error');

          if (!e.target.validity.valid) {
            error.classList.add('popup__error_active');
            error.classList.remove('popup__error_normal');
          } else {
            error.classList.add('popup__error_normal');
            error.classList.remove('popup__error_active');
          }
        },
      },
    });
    this.children.inputPassword = new Input({
      type: 'text',
      id: 'password',
      name: 'password',
      minlength: '6',
      maxlength: '20',
      placeholder: 'Пароль',
      required: true,
      className: 'popup__input',
      pattern: PATTERN_VALIDATION.password,
      value: '',
      events: {
        focus: (e) => {
          const error = document.getElementById('password-error');

          if (!e.target.validity.valid) {
            error.classList.add('popup__error_active');
            error.classList.remove('popup__error_normal');
          } else {
            error.classList.add('popup__error_normal');
            error.classList.remove('popup__error_active');
          }
        },
        blur: (e) => {
          const error = document.getElementById('password-error');

          if (!e.target.validity.valid) {
            error.classList.add('popup__error_active');
            error.classList.remove('popup__error_normal');
          } else {
            error.classList.add('popup__error_normal');
            error.classList.remove('popup__error_active');
          }
        },
      },
    });
    this.children.inputPasswordAgain = new Input({
      type: 'text',
      id: 'password_again',
      name: 'password_again',
      minlength: '6',
      maxlength: '20',
      placeholder: 'Пароль (еще раз)',
      required: true,
      className: 'popup__input',
      pattern: PATTERN_VALIDATION.password,
      value: '',
      events: {
        focus: (e) => {
          const error = document.getElementById('password_again-error');

          if (!e.target.validity.valid) {
            error.classList.add('popup__error_active');
            error.classList.remove('popup__error_normal');
          } else {
            error.classList.add('popup__error_normal');
            error.classList.remove('popup__error_active');
          }
        },
        blur: (e) => {
          const error = document.getElementById('password_again-error');

          if (!e.target.validity.valid) {
            error.classList.add('popup__error_active');
            error.classList.remove('popup__error_normal');
          } else {
            error.classList.add('popup__error_normal');
            error.classList.remove('popup__error_active');
          }
        },
      },
    });
  }

  // inputValidation() {
  //     focus: (e) => {
  //       validateInputs({elementId: e.target.id, regexp: /\d+/})
  //     },
  //
  //
  // }

  render() {
    return this.compile(template, {});
  }
}
