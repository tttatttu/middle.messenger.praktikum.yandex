import store from '../utils/Store';
import ChatsApi from '../api/ChatsApi';

class ChatController {
  private api: ChatsApi;

  constructor() {
    this.api = new ChatsApi();
  }
  async getChats() {
    const response = await this.api.read();
    store.set('chatList', response);
  }

  async createChat(data: any) {
    const response = await this.api.create(data);
    store.set('chatToTitle', response);
  }
  async addUserToChat(chatId: number, userId: number | string) {
    return await this.api.addUserToChat(chatId, userId);
  }

  deleteUserFromChat(chatId: number, userId: number | string) {
    return this.api.deleteUserFromChat(chatId, userId);
  }

  async getChatUsers(data: number) {
    return await this.api.getChatUsers(data);
  }

  async deleteChat(chatId: number) {
    await this.api.deleteChat(chatId);
  }

  async getToken(id: number) {
    const res = await this.api.getToken(id);
    console.log(res);
  }
}

export default new ChatController();
