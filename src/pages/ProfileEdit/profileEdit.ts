import Block from '../../utils/Block';
import template from './profileEdit.hbs';
import { Button } from '../../components/Button/button';
import { Input } from '../../components/Input/input';
import { PATTERN_VALIDATION } from '../../utils/CONST';
import { validateInputs } from '../../utils/Valid';

export class ProfileEditPage extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
    this.children.button = new Button({
      text: 'Сохранить',
      type: 'submit',
      className: 'popup__button button_blueviolet',
      events: {
        click: (e) => {
          e.preventDefault();

          validateInputs(
            { elementId: 'email', regexp: PATTERN_VALIDATION.email },
            { elementId: 'login', regexp: PATTERN_VALIDATION.login },
            { elementId: 'name', regexp: PATTERN_VALIDATION.name },
            { elementId: 'surname', regexp: PATTERN_VALIDATION.surname },
            { elementId: 'display_name', regexp: PATTERN_VALIDATION.display_name },
            { elementId: 'phone', regexp: PATTERN_VALIDATION.phone },
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
      name: 'name',
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
      name: 'surname',
      minlength: '3',
      maxlength: '20',
      placeholder: 'Фамилия',
      required: true,
      className: 'form__input',
      events: this.inputValidation(),
    });
    this.children.inputDisplayName = new Input({
      type: 'text',
      id: 'display_name',
      name: 'display_name',
      minlength: '3',
      maxlength: '20',
      placeholder: 'Имя в чате',
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
