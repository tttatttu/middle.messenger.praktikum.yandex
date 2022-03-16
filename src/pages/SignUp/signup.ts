import Block from '../../utils/Block';
import { Button } from '../../components/Button/button';
import template from './signup.hbs';
import { Input } from '../../components/Input/input';
import { PATTERN_VALIDATION } from '../../utils/CONST';
import { validateInputs } from '../../utils/Valid';
import AuthController, {ControllerSignUpData} from "../../controllers/AuthController";
import {SignUpData} from "../../api/AuthApi";

export class SignUpPage extends Block {
  constructor() {
    super();

    // this.setProps({
    //   onClick: this.onSignUp.bind(this)
    // })
  }

  onSignUp =  async () => {
    const data: Record<string, unknown> ={}

    const element = Object.keys(this.children)
    const childKey =  element.filter((item) => item !== 'button')

    childKey.forEach((input) => {
      const key = input.substr(5).toLocaleLowerCase()
      const inputData = document.getElementById(key)
      const text = document.getElementById(inputData?.id)?.value;

      data[inputData?.name] = text
    })
    //
    console.log(data)



    try {
      await AuthController.signUp(data as ControllerSignUpData)
    } catch (e) {
      console.log(e)
      alert(e.message)
    }
  }

  protected initChildren() {
    this.children.button = new Button({
      text: 'Зарегистрироваться',
      type: 'submit',
      className: 'popup__button button_blueviolet',
      events: {
        click: (e) => {
          e.preventDefault();

          this.onSignUp()

          validateInputs(
            { elementId: 'email', regexp: PATTERN_VALIDATION.email },
            { elementId: 'login', regexp: PATTERN_VALIDATION.login },
            { elementId: 'name', regexp: PATTERN_VALIDATION.name },
            { elementId: 'surname', regexp: PATTERN_VALIDATION.surname },
            { elementId: 'phone', regexp: PATTERN_VALIDATION.phone },
            { elementId: 'password', regexp: PATTERN_VALIDATION.password },
            { elementId: 'password_again', regexp: PATTERN_VALIDATION.password_again },
          );

        },
      },
    });
    this.children.inputEmail = new Input({
      type: 'email',
      id: 'email',
      name: 'email',
      placeholder: 'Почта',
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
      required: true,
      className: 'form__input',
      events: this.inputValidation(),
    });
    this.children.inputName = new Input({
      type: 'text',
      id: 'name',
      name: 'first_name',
      minlength: '3',
      maxlength: '20',
      placeholder: 'Имя',
      required: true,
      className: 'form__input',
      events: this.inputValidation(),
    });
    this.children.inputSurName = new Input({
      type: 'text',
      id: 'surname',
      name: 'second_name',
      minlength: '3',
      maxlength: '20',
      placeholder: 'Фамилия',
      required: true,
      className: 'form__input',
      events: this.inputValidation(),
    });
    this.children.inputPhone = new Input({
      type: 'tel',
      id: 'phone',
      name: 'phone',
      placeholder: 'Телефон',
      required: true,
      className: 'form__input',
      events: this.inputValidation(),
    });
    this.children.inputPassword = new Input({
      type: 'text',
      id: 'password',
      name: 'password',
      minlength: '8',
      maxlength: '40',
      placeholder: 'Пароль',
      required: true,
      className: 'form__input',
      events: this.inputValidation(),
    });
    this.children.inputPasswordAgain = new Input({
      type: 'text',
      id: 'passwordagain',
      name: 'password_again',
      minlength: '8',
      maxlength: '40',
      placeholder: 'Пароль (еще раз)',
      required: true,
      className: 'form__input',
      events: this.inputValidation(),
    });
  }

  inputValidation() {
    return {
      focus: (e) => {
        validateInputs({ elementId: e.target.id, regexp: PATTERN_VALIDATION[e.target.id] });
      },
      blur: (e) => {
        validateInputs({ elementId: e.target.id, regexp: PATTERN_VALIDATION[e.target.id] });
      },
    };
  }

  render() {
    return this.compile(template, {});
  }
}