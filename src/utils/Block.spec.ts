import {expect} from 'chai';
import Block from './Block';

class TestBlock extends Block {
    constructor(number: number) {
        super({ number });
    }

    render() {
        return this.compile(() => `<p>блок: ${this.props.number}</p>`, {});
    }
}

class TestChildren extends Block {
    constructor(number: number, child: string) {
        super({ number, child });
    }

    render() {
        return this.compile(() => `<p>блок: ${this.props.number}${this.props.child}</p>`, {});
    }
}

describe('Проверяем Block.ts', () => {
    it('Отрисовка контента с пришедшими props', () => {
        const testBlock = new TestBlock(100500);
        expect(testBlock.getContent()?.textContent).to.eq('блок: 100500');
    });

    it('Отрисовка детей - children', () => {
        const testBlockWithChild = new TestChildren(5, '<span>-)</span>');
        expect(testBlockWithChild.getContent()?.innerHTML).to.eq('блок: 5<span>-)</span>');
    });

    it('Обновление контента через setProps()', () => {
        const testBlock = new TestBlock(100500);
        testBlock.setProps({ number: 4 });
        expect(testBlock.getContent()?.textContent).to.eq('блок: 4');
    });
});
