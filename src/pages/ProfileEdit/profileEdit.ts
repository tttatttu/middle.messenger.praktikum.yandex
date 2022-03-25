import Block from '../../utils/Block';
import template from './profileEdit.hbs';
import {Button} from '../../components/Button/button';
import {Input} from '../../components/Input/input';
import {PATTERN_VALIDATION} from '../../utils/CONST';
import {validateInputs} from '../../utils/Valid';
import UsersController from "../../controllers/UsersController";
import {SignUpData} from "../../api/AuthApi";
import Router from "../../utils/Router";


export class ProfileEditPage extends Block {
    constructor(props: any) {
        super({...props});
    }

    async onUpdateProfile() {
        const data = validateInputs(
            {elementId: 'email-profile', regexp: PATTERN_VALIDATION.email},
            {elementId: 'login-profile', regexp: PATTERN_VALIDATION.login},
            {elementId: 'first_name-profile', regexp: PATTERN_VALIDATION.first_name},
            {elementId: 'second_name-profile', regexp: PATTERN_VALIDATION.second_name},
            {elementId: 'display_name-profile', regexp: PATTERN_VALIDATION.display_name},
            {elementId: 'phone-profile', regexp: PATTERN_VALIDATION.phone},
        );

        if (data) {
            try {
                await UsersController.updateProfile(data as SignUpData).then(() => console.log('Профиль отредактирован!'));
            } catch (error) {
                console.log(`Ошибка: ${error ? error.reason : ''}`);
            }
        }
    }


    protected initChildren() {
        this.children.buttonBack = new Button({
            text: '<<',
            type: 'button',
            className: 'profile__button',
            events: {
                click: (e: any) => {
                    e.preventDefault();
                    const router = new Router()
                    router.go('/profile')
                },
            },
        });
        this.children.button = new Button({
            text: 'Сохранить',
            type: 'submit',
            className: 'popup__button button_blueviolet',
            events: {
                click: (e: any) => {
                    e.preventDefault();
                    this.onUpdateProfile()
                },
            },
        });
        this.children.inputEmail = new Input({
            type: 'email',
            id: 'email-profile',
            name: 'email',
            placeholder: 'Почта',
            value: this.props.email,
            required: true,
            className: 'form__input',
            events: this.inputValidation(),
        });
        this.children.inputLogin = new Input({
            type: 'text',
            id: 'login-profile',
            name: 'login',
            minlength: '3',
            maxlength: '20',
            placeholder: 'Логин',
            value: this.props.login,
            required: true,
            className: 'form__input',
            events: this.inputValidation(),
        });
        this.children.inputName = new Input({
            type: 'text',
            id: 'first_name-profile',
            name: 'first_name',
            minlength: '3',
            maxlength: '20',
            placeholder: 'Имя',
            value: this.props.first_name,
            required: true,
            className: 'form__input',
            events: this.inputValidation(),
        });
        this.children.inputSurName = new Input({
            type: 'text',
            id: 'second_name-profile',
            name: 'second_name',
            minlength: '3',
            maxlength: '20',
            placeholder: 'Фамилия',
            value: this.props.second_name,
            required: true,
            className: 'form__input',
            events: this.inputValidation(),
        });
        this.children.inputDisplayName = new Input({
            type: 'text',
            id: 'display_name-profile',
            name: 'display_name',
            minlength: '3',
            maxlength: '20',
            placeholder: 'Имя в чате',
            value: this.props.display_name ? this.props.display_name : this.props.login,
            required: true,
            className: 'form__input',
            events: this.inputValidation(),
        });
        this.children.inputPhone = new Input({
            type: 'tel',
            id: 'phone-profile',
            name: 'phone',
            placeholder: 'Телефон',
            value: this.props.phone,
            required: true,
            className: 'form__input',
            events: this.inputValidation(),
        });
    }

    inputValidation() {
        return {
            focus: (e: any) => {
                // @ts-ignore
              validateInputs({elementId: e.target.id, regexp: PATTERN_VALIDATION[e.target.id]});
            },
            blur: (e: any) => {
                // @ts-ignore
              validateInputs({elementId: e.target.id, regexp: PATTERN_VALIDATION[e.target.id]});
            },
        };
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
