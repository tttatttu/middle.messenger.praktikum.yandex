// import {loginPage} from '../pages/';
import {SignUpPage} from '../pages/SignUp/signup';
// import {errorPage} from '../pages/errors/error';
import {SignInPage} from "../pages/SignIn/signin";
import Router from "./Router";
import {PasswordEditPage} from "../pages/PasswordEdit/PasswordEdit";
import ProfilePage from "../pages/Profile/index";
import ChatPage from "../pages/Chat/index";
import ProfileEditPage from "../pages/ProfileEdit/index";
// import {chatPage} from '../pages/Chat/chat/id';

export const init = () => {


    const router = new Router();

    router
        .use('/signup', SignUpPage)
        .use('/signin', SignInPage)
        .use('/profile', ProfilePage)
        .use('/editprofile', ProfileEditPage)
        .use('/password', PasswordEditPage)
        .use('/messages', ChatPage)
        .use('/', SignInPage)

    // router.go('/profile')

    // router.go('/messenger')
    // ChatController.getChats()


    // AuthController.fetchUser().then(() => { router.go('/messages')})
    //     .catch ((e) => {
    // console.log("Ошибка при получении данных пользователя", e)
    // router.go('/signin')})


    // ChatController.getChats()
    // // ChatController.createChat('z')
    // .then(() => {
    //  router.go('/messages');
    // })
    // .catch(() => router.go('/signin'));

    router.start()

};
