import AuthApi from "../api/AuthApi";
import store from '../utils/Store'
import ChatsApi, {ChatsData} from "../api/ChatsApi";


class ChatController {
    private api: ChatsApi

    constructor() {
        this.api = new ChatsApi()
    }
    async getChats() {
        const response = await this.api.read()
        // console.log(response)
        store.set('chatList', response)
        // console.log(store.getState())
    }

    async createChat() {
        const response = await this.api.create('z')
        console.log(response)
        // store.set('chatList', response)
    }
}

export default new ChatController();
