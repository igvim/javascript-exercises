const repeatString = function(string, num) {
    let repeatStr = '';
    if (num < 0) return 'ERROR';
    for (i = 0; i < num; i++){
        repeatStr = repeatStr.concat(string);
    }
    return repeatStr;
}

// Do not edit below this line
module.exports = repeatString;
