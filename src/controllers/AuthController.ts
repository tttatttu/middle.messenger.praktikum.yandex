import AuthApi, {SignInData, SignUpData} from "../api/AuthApi";
import store from '../utils/Store'
import Router from "../utils/Router";

export interface ControllerSignUpData extends SignUpData {
 password_again: string
}
class AuthController {
    private api: AuthApi

    constructor() {
        this.api = new AuthApi()
    }
    async signUp(data: ControllerSignUpData) {
        if (data.password_again !== data.password) {
            store.set('currentUser.error','Пароли не совпадают')

            return
        }

        const {password_again, ...signUpData} = data
        // store.set('currentUser.isLoading', true)
        const response = await this.api.signUp(signUpData)
        // store.set('currentUser.isLoading', false)

        if (response.reason) {
             store.set('currentUser.error',response.reason)

            return
        }

        await this.featchUser()

        const router = new Router()
        router.go('/profile')
    }

    async signIn(data: SignInData) {
        await this.api.signIn(data)

        const router = new Router()
        router.go('/profile')
    }

    async logout() {
        await this.api.logout()

        const router = new Router()
        router.go('/signin')
    }

    async featchUser() {
        const user = await this.api.read()

        store.set('currentUser', user)
    }
}

export default new AuthController();
