
// import {loginPage} from '../pages/';
import {SignUpPage} from '../pages/SignUp/signup';
// import {errorPage} from '../pages/errors/error';
import {ProfilePage} from '../pages/Profile/profile';
import {chatsPage} from '../pages/Chat/chat';
import {AuthorizationPage} from "../pages/Authorization/authorization";
import Router from "./Router";
// import {chatPage} from '../pages/Chat/chat/id';

export const init = () => {
    const router = new Router();
    const profilePage = new ProfilePage();

    router

        .use('/', SignUpPage)
        .use('/settings', ProfilePage)
        .use('/messenger', chatsPage)
        // .use('/', AuthorizationPage)

    // router.go('/profile')
    //
    // router.start()

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
