// Your Code Here.
// Basic Challenge:
function add (a, b) {
  return a + b;
};
console.assert(
  add(2, 3) === 5,
  'Does not equal 3'
);
console.assert(
  add(-2, 3) === 1,
  'Function doesnt work with negative'
  );

function multiply (a, b) {
  let total = 0;
  if (a < 0 || typeof a !== 'number' ) {
    return null;
  }
  for (let i = 0; i < b; i = add(i, 1)) {
    total = add(total, a);
  }
  return total;
}
console.assert(
  multiply(3,2) === 6,
  "Doesn't equal 6"
);
console.assert(
  multiply(-3,2) !== -6,
  'Function doesnt work with negative'
);
////////////////////////////////////////////////////////////////
// Intermediate Challenge:

function power (a, b) {
  let total = 1;
  if (a < 0 || typeof (a, b) !== 'number' || Number.isInteger(a, b) === false) {
    return null;
  }
  for (let i = 0; i < b; i = add(i, 1)) {
    total = multiply(total, a);
  }
  return total;
}
console.assert(
  power(3,2) === 9,
  'Does not equal 9'
)
console.assert(
  power(-3,2) !== 9,
  'Function doesnt work with negative'
)

function factorial (a) {
  let total = 1;
  if (a < 0 || typeof (a) !== 'number' || Number.isInteger(a) === false) {
    return null;
  } if (a === 0 || a === 1) {
    return 1;
  }
  for (let i = 1; i <= a; i = add(i, 1)) {
    total = multiply(total, i)
  }
  return total;
}
console.assert(
  factorial(5) === 120,
  'Does not equal to 120'
)
console.assert(
  factorial(-5) !== -120,
  'Function doesnt work with negative'
)

////////////////////////////////////////////////////////////////////////////////
// Advance Challenge:
// Nathan Holt assisted with Advance Challenge:

function fibonacci(a) {
  if (a === 0) return 0;
  if (a < 0 || a % 1 !== 0 || a === NaN) {
    return null;
  }
  let num = 0
  let prevNum = 0
  for (let i = 0; i < a; i = add(i, 1)) {
    if (i === 2) {
      num = 1
    }
    let nextNum = num
    num = add(num, prevNum)
    prevNum = nextNum
  }
  return num;
}
console.assert(
  fibonacci(5) !== 0,
  "Function is not divisible by 1"
)
console.assert(
  fibonacci(3) > 0,
  "Function is not greater than 0"
)