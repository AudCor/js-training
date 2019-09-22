'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
const whisper = (someString) => {

  return "*" + someString.toLowerCase() + "*";
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(whisper("HELLO WORLD!"), "*hello world!*")
assert.strictEqual(whisper("Maître Corbeau Sur UN arbre PeRcHé"), "*maître corbeau sur un arbre perché*")
//assert.fail('You must write your own tests')
// End of tests */
