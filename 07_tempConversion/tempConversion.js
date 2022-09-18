const ftoc = function(F) {
  return Math.round((F - 32) * 50 / 9) / 10 ;
};

const ctof = function(C) {
  return Math.round ((C * 90 / 5) + 320) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
