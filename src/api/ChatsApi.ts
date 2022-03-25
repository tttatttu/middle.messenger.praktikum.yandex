import BaseAPI from './BaseAPI';

export interface ChatData {
  id?: string;
  title?: string;
  chatId?: number;
  userId?: number;
}

export default class ChatsApi extends BaseAPI {
  constructor() {
    super('/chats');
  }

  create(data: ChatData): Promise<string> {
    return this.http.post('', data);
  }

  read(): Promise<string> {
    return this.http.get('');
  }

  addUserToChat(chatId: number, userId: number | string) {
    return this.http.put(`/users`, { users: [userId], chatId });
  }

  deleteUserFromChat(chatId: number, userId: number | string) {
    return this.http.delete(`/users`, { users: [userId], chatId });
  }

  getChatUsers(data: number | string): Promise<string> {
    return this.http.get(`/${data}/users`);
  }

  deleteChat(chatId: number): Promise<string> {
    return this.http.delete('', { chatId });
  }

  getToken(id: number): Promise<string> {
    return this.http.post(`/token/${id}`);
  }

  update = undefined;
  delete = undefined;
}
