import Block from '../../utils/Block';
import template from './profile.hbs';
import {Profile} from '../../components/Profile/profile';
import {Button} from "../../components/Button/button";
import AuthController from "../../controllers/AuthController";
import Router from "../../utils/Router";

const titleList = {
  'email': 'Почта',
  'login': 'Логин',
  'first_name': 'Имя',
  'second_name': 'Фамилия',
  'display_name': 'Имя в чате',
  'phone': 'Телефон'
}

let profile
export class ProfilePage extends Block {

  constructor(props) {
    profile = Object.entries(props).map((el) => ({title: titleList[el[0]], text: el[1]})).filter(({title}) => title !== 'id' && title !== 'avatar' && title)
    super({...props, getChats: () => this.getChats()});

  }

  componentDidMount() {
    AuthController.fetchUser()
    console.log('componentDidMount')
  }

  // async getChats() {
  //   try {
  //     await ChatController.getChats();
  //   } catch (error) {
  //     alert(`Ошибка в запросе чатов! ${error ? error.reason : ''}`);
  //   }
  // }

  protected initChildren() {
    this.children.buttonLogout = new Button({
      text: 'Выйти',
      type: 'button',
      className: 'popup__button button_blueviolet',
      events: {
        click: () => {
          AuthController.logout()}
      }
    })
    this.children.buttonBack = new Button({
      text: '<<',
      type: 'button',
      className: 'profile__button',
      events: {
        click: (e) => {
          e.preventDefault();
          const router = new Router()
          router.go('/messages')
        },
      },
    });
    // this.children.profile = new Profile({profiles: [...profile]});
    this.children.profile = new Profile({profiles: [...profile]});
  }

  render() {
    // console.log("Props>>>>>>>>",this.props)
    // console.log("Props>>>>>>>>", store)
    return this.compile(template, {...this.props});
  }
}
