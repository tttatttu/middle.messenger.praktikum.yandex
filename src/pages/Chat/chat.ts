import Block from '../../utils/Block';
import template from '../Chat/chat.hbs';
import { Input } from '../../components/Input/input';
import { Link } from '../../components/Link/link';
import { ChatHeader } from '../../components/ChatHeader/chatHeader';
import { UserList } from '../../components/UserList/userList';
import { Button } from '../../components/Button/button';
import { Message } from '../../components/Message/message';

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
const messages = [
  {
    name: 'Name',
    text:
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника',
    time: '12:34',
    className: 'message_companion',
  },
  {
    text: 'Здесь будет мое сообщение',
    time: '15:34',
    className: 'message_my',
  },
  {
    name: 'Name',
    text:
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника',
    time: '16:00',
    className: 'message_companion',
  },
  {
    name: 'Name',
    text:
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника',
    time: '17:00',
    className: 'message_companion',
  },
  {
    name: 'Name',
    text:
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника. ' +
      'Здесь будет самый длинный текст сообщения от моего собеседника',
    time: '18:00',
    className: 'message_companion',
  },
];

export class ChatPage extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
    this.children.user = new UserList({ users });
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
      className: 'chat__search',
    });
    this.children.chatHeader = new ChatHeader({
      alt: 'avatar',
      href: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
      name: 'Tanya',
    });
    this.children.inputMessage = new Input({
      type: 'text',
      id: 'message',
      name: 'message',
      value: '',
      placeholder: 'Сообщение',
      className: 'chat__message',
    });
    this.children.buttonMessage = new Button({
      type: 'submit',
      className: 'chat__btn',
      events: { click: () => console.log(document.getElementById('message').value) },
    });
    this.children.buttonClip = new Button({
      type: 'submit',
      className: 'chat__clip',
      events: { click: () => console.log('прикрепить файл') },
    });
    this.children.messages = new Message({ messages });
  }

  render() {
    return this.compile(template, {});
  }
}
