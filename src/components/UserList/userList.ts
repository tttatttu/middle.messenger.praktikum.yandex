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
      events: { click: (e: PointerEvent) => this.addUser(e) },
    });
  }

  async addUser(e: any) {
    e.preventDefault();

    const id = Number(getParentDataSetParam(e.target as HTMLElement, 'user', 'id'));
    if (id) {
      store.set('currentChatId', id);
      const chatUsers = await ChatController.getChatUsers(id);
      const currentChat = this.props.chatList.filter((el: any) => el.id === id);
      store.set('currentChat', currentChat[0]);
      console.log('Пользователи чата: ', chatUsers);
    }
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
