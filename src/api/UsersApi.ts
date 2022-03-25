import BaseAPI from "./BaseAPI";
import {SignUpData} from "./AuthApi";

export interface UsersData {
    id: number
}

export interface UpdatePasswordData {
    oldPassword: string;
    newPassword: string;
    newPassword_again?: string
}


export default class UsersApi extends BaseAPI {
    constructor() {
        super('/user');
    }

    create(data: string): Promise<string> {
        return this.http.post('', data)
    }

    // getUser(data:UsersData): Promise<unknown> {
    //     return this.http.get('/', data)
    // }

    updateProfile(data: SignUpData): Promise<string> {
        return this.http.put('/profile', data)
    }

    updatePassword(data: UpdatePasswordData): Promise<string> {
        return this.http.put('/password', data)
    }

    read = undefined
    update = undefined
    delete = undefined
}
