const palindromes = function (text) {
    newText = text.toLowerCase();
    newText = newText.replace(/[\W]/gi, "");
    return reverseString(newText) === newText;
};

const reverseString = function(string) {
    let newString = "";
    string = string.toString()
    for (let i = string.length-1; i > -1; i--) {
        newString += string[i];
    } 
    return newString
    };
// Do not edit below this line
module.exports = palindromes;
