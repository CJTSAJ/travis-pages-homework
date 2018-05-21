import Vue from 'vue'
import Information from 'components/homepage/information'

describe('information.vue', () => {
  it('changeName', () => {
    const Constructor = Vue.extend(Information);
    const vm = new Constructor().$mount();
    vm.changeName();
    vm._watcher.run();
    expect(vm.nameModify)
    .to.equal(true);
  })
  it('chanNameEd', () => {
    const Constructor = Vue.extend(Information);
    const vm = new Constructor().$mount();
    vm.chanNameEd();
    vm._watcher.run();
    expect(vm.nameModify)
  .to.equal(false);
  })
it('changeSex', () => {
  const Constructor = Vue.extend(Information);
const vm = new Constructor().$mount();
vm.changeSex();
vm._watcher.run();
expect(vm.sexModify)
  .to.equal(true);
})
it('chanNameEd', () => {
  const Constructor = Vue.extend(Information);
const vm = new Constructor().$mount();
vm.chanSexEd();
vm._watcher.run();
expect(vm.sexModify)
  .to.equal(false);
})
it('changeName', () => {
  const Constructor = Vue.extend(Information);
const vm = new Constructor().$mount();
vm.changeAcademy();
vm._watcher.run();
expect(vm.academyModify)
  .to.equal(true);
})
it('chanNameEd', () => {
  const Constructor = Vue.extend(Information);
const vm = new Constructor().$mount();
vm.chanAcademyEd();
vm._watcher.run();
expect(vm.academyModify)
  .to.equal(false);
})
})
