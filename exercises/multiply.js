'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :
/*
const multiply = (a, b) => {
  let result = 0;
  if (b >= 0 && a >= 0) 
  { 
    for (let i = 0; i < b; i++)
    {
      result += a;
    }
  } else if (b >= 0 && a < 0)
  {
    for (let i = 0; i < b; i++)
    {
      result += a;
    }
  } else if (b < 0 && a < 0)
  {
    for (let i = 0; i > b; i--)
    {
      result -= a;
    }
  } else if (b < 0 && a >= 0)
  {
    for (let i = 0; i > b; i--)
    {
      result -= a;
    }
  }

  return result;
}
*/
const multiply = (a, b) => {
  let result = 0;
  const abs = (n) => { return (n >= 0 ? n : - n); }
  const absA = abs(a);
  const absB = abs(b);

  for (let i = 0; i < absB; i++) {
    result += absA;
  }
  if ((b >= 0 && a >= 0) || (b < 0 && a < 0)) {
    return result;
  } else {
    return 0 - result;
  }
} 
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
