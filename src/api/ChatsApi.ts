import BaseAPI from "./BaseAPI";


export interface ChatData {
    id?: string,
    title?: string,
    chatId?: number,
    userId?: number
}



export default class ChatsApi extends BaseAPI {
    constructor() {
        super('/chats');
    }

    create(data: ChatData): Promise<string> {
        return this.http.post('', data)
    }

    read(): Promise<string> {
        return this.http.get('')
    }

    addUserToChat(chatId: ChatData, userId: ChatData) {
        return this.http.put(`/users`, { users: [userId], chatId })
    }

    deleteUserFromChat(chatId: ChatData, userId: ChatData) {
        return this.http.delete(`/users`, { users: [userId], chatId })
    }

    getChatUsers(data: ChatData): Promise<string> {
        return this.http.get(`/${data}/users`);
    }

    deleteChat(chatId: ChatData): Promise<string> {
        return this.http.delete('', {chatId} );
    }

    getToken(id: ChatData): Promise<string> {
        return this.http.post(`/token/${id}`);
    }

    update = undefined
    delete = undefined
}
