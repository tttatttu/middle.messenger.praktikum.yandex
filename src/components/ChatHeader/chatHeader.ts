import Block from '../../utils/Block';
import template from './chatHeader.hbs';

interface ChatHeaderProps {
  alt: string;
  href: string;
  name: string;
}

export class ChatHeader extends Block {
  constructor(props: ChatHeaderProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
