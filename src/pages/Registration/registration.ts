import Block from '../../utils/Block';
import { Button } from '../../components/Button/button';
import template from './registration.hbs';
import { Input } from '../../components/Input/input';
import {PATTERN_VALIDATION} from "../../utils/CONST";

export class RegistrationPage extends Block {
    constructor() {
        super();
    }

    protected initChildren() {
        this.children.button = new Button({
            text: 'Зарегистрироваться',
            type: 'submit',
            className: 'popup__button popup__button_add',
            events: {
                click: (e) => {
                    e.preventDefault();

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
            className: 'popup__input',
            pattern: PATTERN_VALIDATION.login,
            value: '',
            events: {
                focus: (e) => {
                    const error = document.getElementById('login-error');

                    if (!e.target.validity.valid) {
                        error.classList.add('popup__error_active');
                        error.classList.remove('popup__error_normal');
                    } else {
                        error.classList.add('popup__error_normal');
                        error.classList.remove('popup__error_active');
                    }
                },
                blur: (e) => {
                    const error = document.getElementById('login-error');

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
            pattern: PATTERN_VALIDATION.phone,
            value: '',
            events: {
                focus: (e) => {
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

    render() {
        return this.compile(template, {});
    }
}
