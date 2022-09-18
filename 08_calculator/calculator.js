const add = function(...theArgs) {
	let total = 0;
  for (thisArg of theArgs) {
      total += thisArg;}
  return total;
  }

const subtract = function(a,b) {
  return a-b;}

const sum = function(anArray) {
  let total = 0;
  for (thisNum of anArray) {
      total += thisNum;}
  return total;
	
};

const multiply = function(anArray) {
  let total = 1;
  for (thisNum of anArray) {
      total *= thisNum;}
  return total;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
	let result = 1;
  for (i = n; i > 0; i--) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
