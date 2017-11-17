require('es6-promise/auto');

// require all test files
const testsContext = require.context('./specs', true);
testsContext.keys().forEach(testsContext);

// require all vue files
const srcContext = require.context('./../vue2', true);
srcContext.keys().forEach(srcContext);
