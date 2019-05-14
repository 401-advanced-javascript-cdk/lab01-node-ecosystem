'use strict';

module.exports = exports = function(name) {

  if (typeof name !== 'string') { return null; }
  return `hello ${name}`;
};