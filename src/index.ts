import { renderDOM } from './utils/renderDOM';
import { AuthorizationPage } from './pages/Authorization/authorization';
import { ChatPage } from './pages/Chat/chat';
import { ProfilePage } from './pages/Profile/profile';
import { ProfileEditPage } from './pages/ProfileEdit/profileEdit';

document.addEventListener('DOMContentLoaded', () => {
  const authorizationPage = new AuthorizationPage();
  const chat = new ChatPage();
  const profilePage = new ProfilePage();
  const profileEditPage = new ProfileEditPage();

  renderDOM('#app', chat);
});
