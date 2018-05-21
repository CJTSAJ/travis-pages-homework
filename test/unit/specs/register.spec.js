import Vue from 'vue'
import Register from 'components/register/register'

describe('register.vue', () => {
  it('register', () => {
    const Constructor = Vue.extend(Register);
    const vm = new Constructor().$mount();
    vm.register();
    vm._watcher.run();
    expect(vm.phoneNumber)
    .to.equal('');
  expect(vm.email)
    .to.equal('');
  expect(vm.user)
    .to.equal('');
  expect(vm.password)
    .to.equal('');
  })
})
