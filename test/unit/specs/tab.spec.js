import Vue from 'vue'
import Tab from 'components/tab/tab'

describe('tab.vue', () => {
  it('log', () => {
  const Constructor = Vue.extend(Tab);
  const vm = new Constructor().$mount();
  vm.signOut();
  vm._watcher.run();
  expect(vm.log)
    .to.equal(true);
})
})
