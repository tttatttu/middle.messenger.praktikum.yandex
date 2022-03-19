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

export class Profile extends Block {
  constructor(props: ProfilesProps) {

    console.log(props)
    super({...props});
  }

  render() {
    console.log(this.props)
    return this.compile(template,  {...this.props} );
  }
}
