import Block from '../../utils/Block';
import template from '../Chat/chat.hbs';
import {Input} from '../../components/Input/input';
import {Link} from '../../components/Link/link';
import {ChatHeader} from '../../components/ChatHeader/chatHeader';
import {Button} from '../../components/Button/button';
import {Message} from '../../components/Message/message';
import {validateInputs} from '../../utils/Valid';
import {PATTERN_VALIDATION} from '../../utils/CONST';
import AuthController from "../../controllers/AuthController";
import ChatController from "../../controllers/ChatController";
import UserList from "../../components/UserList/index";
import store from "../../utils/Store";


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
  constructor(props) {

    super({
      ...props,
    });
  }

  async getProfileInfo() {
    try {
      await AuthController.fetchUser();
    } catch (e) {
      alert('Ошибка при получении данных пользователя", e');
    }
  }

  async onGetChat () {
    await ChatController.getChats()
  }
  onSendMessage() {
    const data = validateInputs({ elementId: 'message', regexp: PATTERN_VALIDATION.message });
    if (data) {
      console.log('Сообщение отправлено!', data);
    }
  }

  protected initChildren() {
    this.children.user = new UserList({});
    this.children.inputCreateChat = new Input({
      type: 'text',
      id: 'title',
      name: 'title',
      placeholder: 'Новый_чат',
      value: '',
      className: 'chat__message',
    });
    this.children.buttonCreateChat = new Button({
      type: 'submit',
      className: 'chat__btn',
      events: {
        click: (e) => {
          e.preventDefault();
          const title = document.getElementById('title').value

          ChatController.createChat({title})
        },
      },
    });
    this.children.buttonAddUserToChat = new Button({
      type: 'button',
      text: 'Добавить пользователя',
      events: {
        click: () => {
          const userId = prompt('Введите ID пользователя для добавления в текущий чат');
          if (userId) {
            ChatController.addUserToChat(store.getState().currentChatId, userId)
                .then(() => alert('Пользователь добавлен!'))
                .catch((error) => alert(`Ошибка: ${error ? error.reason : ''}`));
          } else {
            alert('Поле не должно быть пустым!');
          }
        },
      },
    });
    this.children.buttonDeleteUserFromChat = new Button({
      type: 'button',
      text: 'Удалить пользователя',
      events: {
        click: () => {
            const userId = prompt('Введите ID пользователя для удаления из текущего чата');
            if (userId) {
              ChatController.deleteUserFromChat(store.getState().currentChatId, userId)
                  .then(() => alert('Пользователь удалён!'))
                  .catch((error) => alert(`Ошибка: ${error ? error.reason : ''}`));
            } else {
              alert('Поле не должно быть пустым!');
            }

        },
      },
    });
    this.children.link = new Link({
      text: 'Профиль >',
      href: '/profile',
      className: 'chat__profile',
    });
    this.children.inputSearch = new Input({
      type: 'text',
      id: 'search',
      name: 'search',
      placeholder: 'Поиск',
      value: '',
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
      events: {
        click: (e) => {
          e.preventDefault();
          this.onSendMessage()
        },
      },
    });
    this.children.buttonClip = new Button({
      type: 'submit',
      className: 'chat__clip',
      events: { click: () => console.log('прикрепить файл') },
    });
    this.children.messages = new Message({ messages });
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
