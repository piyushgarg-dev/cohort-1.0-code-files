const add = function (x, y) {
  return x + y;
};

const subtract = function (a, b) {
  // This subtracts a and b
  return a - b;
};

const mul = function (a, b) {
  return a * b;
};

// Default
module.exports = {
  adding: add,
  subtract,
  mul,
};
