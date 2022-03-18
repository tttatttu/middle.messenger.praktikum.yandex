import BaseAPI from "./BaseAPI";


export interface UsersData {
    id: number
}



export default class UsersApi extends BaseAPI {
    constructor() {
        super('/user');
    }

    create(data: UsersData): Promise<unknown> {
        return this.http.post('', data)
    }

    // getUser(data:UsersData): Promise<unknown> {
    //     return this.http.get('/', data)
    // }


    // create = undefined
    read = undefined
    update = undefined
    delete = undefined
}
