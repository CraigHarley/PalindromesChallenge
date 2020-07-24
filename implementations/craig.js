const isPalindrome = (str) =>
    str.split('').reverse().join('') === str;
const pairReducer = (accumulator, currentValue, index, array) => {
    if (index % 2 === 0) {
        accumulator.push(array.slice(index, index + 2));
    }
    return accumulator;
};
const toString = (number) =>
    number
        .toString();

export const palindromeDescendant = (input, previousInput) => {
    if (input.toString().length === 1 && previousInput === undefined){
        return true;
    }
    if (input.toString().length === 1 && previousInput.toString().length > 0){
        return false;
    }
    if (isPalindrome(input.toString())) {
        return true;
    }
    const chunks = input
        .toString()
        .split('')
        .reduce(pairReducer, []);
    return palindromeDescendant(
        Number.parseInt(
            chunks
                .map(elements =>
                    Number.parseInt(elements[0]) + Number.parseInt(elements[1])
                )
                .map(toString)
                .join('')
        ),
        input
    );
}
