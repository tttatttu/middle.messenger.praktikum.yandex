import { renderDOM } from './utils/renderDOM';
import { AuthorizationPage } from './pages/SignIn/signin';
import { ChatPage } from './pages/Chat/chat';
import { ProfilePage } from './pages/Profile/profile';
import { ProfileEditPage } from './pages/ProfileEdit/profileEdit';
import { RegistrationPage } from './pages/SignUp/signup';
import { PasswordEditPage } from './pages/PasswordEdit/PasswordEdit';
import {init} from "./utils/App";


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
