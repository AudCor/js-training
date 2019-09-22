'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
const keepFirst = (aString) => {
  return aString.slice(0, 2);
}
const keepLast = (aString) => {
  return aString.slice(-2);
}
const keepFirstLast = (aString) => {
  return aString.slice(2, 4);
}


//* Begin of tests
const assert = require('assert')
assert.strictEqual(keepFirst('azerty'), 'az')
assert.strictEqual(keepFirst('Bonjour le monde'), 'Bo')
assert.strictEqual(keepFirst('1 radis, 2 poireaux!'), '1 ')
assert.strictEqual(keepLast('azerty'), 'ty')
assert.strictEqual(keepLast('Bonjour le monde'), 'de')
assert.strictEqual(keepLast('1 radis, 2 poireaux!'), 'x!')
assert.strictEqual(keepFirstLast('azerty'), 'er')
assert.strictEqual(keepFirstLast('Bonjour le monde'), 'nj')
assert.strictEqual(keepFirstLast('1 radis, 2 poireaux!'), 'ra')
//assert.fail('You must write your own tests')
// End of tests */
