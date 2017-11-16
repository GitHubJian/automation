const path = require('path');

const resolve = p => path.resolve(__dirname, '../', p);

module.exports = {
  src: resolve('src'),
  js: resolve('js'),
  entries: resolve('src/entries'),
  test: resolve('src/test')
};
