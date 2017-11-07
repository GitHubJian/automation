require('should');

const test = require('../src/test');
describe('My First Test', () => {
    it('should get "Hello Tmall"', () => {
        test().should.be.eql('Hello Tmall');
    });
});