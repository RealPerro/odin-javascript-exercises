out = []
const getTheTitles = function(hash) {
    for (b in hash) {out.push(hash[b]["title"])}
    return out;
};

// Do not edit below this line
module.exports = getTheTitles;
