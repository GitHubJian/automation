import { createTest, createVue } from '../util';
import ElInput from 'vue2/index2/index.js';

describe('I2', () => {
  let vm;
  it('Create2', () => {
    vm = createTest(
      ElInput,
      {
        value: 1
      },
      true
    );
    let inputElm = vm.$el.querySelector('input');
    inputElm.focus();
    (+inputElm.value).should.equal(2);
  });
});