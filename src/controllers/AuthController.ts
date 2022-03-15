import AuthApi, {SignInData, SignUpData} from "../api/AuthApi";

export default class AuthController {
    private api: AuthApi

    constructor() {
        this.api = new AuthApi()
    }
    signUp(data: SignUpData) {
        await this.api.signUp(data)
    }

    signIn(data: SignInData) {
        await this.api.signIn(data)
    }
}
