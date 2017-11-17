import Vue from 'vue';
import Element from 'element-ui';

Vue.use(Element);

let id = 0;

const createElm = function() {
  const elm = document.createElement('div');

  elm.id = 'app' + id;
  document.body.appendChild(elm);

  return elm;
};

exports.createVue = function(Compo, mounted = false) {
  if (Object.prototype.toString.call(Compo) === '[object String]') {
    Compo = { template: Compo };
  }
  return new Vue(Compo).$mount(mounted === false ? null : createElm());
};

exports.createTest = function(Compo, propsData = {}, mounted = false) {
  if (propsData === true || propsData === false) {
    mounted = propsData;
    propsData = {};
  }
  const elm = createElm();
  const Ctor = Vue.extend(Compo);
  return new Ctor({ propsData }).$mount(mounted === false ? null : elm);
};
