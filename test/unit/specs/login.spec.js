import Vue from 'vue'
import Login from 'components/login/login'

describe('login.vue', () => {
  it('login', () => {
  const Constructor = Vue.extend(Login);
  const vm = new Constructor().$mount();
  vm.login();
  vm._watcher.run();
  expect(vm.id)
    .to.equal('');
  expect(vm.password)
    .to.equal('');
})
})
