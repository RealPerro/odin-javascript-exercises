const caesar = function(text, shift) {
    
    if (shift == 0) {return text;}

    shift = shift % 26;

    const shiftChar = function(char) {
        //get code from current char
        let thisCode = char.charCodeAt(0);

        //shif code
        let newCode = thisCode + shift;

        //wrap code if necessary
        lowerRange = [97,122];
        upperRange = [65,90];

        //originally lowercase
        if (thisCode >= lowerRange[0] && thisCode <= lowerRange[1]) {
            if (newCode > lowerRange[1]) {newCode = newCode - 26}
            if (newCode < lowerRange[0]) {newCode = newCode + 26}
        }

        //originally uppercase
        if (thisCode >= upperRange[0] && thisCode <= upperRange[1]) {
            if (newCode > upperRange[1]) {newCode = newCode - 26}
            if (newCode < upperRange[0]) {newCode = newCode + 26}
        }

        let newChar = String.fromCharCode(newCode);
        return newChar;
    }
    let encriptedText = text.replace(/[A-Za-z]/gi, shiftChar );

    return encriptedText;
};



// Do not edit below this line
module.exports = caesar;
