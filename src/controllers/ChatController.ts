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
        // console.log(response)
        store.set('chatToTitle', response)
    }
    async addUserToChat(chatId, userId) {
        return await this.api.addUserToChat(chatId, userId);
    }

   deleteUserFromChat(chatId, userId) {
        return this.api.deleteUserFromChat(chatId, userId);
    }

    async getChatUsers(data) {
        return await this.api.getChatUsers(data);
    }

    async deleteChat(chatId) {
        await this.api.deleteChat(chatId);
    }

    async getToken(id) {
       const res = await this.api.getToken(id);
       console.log(res)
    }
}

export default new ChatController();
