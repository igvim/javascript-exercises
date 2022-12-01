const sumAll = function(a, b) {
   const sumA = (a**2+a)/2;
   const sumB = (b**2+b)/2;
   let sum = 0;
   if (a > b) {
    let c = b-1
    let smallerSum = (c**2+c)/2;
    sum = sumA-smallerSum;
    return sum;
   }
   else {
    let c = a-1
    let smallerSum = (c**2+c)/2;
    sum = sumB-smallerSum;
    return sum;
   }
};

// Do not edit below this line
module.exports = sumAll;
