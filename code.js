// Your Code Here.
// Basic Challenge:
function add (a, b) {
  return a + b;
};

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

////////////////////////////////////////////////////////////////////////////////
// Advance Challenge:
