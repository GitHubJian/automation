import { min, max } from 'js/tdd.js';

describe('Tdd Test', function() {
  it('Min Function', function() {
    let mVal = min(1, 2);
    should.equal(mVal, 1, '成功');
  });


  it('Max Function', function() {
    let mVal = max(1, 2);
    should.equal(mVal, 1, '失败');
  });
});
