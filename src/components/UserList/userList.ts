import Block from '../../utils/Block';
import template from './userList.hbs';

interface UserListProps {
  alt: string;
  href: string;
  className: string;
  name: string;
  time: string;
  text: string;
  unread: number;
}

export class UserList extends Block {
  constructor(props: UserListProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
