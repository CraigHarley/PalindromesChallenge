import {palindromeDescendant as craig} from './implementations/craig.js';
import {palindromeDescendant as matt} from './implementations/matt.js';
import {PalindromeDescendant as alex} from './implementations/alex.js';

describe('PalindromeDescendant', () => {
        it('matts should give the correct result', () =>
            test(matt)
        );

        it('craigs should give the correct result', () =>
            test(craig)
        );

        it('alexs should give the correct result', () =>
            test(alex)
        );
    }
);

export const test = (func) => {
    expect(func(11211230)).toBe(true);
    expect(func(13001120)).toBe(true);
    expect(func(23336014)).toBe(true);
    expect(func(11)).toBe(true);
    expect(func(9)).toBe(true);

    expect(func(17)).toBe(false);
    expect(func(4213)).toBe(false);
}
