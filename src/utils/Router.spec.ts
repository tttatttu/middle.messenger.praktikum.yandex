import { expect } from 'chai';
import { beforeEach } from 'mocha';
import Block from './Block';
import Router from './Router';

class SignInPage extends Block {
  render() {
    return this.compile(() => '<p>starting page</p>', {});
  }
}

class AnotherPage extends Block {
  render() {
    return this.compile(() => '<p>another page</p>', {});
  }
}

const router = new Router();

describe('Проверяем Router.ts', () => {
  beforeEach(() => {
    router.use('src/', SignInPage).use('src/test', AnotherPage).start();
  });

  it('Начальная инициализация работает', () => {
    expect(window.location.pathname).to.eq('/');
  });

  it('Метод go() работает', () => {
    router.go('/test');
    expect(window.location.pathname).to.eq('/test');
  });

  it('Метод back() работает', () => {
    router.back();
    expect(window.location.pathname).to.eq('/test');
  });

  it('Метод forward() работает', () => {
    router.forward();
    expect(window.location.pathname).to.eq('/test');
  });
});
