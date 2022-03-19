import Block from '../../utils/Block';
import template from './passwordEdit.hbs';
import {Input} from '../../components/Input/input';
import {PATTERN_VALIDATION} from '../../utils/CONST';
import {Button} from '../../components/Button/button';
import {validateInputs} from '../../utils/Valid';
import UsersController from "../../controllers/UsersController";
import {UpdatePasswordData} from "../../api/UsersApi";
import AuthController from "../../controllers/AuthController";
import Router from "../../utils/Router";


export class PasswordEditPage extends Block {
    constructor() {
        super();
    }

    async onUpdatePassword() {
        const data = validateInputs(
            {elementId: 'oldPassword', regexp: PATTERN_VALIDATION.oldPassword},
            {elementId: 'newPassword', regexp: PATTERN_VALIDATION.newPassword},
            {elementId: 'newPassword_again', regexp: PATTERN_VALIDATION.newPassword_again},
        );

        if (data) {
            try {
                await UsersController.updatePassword(data as UpdatePasswordData).then(() => console.log("Пароль изменен"))
                AuthController.fetchUser()
            } catch (e) {
                console.log(e)
            }
        }
    }

    protected initChildren() {
        this.children.buttonBack = new Button({
            text: '<<',
            type: 'button',
            className: 'profile__button',
            events: {
                click: (e) => {
                    e.preventDefault();
                    const router = new Router()
                    router.go('/profile')
                },
            },
        });
        this.children.button = new Button({
            text: 'Сохранить',
            type: 'submit',
            className: 'profile__submit',
            events: {
                click: (e) => {
                    e.preventDefault();
                    this.onUpdatePassword()
                },
            },
        });
        this.children.inputOldPassword = new Input({
            type: 'password',
            id: 'oldPassword',
            name: 'oldPassword',
            minlength: '8',
            maxlength: '40',
            placeholder: 'Введите_пароль',
            value: '',
            required: true,
            className: 'form__input',
            events: this.inputValidation(),
        });
        this.children.inputNewPassword = new Input({
            type: 'password',
            id: 'newPassword',
            name: 'newPassword',
            minlength: '8',
            maxlength: '40',
            placeholder: 'Введите_новый_пароль',
            value: '',
            required: true,
            className: 'form__input',
            events: this.inputValidation(),
        });
        this.children.inputPasswordAgain = new Input({
            type: 'password',
            id: 'newPassword_again',
            name: 'newPassword_again',
            minlength: '8',
            maxlength: '40',
            placeholder: 'Повторите_новый_пароль',
            value: '',
            required: true,
            className: 'form__input',
            events: this.inputValidation(),
        });
    }

    inputValidation() {
        return {
            focus: (e) => {
                validateInputs({elementId: e.target.id, regexp: PATTERN_VALIDATION[e.target.id]});
            },
            blur: (e) => {
                validateInputs({elementId: e.target.id, regexp: PATTERN_VALIDATION[e.target.id]});
            },
        };
    }

    render() {
        return this.compile(template, {});
    }
}
