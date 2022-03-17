import BaseAPI from "./BaseAPI";

export interface SignUpData {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}

export interface SignInData {
    login: string;
    password: string;
}

export default class AuthApi extends BaseAPI {
    constructor() {
        super('/auth');
    }
    signUp(data: SignUpData): Promise<unknown> {
        // console.log('1', data)
        return this.http.post('/signup', data)
    }

    signIn(data: SignInData): Promise<unknown> {
        return this.http.post('/signin', data)
    }

    logout(): Promise<unknown> {
        return this.http.post('/logout')
    }

    read(): Promise<unknown> {
        return this.http.get('/user')
    }


    create = undefined
    // read = undefined
    update = undefined
    delete = undefined
}
