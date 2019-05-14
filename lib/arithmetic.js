'use strict';

let arithmetic = module.exports = {};

const checkVals = (a,b) => {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
};

arithmetic.add = function(a,b) {
  if (typeof a === 'object' && a.length > 1) {
    return a.reduce((a,b) => a + b);
  }
  if (checkVals(a,b) === null) return null;
  return a+b;
};

arithmetic.subtract = function (a,b) {
  if (typeof a === 'object' && a.length > 1) {
    return a.reduce((a,b) => a - b);
  }
  if (checkVals(a,b) === null) return null;
  return a-b;
};

arithmetic.multiply = function (a,b) {
  if (typeof a === 'object' && a.length > 1) {
    return a.reduce((a,b) => a * b);
  }
  if (checkVals(a,b) === null) return null;
  return a * b;
};

arithmetic.divide = function (a,b) {
  if (checkVals(a,b) === null) return null;
  if (b === 0) return null;
  return a / b;
};