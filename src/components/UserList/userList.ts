import Block from '../../utils/Block';
import template from './userList.hbs';
import ChatController from '../../controllers/ChatController';
import store from '../../utils/Store';
import { getParentDataSetParam } from '../../utils/helpers';

interface UserListProps {
  avatar: string;
  className?: string;
  id: string;
  time?: string;
  title: string;
  last_message?: string;
  unread_count?: number;
  created_by: string;
}

interface UsersListProps {
  users: UserListProps[];
}

export class UserList extends Block {
  constructor(props: UsersListProps) {
    super({
      ...props,
      events: { click: (e: PointerEvent) => this.addUser(e)},
    });
  }

  updatePage(id: number) {
    const host = 'ya-praktikum.tech';
    const userId = store?.getState().currentUser?.id;

    fetch(`https://${host}/api/v2/chats/token/${id}`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${data.token}`);

        socket.addEventListener('open', () => {
          console.log('Соединение установлено');

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

  async addUser(e: any) {
    e.preventDefault();

    const id = Number(getParentDataSetParam(e.target as HTMLElement, 'user', 'id'));

    if (id) {
      this.updatePage(id)
      store.set('currentChatId', id);
      await ChatController.getChatUsers(id);
      const currentChat = this.props.chatList.filter((el: any) => el.id === id);
      store.set('currentChat', currentChat[0]);
    }
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
