import template from './button.hbs';
import Block from '../../utils/Block';

interface ButtonProps {
  type?: string;
  className?: string;
  text: string;
  events?: {
    click: () => void;
  };
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
