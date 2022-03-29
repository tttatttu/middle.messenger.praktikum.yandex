import Block from '../../utils/Block';
import template from '../Chat/chat.hbs';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { validateInputs } from '../../utils/Valid';
import { PATTERN_VALIDATION } from '../../utils/Const';
import ChatController from '../../controllers/ChatController';
import UserList from '../../components/UserList/index';
import store from '../../utils/Store';
import Link from '../../components/Link/index';
import Router from '../../utils/Router';
import ChatHeader from '../../components/ChatHeader/index';
import Message from '../../components/Message/index';

export class ChatPage extends Block {
  constructor(props: Record<string, unknown> | undefined) {
    super({ ...props });
    this.onGetChat();
  }

  async onGetChat() {
    await ChatController.getChats();
  }

  onSendMessage() {
    const data = validateInputs({ elementId: 'message', regexp: PATTERN_VALIDATION.message });
    if (data) {
      this.updatePage(data);
      // console.log('Сообщение отправлено!', data);
    }
    console.log(store);
  }

  updatePage(message: { message?: string }) {
    const host = 'ya-praktikum.tech';
    const userId = store?.getState().currentUser?.id;
    const chatId = store?.getState().currentChatId;
    console.log(userId);

    fetch(`https://${host}/api/v2/chats/token/${chatId}`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${data.token}`);

        socket.addEventListener('open', () => {
          console.log('Соединение установлено');

          socket.send(
            JSON.stringify({
              content: message.message,
              type: 'message',
            }),
          );

          socket.send(
            JSON.stringify({
              content: '0',
              type: 'get old',
            }),
          );
        });

        socket.addEventListener('close', (event) => {
          if (event.wasClean) {
            console.log('Соединение закрыто чисто');
          } else {
            console.log('Обрыв соединения');
          }

          console.log(`Код: ${event.code} | Причина: ${event.reason}`);
        });

        socket.addEventListener('message', (event) => {
          console.log('Получены данные', event.data);

          const data = this.parseMessage([].concat(JSON.parse(event.data)), userId);
          this.props.message = data.concat(this.props.message);

          store.set('messages', this.props.message);

          if (event.type === 'get old') {
            console.log('старые сообщения', event.data);
          } else {
            console.log('Новые сообщения', event.data);
          }
        });

        socket.addEventListener('error', (event) => {
          console.log('Ошибка', event);
        });
      });
  }

  parseMessage(arr: { time: string; content: string; user_id: string }[], userId: any) {
    return arr.map(({ time, content, user_id }) => {
      const date = time.replace(/\S+[T]/, '').replace(/[:]\d{2}[+]\S+/, '');
      return {
        time: date,
        text: content,
        className: user_id === userId ? 'message_my' : 'message_companion',
      };
    });
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
        click: (e: { preventDefault: () => void }) => {
          e.preventDefault();
          // @ts-ignore
          const title = document.getElementById('title').value;

          ChatController.createChat({ title });
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
      router: new Router(),
    });
    this.children.inputSearch = new Input({
      type: 'text',
      id: 'search',
      name: 'search',
      placeholder: 'Поиск',
      value: '',
      className: 'chat__search',
    });
    this.children.chatHeader = new ChatHeader({});
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
        click: (e: any) => {
          e.preventDefault();
          this.onSendMessage();
        },
      },
    });
    this.children.buttonClip = new Button({
      type: 'submit',
      className: 'chat__clip',
      events: { click: () => console.log('прикрепить файл') },
    });
    // this.children.messages = new Message({messages : [...messagesProps]});
    this.children.messages = new Message({});
  }

  inputValidation() {
    return {
      focus: (e: any) => {
        // @ts-ignore
        validateInputs({ elementId: e.target.id, regexp: PATTERN_VALIDATION[e.target.id] });
      },
      blur: (e: any) => {
        // @ts-ignore
        validateInputs({ elementId: e.target.id, regexp: PATTERN_VALIDATION[e.target.id] });
      },
    };
  }

  render() {
    return this.compile(template, {});
  }
}
