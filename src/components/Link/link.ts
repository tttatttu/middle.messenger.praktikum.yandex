import template from './link.hbs';
import Block from '../../utils/Block';

interface LinkProps {
  href: string;
  className?: string;
  text: string;
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
