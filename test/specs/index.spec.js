import { createTest, createVue } from '../util';
import ElInput from 'vue2/index/index.js';

describe('I', () => {
  let vm;
  it('Create', () => {
    vm = createTest(
      ElInput,
      {
        value: 1
      },
      true
    );
    let inputElm = vm.$el.querySelector('input');
    inputElm.focus();
    (+inputElm.value).should.equal(1);
  });
});
