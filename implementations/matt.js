export function palindromeDescendant(num) {
    let isPalindrome = isNumberPalindrome(num);
    if (!isPalindrome) {
        let descendant = findDescendant(num);
        while (descendant.length > 1 && !isPalindrome) {
            isPalindrome = isNumberPalindrome(descendant);
            descendant = findDescendant(descendant)
        }
    }
    return isPalindrome;
}
function findDescendant(num) {
    const numArray = ("" + num).split("");
    let descendant = [];
    for (let i = 0; i < numArray.length; i += 2) {
        if (typeof numArray[i + 1] === "undefined") {
            descendant.push(parseFloat(numArray[i]));
        } else {
            const newNum = parseFloat(numArray[i]) + parseFloat(numArray[i + 1]);
            descendant.push(newNum);
        }
    }
    return descendant.join("");
}
function isNumberPalindrome(num) {
    const numArray = ("" + num).split("");
    for (let i = 0; i < (numArray.length / 2); i++) {
        if (numArray[i] !== numArray[numArray.length - (i + 1)]) {
            return false;
        }
    }
    return true;
}
