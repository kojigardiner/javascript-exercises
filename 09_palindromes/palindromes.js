const palindromes = function (string) {
    const lower = string.toLowerCase();
    const chars = Array.from(lower).filter(char => isAlphaNumeric(char));  // remove all non-alphanumeric characters

    for (let i = 0; i < Math.floor(chars.length / 2); i++) {
        if (chars[i] !== chars[chars.length - 1 - i]) return false;
    }
    return true;
};

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    return ((code > 47 && code < 58) ||     // 0-9
        (code > 64 && code < 91) ||         // A-Z
        (code > 96 && code < 123));         // a-z
}

// Do not edit below this line
module.exports = palindromes;
