import Vue from 'vue'
import CategoryCompetition from 'components/categories/categoryCompetition/categoryCompetition'

describe('categoryCompetition.vue', () => {
  it('show', () => {
    const Constructor = Vue.extend(CategoryCompetition);
    const vm = new Constructor().$mount();
    vm.show();
    expect(vm.cshow)
      .to.equal(true);
    expect(vm.cshow1)
      .to.equal(false);
    expect(vm.isActive_1)
      .to.equal(true)
    expect(vm.isActive_2)
      .to.equal(false);
    expect(vm.isActive_3)
      .to.equal(false);
    expect(vm.isActive_4)
      .to.equal(false);
    expect(vm.cclick)
      .to.equal(1);
    expect(vm.cstar)
      .to.equal(1);
  })
  it('show2', () => {
    const Constructor = Vue.extend(CategoryCompetition);
    const vm = new Constructor().$mount();
    vm.show_2();
    expect(vm.cshow)
      .to.equal(false);
    expect(vm.cshow1)
      .to.equal(true);
    expect(vm.isActive_2)
      .to.equal(true)
    expect(vm.isActive_1)
      .to.equal(false);
    expect(vm.isActive_3)
      .to.equal(false);
    expect(vm.isActive_4)
      .to.equal(false);
    expect(vm.cclick)
      .to.equal(1);
    expect(vm.cstar)
      .to.equal(1);
  })
  it('show3', () => {
    const Constructor = Vue.extend(CategoryCompetition);
    const vm = new Constructor().$mount();
    vm.show_3();
    expect(vm.cshow)
      .to.equal(false);
    expect(vm.cshow1)
      .to.equal(true);
    expect(vm.isActive_3)
      .to.equal(true)
    expect(vm.isActive_1)
      .to.equal(false);
    expect(vm.isActive_2)
      .to.equal(false);
    expect(vm.isActive_4)
      .to.equal(false);
    expect(vm.cclick)
      .to.equal(1);
    expect(vm.cstar)
      .to.equal(1);
  })
  it('show4', () => {
    const Constructor = Vue.extend(CategoryCompetition);
    const vm = new Constructor().$mount();
    vm.show_4();
    expect(vm.cshow)
      .to.equal(false);
    expect(vm.cshow1)
      .to.equal(true);
    expect(vm.isActive_4)
      .to.equal(true)
    expect(vm.isActive_1)
      .to.equal(false);
    expect(vm.isActive_3)
      .to.equal(false);
    expect(vm.isActive_2)
      .to.equal(false);
    expect(vm.cclick)
      .to.equal(1);
    expect(vm.cstar)
      .to.equal(1);
  })
  it('show5', () => {
    const Constructor = Vue.extend(CategoryCompetition);
    const vm = new Constructor().$mount();
    vm.show_5();
    expect(vm.cshow)
      .to.equal(true);
    expect(vm.cshow1)
      .to.equal(false);
    expect(vm.isActive_5)
      .to.equal(true)
    expect(vm.isActive_6)
      .to.equal(false);
    expect(vm.isActive_7)
      .to.equal(false);
    expect(vm.isActive_8)
      .to.equal(false);
    expect(vm.cclick)
      .to.equal(1);
    expect(vm.cstar)
      .to.equal(1);
  })
  it('show6', () => {
    const Constructor = Vue.extend(CategoryCompetition);
    const vm = new Constructor().$mount();
    vm.show_6();
    expect(vm.cshow)
      .to.equal(true);
    expect(vm.cshow1)
      .to.equal(false);
    expect(vm.isActive_6)
      .to.equal(true)
    expect(vm.isActive_5)
      .to.equal(false);
    expect(vm.isActive_7)
      .to.equal(false);
    expect(vm.isActive_8)
      .to.equal(false);
    expect(vm.cclick)
      .to.equal(1);
    expect(vm.cstar)
      .to.equal(1);
  })
  it('show7', () => {
    const Constructor = Vue.extend(CategoryCompetition);
    const vm = new Constructor().$mount();
    vm.show_7();
    expect(vm.cshow)
      .to.equal(true);
    expect(vm.cshow1)
      .to.equal(false);
    expect(vm.isActive_7)
      .to.equal(true)
    expect(vm.isActive_5)
      .to.equal(false);
    expect(vm.isActive_6)
      .to.equal(false);
    expect(vm.isActive_8)
      .to.equal(false);
    expect(vm.cclick)
      .to.equal(1);
    expect(vm.cstar)
      .to.equal(1);
  })
  it('show8', () => {
    const Constructor = Vue.extend(CategoryCompetition);
    const vm = new Constructor().$mount();
    vm.show_8();
    expect(vm.cshow)
      .to.equal(true);
    expect(vm.cshow1)
      .to.equal(false);
    expect(vm.isActive_8)
      .to.equal(true)
    expect(vm.isActive_5)
      .to.equal(false);
    expect(vm.isActive_6)
      .to.equal(false);
    expect(vm.isActive_7)
      .to.equal(false);
    expect(vm.cclick)
      .to.equal(1);
    expect(vm.cstar)
      .to.equal(1);
  })
})
