const removeFromArray = function(theArray, ...theArgs) {
    for (const thisArg of theArgs) {
        theArray = theArray.filter(function(value, index, arr){
            return value !== thisArg});
    }
    return theArray;
};

// Do not edit below this line
module.exports = removeFromArray;
