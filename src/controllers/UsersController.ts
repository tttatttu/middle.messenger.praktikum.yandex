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
    }

    async updatePassword(data: UpdatePasswordData) {
        console.log(data)
        if (data.newPassword_again !== data.newPassword) {
            // store.set('currentPassword.error','Пароли не совпадают')
            alert('Пароли не совпадают')

            return
        }

        const {password_again, ...UpdatePasswordData} = data
        await this.api.updatePassword(UpdatePasswordData)

        const router = new Router()
        router.go('/profile')


    }

}

export default new UsersController();
