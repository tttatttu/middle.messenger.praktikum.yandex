import Block from '../../utils/Block';
import template from './passwordEdit.hbs';
import {Input} from "../../components/Input/input";
import {PATTERN_VALIDATION} from "../../utils/CONST";
import {Button} from "../../components/Button/button";

export class PasswordEditPage extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
    this.children.button = new Button({
      text: 'Сохранить',
      type: 'submit',
      className: 'profile__submit',
      events: {
        click: (e) => {
          e.preventDefault();

          const oldPassword = document.getElementById('oldPassword');
          const newPassword = document.getElementById('newPassword');
          const newPasswordAgain = document.getElementById('newPasswordAgain');
          console.log(oldPassword.value, newPassword.value, newPasswordAgain.value);
        },
      },
    });
    this.children.inputOldPassword = new Input({
      type: 'text',
      id: 'oldPassword',
      name: 'oldPassword',
      minlength: '6',
      maxlength: '20',
      placeholder: 'Введите пароль',
      required: true,
      className: 'popup__input',
      pattern: PATTERN_VALIDATION.password,
      value: '',
      events: {
        focus: (e) => {
          const error = document.getElementById('oldPassword-error');

          if (!e.target.validity.valid) {
            error.classList.add('popup__error_active');
            error.classList.remove('popup__error_normal');
          } else {
            error.classList.add('popup__error_normal');
            error.classList.remove('popup__error_active');
          }
        },
        blur: (e) => {
          const error = document.getElementById('oldPassword-error');

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
    this.children.inputNewPassword = new Input({
      type: 'text',
      id: 'newPassword',
      name: 'newPassword',
      minlength: '6',
      maxlength: '20',
      placeholder: 'Введите новый пароль',
      required: true,
      className: 'popup__input',
      pattern: PATTERN_VALIDATION.password,
      value: '',
      events: {
        focus: (e) => {
          const error = document.getElementById('newPassword-error');

          if (!e.target.validity.valid) {
            error.classList.add('popup__error_active');
            error.classList.remove('popup__error_normal');
          } else {
            error.classList.add('popup__error_normal');
            error.classList.remove('popup__error_active');
          }
        },
        blur: (e) => {
          const error = document.getElementById('newPassword-error');

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
      id: 'newPasswordAgain',
      name: 'newPasswordAgain',
      minlength: '6',
      maxlength: '20',
      placeholder: 'Повторите новый пароль',
      required: true,
      className: 'popup__input',
      pattern: PATTERN_VALIDATION.password,
      value: '',
      events: {
        focus: (e) => {
          const error = document.getElementById('newPasswordAgain-error');

          if (!e.target.validity.valid) {
            error.classList.add('popup__error_active');
            error.classList.remove('popup__error_normal');
          } else {
            error.classList.add('popup__error_normal');
            error.classList.remove('popup__error_active');
          }
        },
        blur: (e) => {
          const error = document.getElementById('newPasswordAgain-error');

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

  render() {
    return this.compile(template, {});
  }
}
