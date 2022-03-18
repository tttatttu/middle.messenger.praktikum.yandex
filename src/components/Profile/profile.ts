import template from './profile.hbs';
import Block from '../../utils/Block';

interface ProfileProps {
  title: string;
  text: string;
  className?: string;
}
interface ProfilesProps {
  profiles: ProfileProps[];
}

let list
export class Profile extends Block {
  constructor(props: ProfilesProps) {
    list = props
    super(props);
  }

  render() {
    return this.compile(template,  {...this.props} );
  }
}
