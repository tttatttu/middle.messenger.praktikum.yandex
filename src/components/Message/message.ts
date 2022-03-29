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
    console.log('4444444444', props)
    super({ ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
