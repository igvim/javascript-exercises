const palindromes = function (str) {
    const cleanStr = str.toLowerCase().match(/[a-z]/g);
    const reverse = [...cleanStr].reverse();
    for (i = 0; i <= cleanStr.length; i++) {
        if (cleanStr[i] !== reverse[i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
