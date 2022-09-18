const fibonacci = function(n) {
    if (n < 0) {return "OOPS";}
    let fibArray = [0,1];
    for ( let i = 2; i <= n; i++ ) {
        fibArray.push(fibArray[i-2] + fibArray[i-1]);
    }
    return fibArray[n];
};

// Do not edit below this line
module.exports = fibonacci;
