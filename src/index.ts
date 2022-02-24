import {renderDOM} from "./utils/renderDOM";
import {LoginPage} from "./pages/Login/login";
import {AuthorizationPage} from "./pages/Authorization/authorization";


document.addEventListener('DOMContentLoaded', () => {
    const loginPage = new LoginPage()
    const authorizationPage = new AuthorizationPage()

    renderDOM('#app', authorizationPage)
})
