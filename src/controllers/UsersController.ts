import store from '../utils/Store'
import UsersApi from "../api/UsersApi";


class UsersController {
    private api: UsersApi

    constructor() {
        this.api = new UsersApi()
    }


    async createChat(data) {
        const response = await this.api.create(data)
        console.log(response)
        store.set('chatTotle', response)
    }
}

export default new UsersController();
