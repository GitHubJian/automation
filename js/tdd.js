// @flow
function isNumber(value): boolean {
  return typeof value === 'number';
}
function min(a: number, b: number): number {
  if (isNumber(a) && isNumber(b)) return a < b ? a : b;
  throw new Error('Error');
}

function max(a: number, b: number) {
  if (isNumber(a) && isNumber(b)) return a > b ? a : b;
  throw new Error('Error');
}

export { max, min };
