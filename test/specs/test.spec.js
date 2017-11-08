import Util from 'test/test.js';

describe('index.js: ', function () {
    it('isNum() should work fine.', function () {
        expect(Util.isNum(1)).toBe(false)
        expect(Util.isNum('1')).toBe(false)
    })
})