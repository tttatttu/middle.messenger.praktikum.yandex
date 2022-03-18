import store from '../utils/Store'
import ChatsApi from "../api/ChatsApi";


class ChatController {
    private api: ChatsApi

    constructor() {
        this.api = new ChatsApi()
    }
    async getChats() {
        const response = await this.api.read()
        // console.log(response)
        store.set('chatList', response)
    }

    async createChat(data) {
        const response = await this.api.create(data)
        console.log(response)
        store.set('chatToTitle', response)
    }
    async addUserToChat(chatId, userId) {
        return this.api.addUserToChat(chatId, userId);
    }

   deleteUserFromChat(chatId, userId) {
        return this.api.deleteUserFromChat(chatId, userId);
    }

    async getChatUsers(data) {
        return this.api.getChatUsers(data);
    }
}

export default new ChatController();
