import {palindromeDescendant as craig} from './craig.js';
import {palindromeDescendant as matt} from './matt.js';

describe('PalindromeDescendant', () => {
        it('matts should give the correct result', () =>
            test(matt)
        );

        it('craigs should give the correct result', () =>
            test(craig)
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
