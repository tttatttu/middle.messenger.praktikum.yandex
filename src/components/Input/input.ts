import template from './input.hbs';
import Block from '../../utils/Block';

interface InputProps {
  type: string;
  id: string;
  name: string;
  minlength?: string;
  maxlength?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  value?: string;
  events?: {
    onChange: () => void;
  };
  pattern?: any;
}

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
