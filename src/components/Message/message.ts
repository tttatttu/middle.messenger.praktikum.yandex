import template from './message.hbs';
import Block from '../../utils/Block';

interface MessageProps {
  name?: string;
  text: string;
  time: string;
  className?: string;
}
interface MessagesProps {
  messages: MessageProps[];
}

export class Message extends Block {
  constructor(props: MessagesProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
