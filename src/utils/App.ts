
// import {loginPage} from '../pages/';
import {RegistrationPage} from '../pages/Registration/registration';
// import {errorPage} from '../pages/errors/error';
import {ProfilePage} from '../pages/Profile/profile';
import {chatsPage} from '../pages/Chat/chat';
import {AuthorizationPage} from "../pages/Authorization/authorization";
import Router from "./Router";
// import {chatPage} from '../pages/Chat/chat/id';

export const init = () => {
    const router = new Router();
    const profilePage = new ProfilePage();

    console.log(ProfilePage.name)
    router

        .use('/sign-up', RegistrationPage)
        .use('/settings', ProfilePage)
        .use('/messenger', chatsPage)
        .use('/', AuthorizationPage)

    // router.go('/profile')
    //
    // router.start()

    window.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const href = target?.getAttribute('href') || target?.closest('a')?.getAttribute('href');
        console.log(target)
        if (href && href[0] === '/') {
            e.preventDefault();
            router.go(href);
        }
    });
    //
    window.onload = router.start;
};
