// palindromeGenerator.js
function generatePalindrome(digitCount) {
    if (digitCount <= 0) {
        throw new Error('Digit count must be a positive integer');
    }

    const halfLength = Math.ceil(digitCount / 2);
    let palindrome = '';

    for (let i = 0; i < halfLength; i++) {
        palindrome += Math.floor(Math.random() * 10).toString();
    }

    palindrome += palindrome.slice(0, digitCount % 2 === 0 ? 0 : -1).split('').reverse().join('');

    return parseInt(palindrome);
}

module.exports = {
    generatePalindrome
};
