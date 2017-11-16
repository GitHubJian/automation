function isNumber(value) {
  return typeof value === 'number';
}
function min(a, b) {
  if (isNumber(a) && isNumber(b)) return a < b ? a : b;
  throw new Error('Error');
}

function max(a, b) {
  if (isNumber(a) && isNumber(b)) return a > b ? a : b;
  throw new Error('Error');
}

export { max, min };
//module.exports = { min };
