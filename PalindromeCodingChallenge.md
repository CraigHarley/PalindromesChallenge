# Palindrome Descendant

A number may not be a palindrome, but its descendant can be. A number's direct child is created by summing each pair of adjacent digits to create the digits of the next number.

For instance, 123312 is not a palindrome, but its next child 363 is, where: 3 = 1 + 2; 6 = 3 + 3; 3 = 1 + 2.

Create a function that returns true if the number itself is a palindrome or any of its descendants down to 2 digits (a 1-digit number is trivially a palindrome).
Examples

```
PalindromeDescendant(11211230) ➞ true
// 11211230 -> 2333 -> 56 -> 11

PalindromeDescendant(13001120) ➞ true
// 13001120 ➞ 4022 ➞ 44

PalindromeDescendant(23336014) ➞ true
// 23336014 ➞ 5665

PalindromeDescendant(11) ➞ true
// Number itself is a palindrome.
```

Notes
* Numbers will always have an even number of digits.
* Tests are below to check your solution:
```
import PalindromeDescendant from 'pd.js';

describe('PalindromeDescendant', () =>
    it('should give the correct result', () => {
        expect(PalindromeDescendant(11211230)).toBe(true);
        expect(PalindromeDescendant(13001120)).toBe(true);
        expect(PalindromeDescendant(23336014)).toBe(true);
        expect(PalindromeDescendant(11)).toBe(true);
        expect(PalindromeDescendant(9)).toBe(true);

        expect(PalindromeDescendant(17)).toBe(false);
        expect(PalindromeDescendant(4213)).toBe(false);
    })
);
```
* I'll then run the solutions in [Benchmark.js](https://github.com/bestiejs/benchmark.js)
* Points will be awards for Performance + Readability 