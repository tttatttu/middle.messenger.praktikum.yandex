import Block from '../../utils/Block';
import { Button } from '../../components/Button/button';
import template from './authorization.hbs';
import { Input } from '../../components/Input/input';
import { PATTERN_VALIDATION } from '../../utils/CONST';
import { validateInputs } from '../../utils/Valid';

export class AuthorizationPage extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
    this.children.button = new Button({
      text: 'Авторизоваться',
      type: 'submit',
      className: 'popup__button button_blueviolet',
      events: {
        click: (e) => {
          e.preventDefault();

          validateInputs(
            { elementId: 'login', regexp: PATTERN_VALIDATION.login },
            { elementId: 'password', regexp: PATTERN_VALIDATION.password },
          );
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
