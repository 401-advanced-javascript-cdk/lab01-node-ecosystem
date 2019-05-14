'use strict';

const greet = require('../lib/greet.js');

describe('greet module function', () => {

  it('returns null if passed a non-string', () => {
    const resultInt = greet(42);
    const resultObj = greet({number: 100});
    const resultArr = greet(['Harry', 'Larry', 'Moe']);
    const resultBool = greet(false);
    expect(resultInt).toBe(null);
    expect(resultObj).toBe(null);
    expect(resultArr).toBe(null);
    expect(resultBool).toBe(null);
  });
  
  it('returns \'hello world\' when invoked with \'world\'', () => {
    let result = greet('world');
    expect(result).toStrictEqual('hello world');
  });

});