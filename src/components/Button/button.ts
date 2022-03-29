import template from './button.hbs';
import Block from '../../utils/Block';

interface ButtonProps {
  type?: string;
  className?: string;
  text?: string;
  events?: {
    click: any;
  };
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    // @ts-ignore
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
