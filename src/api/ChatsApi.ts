import BaseAPI from "./BaseAPI";
import {SignUpData} from "./AuthApi";



export interface SignInData {
    login: string;
    password: string;
}



export default class ChatsApi extends BaseAPI {
    constructor() {
        super('/chats');
    }

    create(title: string): Promise<unknown> {
        return this.http.post('')
    }

    read(): Promise<unknown> {
        return this.http.get('')
    }

    // create = undefined
    // read = undefined
    update = undefined
    delete = undefined
}
