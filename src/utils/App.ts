import { SignUpPage } from '../pages/SignUp/signup';
import { SignInPage } from '../pages/SignIn/signin';
import Router from './Router';
import { PasswordEditPage } from '../pages/PasswordEdit/PasswordEdit';
import ProfilePage from '../pages/Profile/index';
import ChatPage from '../pages/Chat/index';
import ProfileEditPage from '../pages/ProfileEdit/index';
import AuthController from '../controllers/AuthController';
import '../styles/styles.scss'

export const init = async () => {
  const router = new Router();

  router
    .use('/signup', SignUpPage)
    .use('/signin', SignInPage)
    .use('/profile', ProfilePage)
    .use('/editprofile', ProfileEditPage)
    .use('/password', PasswordEditPage)
    .use('/messages', ChatPage)
    .use('/', SignInPage);

  try {
    await AuthController.fetchUser();
  } catch (e) {
    router.go('/signin');
  }

  router.start();
};
