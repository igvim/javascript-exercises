const reverseString = function(str) {
    /*
    last char in first position
    n -> 0
    n - 1 -> 1
    n - 2 -> 2
    ...
    0 -> n
    Not sure if I can:
    -subtract indices
    -add chars to a string by calling the index
    */
   let rts = '';
    let end = str.length-1;
    for (let i = 0; i <= end; i++){
        rts += str[end-i];
    }
    return rts;
};

// Do not edit below this line
module.exports = reverseString;
