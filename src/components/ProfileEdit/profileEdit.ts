import template from './profileEdit.hbs';
import Block from '../../utils/Block';

interface ProfileEditProps {
  title: string;
  className?: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  pattern?: string;
  required?: boolean;
  minlength?: string;
  maxlength?: string;
  events?: any;
}

interface ProfilesEditProps {
  profiles: ProfileEditProps[];
}

export class ProfileEdit extends Block {
  constructor(props: ProfilesEditProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
