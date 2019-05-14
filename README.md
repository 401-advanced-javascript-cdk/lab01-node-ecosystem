![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 01 - Node Ecosystem

### Author: Chris Kozlowski

### Links and Resources
* [Submission PR](http://xyz.com)
* [Travis](http://xyz.com)

### Modules

#### `greet.js`
##### Exported Values and Methods
###### `greet(name) -> string`
Accepts a string parameter and returns a concatenated greeting string.

#### `greet.js`
##### Exported Values and Methods
###### `add(integer, integer || array) -> integer`
Accepts either two integers or an array of integers.  Returns the sum of the values.
###### `subtract(integer, integer || array) -> integer`
Accepts either two integers or an array of integers.  Returns the subtraction of the values.
###### `add(integer, integer || array) -> integer`
Accepts either two integers or an array of integers.  Returns the multiplication of the values.
###### `add(integer, integer) -> integer`
Accepts two integers.  Returns the division of the values.

#### Running the app
* `node index.js`
  * displays console logs from the exported arithmetic and greeting modules.

#### Tests
* `npm test`
* Assertions for greet.js
  * Accepts strings
  * Rejects other data types
  * Returns correctly concatenated string
* Assertions for arithmetic.js
  * Accepts numbers
  * Rejects non-numbers
  * Accepts array of numbers (expcept .divide)
  * Rejects dividing by 0