import '@testing-library/jest-dom';
import {classNames} from '006_shared/lib/styles/classNames/classNames';

describe('classNames', () => {
    it('app class', () => {
        const expected = 'someClass';
        expect(classNames('someClass')).toBe(expected)
    })
    it('app class with two additional classes', () => {
        const expected = 'someClass class2 class3';
        expect(classNames('someClass', {}, ['class2', 'class3'])).toBe(expected)
    })
    it('app class with two additional adn two mods', () => {
        const expected = 'someClass class5 class2 class3';
        expect(classNames(
            'someClass',
            {class4: false, class5: true},
            ['class2', 'class3'])).toBe(expected)
    })
})
