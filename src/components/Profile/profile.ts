import template from './profile.hbs';
import Block from '../../utils/Block';

export class Profile extends Block {
    constructor(props: { profiles: { title: any; text: unknown }[] }) {
    super({...props});
  }

  render() {
    return this.compile(template,  {...this.props} );
  }
}
