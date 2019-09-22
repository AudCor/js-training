'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
function cutFirst(someString) {
  return someString.slice(2);
}

function cutLast(someString) {
  return someString.slice(0, -2);
}

function cutFirstLast(someString) {
  return cutLast(cutFirst(someString));
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(cutFirst('azerty'), 'erty')
assert.strictEqual(cutLast('azerty'), 'azer')
assert.strictEqual(cutFirstLast('azerty'), 'er')
// assert.fail('You must write your own tests')
// End of tests */
