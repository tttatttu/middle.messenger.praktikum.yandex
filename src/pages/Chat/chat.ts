import Block from '../../utils/Block';
import template from '../Chat/chat.hbs';
import { Input } from '../../components/Input/input';
import { Link } from '../../components/Link/link';
import { ChatHeader } from '../../components/ChatHeader/chatHeader';
import { UserList } from '../../components/UserList/userList';
import { Button } from '../../components/Button/button';

const users = [
  {
    alt: 'avatar',
    href: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
    className: 'chat__profile',
    name: 'Name',
    time: '12:23',
    text: 'Это может быть самый длинный текст в мире, но я постараюсь его вписать в это ограниченное пространство',
    unread: 3,
  },
  {
    alt: 'avatar',
    href: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
    className: 'chat__profile',
    name: 'Vasya',
    time: '12:23',
    text: 'Это может быть самый длинный текст в мире, но я постараюсь его вписать в это ограниченное пространство',
    unread: 15,
  },
  {
    alt: 'avatar',
    href: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
    className: 'chat__profile',
    name: 'Vasya',
    time: '12:23',
    text: 'Это может быть самый длинный текст в мире, но я постараюсь его вписать в это ограниченное пространство',
  },
];

export class ChatPage extends Block {
  constructor() {
    super();
    this.users = users;
  }

  protected initChildren() {
    this.children.link = new Link({
      text: 'Профиль >',
      href: '../profile/profile.hbs',
      className: 'chat__profile',
    });
    this.children.inputSearch = new Input({
      type: 'text',
      id: 'search',
      name: 'search',
      placeholder: 'Поиск',
      className: 'chat__input',
    });
    this.children.userList = new UserList({ ...this.users });
    this.children.chatHeader = new ChatHeader({
      alt: 'avatar',
      href: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
      name: 'Tanya',
    });
    this.children.inputMessage = new Input({
      type: 'text',
      id: 'message',
      name: 'message',
      placeholder: 'Сообщение',
      className: 'chat__message',
    });
    this.children.buttonMessage = new Button({
      text: '^^',
      type: 'submit',
      className: 'chat__menu',
      events: {
        click: () => console.log('сообщение отправлено'),
      },
    });
    this.children.buttonClip = new Button({
      text: 'clip',
      type: 'submit',
      className: 'chat__menu',
      events: {
        click: () => console.log('сообщение отправлено'),
      },
    });
  }

  render() {
    return this.compile(template, {});
  }
}
