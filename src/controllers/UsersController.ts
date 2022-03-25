import store from '../utils/Store'
import UsersApi, {UpdatePasswordData} from "../api/UsersApi";
import {SignUpData} from "../api/AuthApi";
import Router from "../utils/Router";


class UsersController {
    private api: UsersApi

    constructor() {
        this.api = new UsersApi()
    }


    async createChat(data) {
        const response = await this.api.create(data)
        store.set('chatToTitle', response)
    }

    async updateProfile(data: SignUpData) {
        await this.api.updateProfile(data);

        const router = new Router()
        router.go('/profile')
    }

    async updatePassword(data: UpdatePasswordData) {
        const {newPassword_again, ...UpdatePasswordData} = data
        await this.api.updatePassword(UpdatePasswordData)

        const router = new Router()
        router.go('/profile')
    }

}

export default new UsersController();
