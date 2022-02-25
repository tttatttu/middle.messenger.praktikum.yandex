import Block from '../../utils/Block';
import template from './login.hbs';
import { Button } from '../../components/Button/button';

export class LoginPage extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
    this.children.button = new Button({
      text: 'ну я даже и не знаю',
      events: {
        click: () => console.log('ура'),
      },
    });
  }

  render() {
    return this.compile(template, {});
  }
}
