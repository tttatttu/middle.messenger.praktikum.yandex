import Block from '../../utils/Block';
import template from './profileEdit.hbs';
import { ProfileEdit } from '../../components/ProfileEdit/profileEdit';
import { Button } from '../../components/Button/button';
import { Input } from '../../components/Input/input';
import { PATTERN_VALIDATION } from '../../utils/CONST';

const profiles = [
  {
    title: 'Почта',
    className: 'profile__input',
    type: 'email',
    id: 'email',
    name: 'email',
    placeholder: 'Введите почту',
    value: 'email',
    pattern: '/^[A-Za-z0-9,.,-]{1,}[@]([A-Za-z0-9,.,-]{1,}[.][A-Za-z]{1,}){1,2}$/g',
    required: true,
    events: {
      focus: (e) => {
        const error = document.getElementById('email-error');

        if (!e.target.validity.valid) {
          error.classList.add('error_email_active');
        } else {
          error.remove();
        }
      },
      blur: (e) => {
        const error = document.getElementById('email-error');

        if (!e.target.validity.valid) {
          error.classList.add('error_email_active');
        } else {
          error.remove();
        }
      },
    },
  },
  {
    title: 'Логин',
    className: 'profile__input',
    type: 'text',
    id: 'login',
    name: 'login',
    placeholder: 'Введите логин',
    value: 'login',
    pattern: '/[А-ЯЁ][а-яё][0-9]+(_-[А-ЯЁ][а-яё][0-9]+)?/g',
    required: true,
    events: {
      focus: (e) => {
        const error = document.getElementById('login-error');

        if (!e.target.validity.valid) {
          error.classList.add('error_login_active');
        } else {
          error.remove();
        }
      },
      blur: (e) => {
        const error = document.getElementById('login-error');

        if (!e.target.validity.valid) {
          error.classList.add('error_login_active');
        } else {
          error.remove();
        }
      },
    },
    minlength: '3',
    maxlength: '20',
  },
  {
    title: 'Имя',
    className: 'profile__input',
    type: 'text',
    id: 'first_name',
    name: 'first_name',
    placeholder: 'Введите имя',
    value: 'first_name',
    pattern: '/^[А-ЯЁ]([а-яё]{1,29})([-][А-ЯЁ]([а-яё]{1,29}))$/g',
    required: true,
    events: {
      focus: (e) => {
        const error = document.getElementById('first_name-error');

        if (!e.target.validity.valid) {
          error.classList.add('error_first_name_active');
        } else {
          error.remove();
        }
      },
      blur: (e) => {
        const error = document.getElementById('first_name-error');

        if (!e.target.validity.valid) {
          error.classList.add('error_first_name_active');
        } else {
          error.remove();
        }
      },
    },
  },
  {
    title: 'Фамилия',
    className: 'profile__input',
    type: 'text',
    id: 'second_name',
    name: 'second_name',
    placeholder: 'Введите фамилию',
    value: 'second_name',
    pattern: '/^[А-ЯЁ]([а-яё]{1,29})([-][А-ЯЁ]([а-яё]{1,29}))$/g',
    required: true,
    events: {
      focus: (e) => {
        const error = document.getElementById('second_name-error');

        if (!e.target.validity.valid) {
          error.classList.add('error_second_name_active');
        } else {
          error.remove();
        }
      },
      blur: (e) => {
        const error = document.getElementById('second_name-error');

        if (!e.target.validity.valid) {
          error.classList.add('error_second_name_active');
        } else {
          error.remove();
        }
      },
    },
  },
  {
    title: 'Имя в чате',
    className: 'profile__input',
    type: 'text',
    id: 'display_name',
    name: 'display_name',
    placeholder: 'Введите имя в чате',
    value: 'display_name',
    pattern: '/^[А-ЯЁ]([а-яё]{1,29})([-][А-ЯЁ]([а-яё]{1,29}))$/g',
    required: true,
    events: {
      focus: (e) => {
        const error = document.getElementById('display_name-error');

        if (!e.target.validity.valid) {
          error.classList.add('error_display_name_active');
        } else {
          error.remove();
        }
      },
      blur: (e) => {
        const error = document.getElementById('display_name-error');

        if (!e.target.validity.valid) {
          error.classList.add('error_display_name_active');
        } else {
          error.remove();
        }
      },
    },
  },
  {
    title: 'Телефон',
    className: 'profile__input',
    type: 'tel',
    id: 'phone',
    name: 'phone',
    placeholder: 'Введите телефон',
    value: 'phone',
    pattern:
      '([\\+]7[\\(]\\d{3}[\\)]\\s?\\d{3}[\\-]\\d{2}[\\-]\\d{2})|([\\+]7\\s\\d{3}[\\-]\\d{3}[\\-]\\d{2}[\\-]\\d{2})|(([\\+]7|8)\\d{10})',
    required: true,
    events: {
      focus: (e) => {
        const error = document.getElementById('phone-error');

        if (!e.target.validity.valid) {
          error.classList.add('error_phone_active');
        } else {
          error.remove();
        }
      },
      blur: (e) => {
        const error = document.getElementById('phone-error');

        if (!e.target.validity.valid) {
          error.classList.add('error_phone_active');
        } else {
          error.remove();
        }
      },
    },
  },
];

export class ProfileEditPage extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
    this.children.block = new ProfileEdit({ profiles });
    this.children.button = new Button({
      text: 'Сохранить',
      type: 'submit',
      className: 'profile__submit',
      events: {
        click: (e) => {
          e.preventDefault();

          const email = document.getElementById('email');
          const login = document.getElementById('login');
          const name = document.getElementById('name');
          const surname = document.getElementById('surname');
          const display_name = document.getElementById('display_name');
          const phone = document.getElementById('phone');
          console.log(email.value, login.value, name.value, surname.value, display_name.value, phone.value);
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
    this.children.inputDisplayName = new Input({
      type: 'text',
      id: 'display_name',
      name: 'display_name',
      minlength: '3',
      maxlength: '20',
      placeholder: 'Имя в чате',
      required: true,
      className: 'popup__input',
      pattern: PATTERN_VALIDATION.login,
      value: '',
      events: {
        focus: (e) => {
          const error = document.getElementById('display_name-error');

          if (!e.target.validity.valid) {
            error.classList.add('popup__error_active');
            error.classList.remove('popup__error_normal');
          } else {
            error.classList.add('popup__error_normal');
            error.classList.remove('popup__error_active');
          }
        },
        blur: (e) => {
          const error = document.getElementById('display_name-error');

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
  }

  render() {
    return this.compile(template, {});
  }
}
