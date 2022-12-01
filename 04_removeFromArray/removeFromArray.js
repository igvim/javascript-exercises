const removeFromArray = function(arr, ...args) {
    /*
    grab each element of the args array (args[i])
    for each element of the entered array, if the values match,
    remove the element (splice) at that position from the entered arr
    if not a match do nothing
    return the new array
    */
   for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (args[i] === arr[j]) arr.splice(j,1);
    }
   }
   return arr;
};

// Do not edit below this line
module.exports = removeFromArray;