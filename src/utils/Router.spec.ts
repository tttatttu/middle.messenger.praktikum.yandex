import {expect} from 'chai';
import {beforeEach} from 'mocha';
import Block from './Block';
import Router from "./Router";

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

const router = new Router()

describe('Проверяем Router.ts', () => {
    beforeEach(() => {
        router
            .use('/', SignInPage)
            .use('/test', AnotherPage)
            .start();
    });

    it('Начальная инициализация работает', () => {
        expect(window.location.pathname).to.eq('/');
    });

    it('Метод go() работает', () => {
        router.go('/test');
        expect(window.location.pathname).to.eq('/test');
    });

    it('Переход на несуществующий роут кидает на 404', () => {
        router.go('/qwe');
        expect(window.location.pathname).to.eq('/404');
    });

    it('Контент отрисовывается', () => {
        router.go('/test');
        expect(document.querySelector('.app')?.textContent).to.eq('another page');
    });
});
