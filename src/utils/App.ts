
// import {loginPage} from '../pages/';
import {SignUpPage} from '../pages/SignUp/signup';
// import {errorPage} from '../pages/errors/error';
import {ProfilePage} from '../pages/Profile/profile';
import {chatsPage} from '../pages/Chat/chat';
import {AuthorizationPage, SignInPage} from "../pages/SignIn/signin";
import Router from "./Router";
import AuthController from "../controllers/AuthController";
// import {chatPage} from '../pages/Chat/chat/id';

export const init =  () => {

    const router = new Router();

    router
        .use('/signup', SignUpPage)
        .use('/signin', SignInPage)
        .use('/profile', ProfilePage)
        .use('/messenger', chatsPage)
        // .use('/', AuthorizationPage)

    // router.go('/profile')
    try {
        AuthController.featchUser().then(() => { router.go('/profile')})
    } catch (e) {
        console.log("Ошибка при получении данных пользователя", e)
    }

    router.start()

    window.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const href = target?.getAttribute('href') || target?.closest('a')?.getAttribute('href');

        if (href && href[0] === '/') {
            e.preventDefault();
            router.go(href);
        }
    });
    //
    window.onload = router.start;
};
