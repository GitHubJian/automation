'use strict';
require('should');
const test = require('../js/test');

describe('My First Test', () => {
    it('should get "Hello Tmall"', () => {
        test().should.be.eql('Hello Tmall');
    });
});