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

    create(data: ChatData): Promise<unknown> {
        return this.http.post('', data)
    }

    read(): Promise<unknown> {
        return this.http.get('')
    }

    addUserToChat(chatId: ChatData, userId: ChatData) {
        return this.http.put(`/users`, { users: [userId], chatId })
    }

    deleteUserFromChat(chatId: ChatData, userId: ChatData) {
        return this.http.delete(`/users`, { users: [userId], chatId })
    }

    getChatUsers(data: ChatData): Promise<unknown> {
        return this.http.get(`/${data}/users`);
    }

    deleteChat(chatId: ChatData): Promise<unknown> {
        return this.http.delete('', {chatId} );
    }

    getToken(id: ChatData): Promise<unknown> {
        return this.http.post(`/token/${id}`);
    }

    // create = undefined
    // read = undefined
    update = undefined
    delete = undefined
}
