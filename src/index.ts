import {init} from "./utils/App";
import {SignUpPage} from "./pages/SignUp/signup";
import {SignInPage} from "./pages/SignIn/signin";
import ProfilePage from "./pages/Profile/index";
import {ChatPage} from "./pages/Chat/chat";
import ChatController from "./controllers/ChatController";
import Router from "./utils/Router";


// document.addEventListener('DOMContentLoaded', () => {
//   const authorizationPage = new AuthorizationPage();
//   const chat = new ChatPage();
//   const profilePage = new ProfilePage();
//   const profileEditPage = new ProfileEditPage();
//   const registrationPage = new RegistrationPage();
//   const passwordEditPage = new PasswordEditPage();
//
//   renderDOM('#app', passwordEditPage);
// });
 init()


// export const router = new Router();
//
// router.use('/signup', SignUpPage)
//     .use('/signin', SignInPage)
//     .use('/profile', ProfilePage)
//     .use('/messenger', ChatPage);
//
//
// // ChatController.getChats()
// //     .then(() => {
// //      router.go('/messages');
// //     })
// //     .catch(() => router.go('/signin'));
//
// router.start();
