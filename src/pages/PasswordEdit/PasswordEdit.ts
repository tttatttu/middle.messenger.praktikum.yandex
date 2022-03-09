import Block from '../../utils/Block';
import template from './passwordEdit.hbs';
import { Input } from '../../components/Input/input';
import { PATTERN_VALIDATION } from '../../utils/CONST';
import { Button } from '../../components/Button/button';
import { validateInputs } from '../../utils/Valid';

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

          validateInputs(
            { elementId: 'oldPassword', regexp: PATTERN_VALIDATION.oldPassword },
            { elementId: 'oldPassword', regexp: PATTERN_VALIDATION.oldPassword },
            { elementId: 'newPasswordAgain', regexp: PATTERN_VALIDATION.newPasswordAgain },
          );
        },
      },
    });
    this.children.inputOldPassword = new Input({
      type: 'text',
      id: 'oldPassword',
      name: 'oldPassword',
      minlength: '8',
      maxlength: '40',
      placeholder: 'Введите пароль',
      required: true,
      className: 'form__input',
      events: this.inputValidation(),
    });
    this.children.inputNewPassword = new Input({
      type: 'text',
      id: 'newPassword',
      name: 'newPassword',
      minlength: '8',
      maxlength: '40',
      placeholder: 'Введите новый пароль',
      required: true,
      className: 'form__input',
      events: this.inputValidation(),
    });
    this.children.inputPasswordAgain = new Input({
      type: 'text',
      id: 'newPasswordAgain',
      name: 'newPasswordAgain',
      minlength: '8',
      maxlength: '40',
      placeholder: 'Повторите новый пароль',
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
