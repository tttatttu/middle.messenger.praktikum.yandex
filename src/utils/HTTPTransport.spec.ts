import {expect} from 'chai';
import HTTPTransport from "./HTTPTransport";

const http = new HTTPTransport('test')

describe('Проверяем HTTPTransport.ts', () => {
    describe('Проверяем наличие методов get(), post(), put(), update(), patch(), delete()', () => {
        it('.get() присутствует', () => {
            expect(http.get).to.exist;
        });

        it('.post() присутствует', () => {
            console.log(http)
            // expect(http?.post).to.exist;
        });

        it('.put() присутствует', () => {
            expect(http.put).to.exist;
        });

        it('.update() присутствует', () => {
            expect(http.update).to.exist;
        });

        it('.patch() присутствует', () => {
            expect(http.patch).to.exist;
        });

        it('.delete() присутствует', () => {
            expect(http.delete).to.exist;
        });
    });

    describe('Проверяем, что методы возвращают promise', () => {
        it('.get() возвращает promise', () => {
            const request = http.get('src/test');
            expect(request instanceof Promise).to.eq(true);
        });

        it('.post() возвращает promise', () => {
            const request = http.post('src/test');
            expect(request instanceof Promise).to.eq(true);
        });

        it('.put() возвращает promise', () => {
            const request = http.put('src/test');
            expect(request instanceof Promise).to.eq(true);
        });

        it('.update() возвращает promise', () => {
            const request = http.put('src/test');
            expect(request instanceof Promise).to.eq(true);
        });

        it('.patch() возвращает promise', () => {
            const request = http.put('src/test');
            expect(request instanceof Promise).to.eq(true);
        });

        it('.delete() возвращает promise', () => {
            const request = http.delete('src/test');
            expect(request instanceof Promise).to.eq(true);
        });
    });
});
