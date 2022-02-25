import { renderDOM } from './utils/renderDOM';
import { LoginPage } from './pages/Login/login';
import { AuthorizationPage } from './pages/Authorization/authorization';
import { ChatPage } from './pages/Chat/chat';

document.addEventListener('DOMContentLoaded', () => {
  const loginPage = new LoginPage();
  const authorizationPage = new AuthorizationPage();
  const chat = new ChatPage();

  renderDOM('#app', chat);
});
