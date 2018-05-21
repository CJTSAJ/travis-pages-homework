import Vue from 'vue'
import GroupPage from 'components/group/groupPage'

describe('groupPage.vue', () => {
  it('follow', () => {
    const Constructor = Vue.extend(GroupPage);
    const vm = new Constructor().$mount();
    vm.Follow();
    vm._watcher.run();
    expect(vm.follow)
    .to.equal(true);
  expect(vm.notFollow)
    .to.equal(false);
  expect(vm.followMsg)
    .to.equal('取消关注');
  vm.Follow();
  vm._watcher.run();
  expect(vm.follow)
    .to.equal(false);
  expect(vm.notFollow)
    .to.equal(true);
  expect(vm.followMsg)
    .to.equal('关注');

  })
  it('joinTeam', () => {
    const Constructor = Vue.extend(GroupPage);
    const vm = new Constructor().$mount();
    vm.joinTeam();
    vm._watcher.run();
    expect(vm.join)
      .to.equal(true);
expect(vm.notJoin)
  .to.equal(false);
expect(vm.joinMsg)
  .to.equal('取消申请');
vm.joinTeam();
vm._watcher.run();
expect(vm.join)
  .to.equal(false);
expect(vm.notJoin)
  .to.equal(true);
expect(vm.joinMsg)
  .to.equal('申请加入');
  })
  it('leaveMsg', () => {
    const Constructor = Vue.extend(GroupPage);
    const vm = new Constructor().$mount();
    vm.leaveMsg();
    vm._watcher.run();
    expect(vm.Comments.length)
    .to.equal(2);
    vm.msg = 'test';
    vm.leaveMsg();
    vm._watcher.run();
    expect(vm.Comments.length)
    .to.equal(3);
  })
})
