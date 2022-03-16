import AuthApi, {SignInData, SignUpData} from "../api/AuthApi";

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

        if (response.reason) {
            throw new Error(response.reason)
        }
    }

    async signIn(data: SignInData) {
        await this.api.signIn(data)
    }
}

export default new AuthController();
