'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
console.log(greet('JOHN'));
console.log(math.add(1,3)); // 4
console.log(math.add([1,2,3])); // 6
console.log(math.subtract(1,3)); // -2
console.log(math.subtract([10,5,1,3])); // 1
console.log(math.multiply(3,5)); // 15
console.log(math.multiply([3,5,2,2])); // 60
console.log(math.divide(8,4)); // 2
console.log(math.divide(5,0)); // null