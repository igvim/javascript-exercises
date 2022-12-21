const fibonacci = function(n) {
    if (n <= 0) return 'OOPS';
    let a = 0;
    let b = sum = 1;
    for (i = 1; i < parseInt(n); i++) {
        sum = a + b;
        a = b;
        b = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
