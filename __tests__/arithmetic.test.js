'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('aritmetic .add', () => {

  it('accepts two numbers as parameters', () => {
    let result = arithmetic.add(7, 2);
    expect(result).not.toBe(null);
  });

  it('accepts an array of numbers as a parameter', () => {
    let result = arithmetic.add([1,2,3,4,5]);
    expect(result).toStrictEqual(15);
  });

  it('does not accept strings', () => {
    let result = arithmetic.add('7', '2');
    expect(result).toBe(null);
  });

  it('correctly adds two numbers', () => {
    let result = arithmetic.add(7, 2);
    expect(result).toEqual(9);
  });
});

describe('aritmetic .subtract', () => {

  it('accepts two numbers as parameters', () => {
    let result = arithmetic.subtract(9, 8);
    expect(result).not.toBe(null);
  });

  it('accepts an array of numbers as a parameter', () => {
    let result = arithmetic.subtract([10,2,3,4,5]);
    expect(result).toStrictEqual(-4);
  });

  it('does not accept strings', () => {
    let result = arithmetic.subtract('9', '8');
    expect(result).toBe(null);
  });

  it('correctly subtracts two numbers', () => {
    let result = arithmetic.subtract(9, 8);
    expect(result).toEqual(1);
  });
});

describe('arithmetic .multiply', () => {
  it('accepts two numbers as parameters', () => {
    let result = arithmetic.multiply(4, 3);
    expect(result).not.toBe(null);
  });

  it('accepts an array of numbers as a parameter', () => {
    let result = arithmetic.multiply([1,2,3,4,5]);
    expect(result).toStrictEqual(120);
  });

  it('does not accept strings', () => {
    let result = arithmetic.multiply('4', '3');
    expect(result).toBe(null);
  });

  it('correctly multiplies two numbers', () => {
    let result = arithmetic.multiply(4, 3);
    expect(result).toEqual(12);
  });
});

describe('arithmetic .divide', () => {
  it('accepts two numbers as parameters', () => {
    let result = arithmetic.divide(10, 5);
    expect(result).not.toBe(null);
  });

  it('does not accept strings', () => {
    let result = arithmetic.divide('10', '5');
    expect(result).toBe(null);
  });

  it('correctly multiplies two numbers', () => {
    let result = arithmetic.divide(10, 5);
    expect(result).toEqual(2);
  });

  it('returns null if dividing by 0', () => {
    let result = arithmetic.divide(10, 0);
    expect(result).toBe(null);
  });
});