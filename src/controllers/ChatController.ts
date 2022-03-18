import store from '../utils/Store'
import ChatsApi from "../api/ChatsApi";


class ChatController {
    private api: ChatsApi

    constructor() {
        this.api = new ChatsApi()
    }
    async getChats() {
        const response = await this.api.read()
        console.log(response)
        store.set('chatList', response)
    }

    async createChat() {
        const response = await this.api.create('z')
        console.log(response)
        // store.set('chatList', response)
    }
}

export default new ChatController();
