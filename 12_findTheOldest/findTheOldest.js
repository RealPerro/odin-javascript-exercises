let findTheOldest = function(hash) {
    let result = [];
    let oldest = 0;
    const currentYear = new Date().getFullYear();
    for (b in hash) {
        hash[b]["yearOfDeath"] = hash[b]["yearOfDeath"] ? 
                                    hash[b]["yearOfDeath"] : currentYear;
        let thisAge = hash[b]["yearOfDeath"] - hash[b]["yearOfBirth"];
        (hash[b]["yearOfDeath"] && hash[b]["yearOfBirth"]) ?
                                    hash[b]["age"] = thisAge : hash[b]["age"] = 0;
        if (hash[oldest]["age"] < thisAge) {oldest = b;};  
                    };
    return hash[oldest];
}

// Do not edit below this line
module.exports = findTheOldest;