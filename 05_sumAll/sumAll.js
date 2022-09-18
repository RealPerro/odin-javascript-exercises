const sumAll = function(int1, int2) {
    let total = 0;
    let total2;
    //returns error if negative number
    if (int1 < 0 || int2 < 0) {return "ERROR"}; 

    //returns error if not a number
    if (typeof int1 !== 'number' || typeof int2 !== 'number') {return "ERROR"}; 

    //sort biggest
    bigNum = Math.max(int1, int2);
    smallNum = Math.min(int1, int2);

    /*
    for (let i = smallNum; i <= bigNum; i++) {
        total += i;
    }
    */

    total2 = (bigNum-smallNum+1) * (bigNum-smallNum+2) / 2


    //return total
    return total2;


};

// Do not edit below this line
module.exports = sumAll;
