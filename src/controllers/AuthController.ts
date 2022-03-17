import AuthApi, {SignInData, SignUpData} from "../api/AuthApi";
import store from '../utils/Store'

export interface ControllerSignUpData extends SignUpData {
 password_again: string
}
class AuthController {
    private api: AuthApi

    constructor() {
        this.api = new AuthApi()
    }
    async signUp(data: ControllerSignUpData) {
        // if (data.password_again !== data.password) {
        //     throw new Error('Пароли не совпадают')
        // }

        const {password_again, ...signUpData} = data

            const response = await this.api.signUp(signUpData)
            console.log(response)

        // if (response.reason) {
        //     throw new Error(response.reason)
        // }
    }

    async signIn(data: SignInData) {
        const response = await this.api.signIn(data)
        console.log(response)
    }

    async logout() {
        await this.api.logout()
    }

    async featchUser() {
        const user = await this.api.read()

        store.set('currentUser', user)
    }
}

export default new AuthController();
