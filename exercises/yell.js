'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
const yell = (someString) => {
  return someString.toUpperCase();
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell('blablabla'), 'BLABLABLA')
assert.strictEqual(yell('AzErtY'), 'AZERTY')
assert.strictEqual(yell('hello World!'), 'HELLO WORLD!')
assert.strictEqual(yell('1234'), '1234')
assert.strictEqual(yell('a1z2e3'), 'A1Z2E3')
assert.strictEqual(yell('bonjour, je suis une chaîne de petites minuscules qui est devenue grande'), 'BONJOUR, JE SUIS UNE CHAÎNE DE PETITES MINUSCULES QUI EST DEVENUE GRANDE')
//assert.fail('You must write your own tests')
// End of tests */
