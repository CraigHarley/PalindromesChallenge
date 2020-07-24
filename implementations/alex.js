export const PalindromeDescendant = value => {
    value = value.toString()
    if (value.length === 1 || isPalindromeCheck(value)) return true
    const nextChild = findDirectChild(value)
    if (value.length === 2 && nextChild.length <= 2) {
        return nextChild.length === 1
            ? isPalindromeCheck(value)
            : isPalindromeCheck(nextChild)
    }
    return PalindromeDescendant(nextChild)
};
function findDirectChild(value) {
    const valueSplitArray = value.match(/.{1,2}/g), newValue = []
    for (let i = 0; i < valueSplitArray.length; i++) {
        const chunk = valueSplitArray[i].split('')
        newValue.push(parseInt(chunk[0]) + parseInt(chunk[1]))
    }
    return newValue.join('')
}
function isPalindromeCheck(value) {
    return value === value.split('').reverse().join('')
}
