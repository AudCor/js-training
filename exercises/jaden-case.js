'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
const jadenCase = (str) => {

  const arrWord = str.toLowerCase().split(' ');
  const newWords = arrWord.map(word => word.slice(0, 1).toUpperCase());
  return newWords.join(' ');
}


//* Begin of tests
const assert = require('assert')
assert.strictEqual("blabla", "Blabla")
assert.strictEqual("Le petit chat est mort.", "Le Petit Chat Est Mort.")
assert.strictEqual("maître corbeau sur un arbre perché", "Maître Corbeau Sur Un Arbre Perché")
assert.strictEqual("a b c d alphabet", "A B C D Alphabet")
assert.strictEqual("peut-être", "Peut-être")

//assert.fail('You must write your own tests')
// End of tests */
