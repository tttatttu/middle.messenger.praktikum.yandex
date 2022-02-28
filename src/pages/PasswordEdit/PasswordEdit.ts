import Block from '../../utils/Block';
import template from './passwordEdit.hbs';
import { Profile } from '../../components/Profile/profile';

const profiles = [
  {
    title: 'Почта',
    text: 'email',
  },
  {
    title: 'Логин',
    text: 'login',
  },
  {
    title: 'Имя',
    text: 'first_name',
  },
  {
    title: 'Фамилия',
    text: 'second_name',
  },
  {
    title: 'Имя в чате',
    text: 'display_name',
  },
  {
    title: 'Телефон',
    text: 'phone',
  },
];

export class PasswordEditPage extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
    this.children.profile = new Profile({ profiles });
  }

  render() {
    return this.compile(template, {});
  }
}
