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
let messages
export class Message extends Block {

  constructor(props: MessagesProps) {
    messages = Object.entries(props)
    console.log('ifihiehvefhvpivf', props)
    super({...props});
  }

  render() {
    console.log('ifihiehvefhvpivf', this.props)

    return this.compile(template, { ...this.props });
  }
}
