import Block from '../../utils/Block';
import template from './profile.hbs';
import { Profile } from '../../components/Profile/profile';
import { Button } from '../../components/Button/button';
import AuthController from '../../controllers/AuthController';
import Router from '../../utils/Router';
import Link from '../../components/Link/index';

const titleList = {
  email: 'Почта',
  login: 'Логин',
  first_name: 'Имя',
  second_name: 'Фамилия',
  display_name: 'Имя в чате',
  phone: 'Телефон',
};

let profile: { title: any; text: unknown }[];
export class ProfilePage extends Block {
  constructor(props: any) {
    profile = Object.entries(props)
      // @ts-ignore
      .map((el) => ({ title: titleList[el[0]], text: el[1] }))
      .filter(({ title }) => title !== 'id' && title !== 'avatar' && title);
    super({ ...props });
  }

  protected initChildren() {
    this.children.editProfile = new Link({
      href: '/editprofile',
      text: 'Редактировать профиль',
      className: 'profile__link',
      router: new Router(),
    });
    this.children.editPassword = new Link({
      href: '/password',
      text: 'Изменить пароль',
      className: 'profile__link',
      router: new Router(),
    });
    this.children.buttonLogout = new Button({
      text: 'Выйти',
      type: 'button',
      className: 'popup__button button_blueviolet',
      events: {
        click: () => {
          AuthController.logout();
        },
      },
    });
    this.children.buttonBack = new Button({
      text: '<<',
      type: 'button',
      className: 'profile__button',
      events: {
        click: (e: any) => {
          e.preventDefault();
          const router = new Router();
          router.go('/messages');
        },
      },
    });
    this.children.profileComponent = new Profile({ profiles: [...profile] });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
