import Block from '../../utils/Block';
import template from './userList.hbs';

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
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
