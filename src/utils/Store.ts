import { EventBus } from './EventBus';
import { Indexed, set } from './helpers';
import Block from './Block';
import { isEqual } from './Router';
import { SignUpData } from '../api/AuthApi';

export enum StoreEvents {
  Updated = 'updated',
}

interface UserData {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}
export interface ChatsData {
  id: number | string;
  title: string;
  avatar: string;
  unread_count: any;
  last_message: {
    user: SignUpData;
    time: string;
    content: string;
  };
}

interface StoreData {
  chatList?: ChatsData;
  currentUser?: UserData;
  currentChatId?: number;
  chatToTitle?: string;
  currentChat?: UserData[];
  messages?: any;
}

class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvents.Updated);
  }
}

const store = new Store();

export const withStore =
  (mapStateToProps: (state: StoreData) => Record<string, unknown>) => (Component: typeof Block) => {
    let state: any;

    return class extends Component {
      constructor(props: any) {
        state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState());

          if (!isEqual(state, newState)) {
            this.setProps({ ...newState });
            state = newState;
          }
        });
      }
    };
  };

export default store;

export const withUser = withStore((state: StoreData) => ({ ...state.currentUser }));
export const withChats = withStore((state: StoreData) => ({ chatList: state.chatList }));
export const withCurrentChat = withStore((state: StoreData) => ({ ...state.currentChat }));
export const withMessages = withStore((state: StoreData) => ({ messages: state.messages }));
