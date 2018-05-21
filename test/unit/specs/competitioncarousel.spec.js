import Vue from 'vue'
import CarouselCompetition from 'components/carouselCompetition/carouselCompetition'

describe('轮播框函数测试', () => {
  it('spanHover的四个参数测试', () => {
    const Constructor = Vue.extend(CarouselCompetition);
    const vm = new Constructor().$mount();
    vm.spanHover(1);
    expect(vm.isColor[0]).to.equal(true);
    expect(vm.isColor[1]).to.equal(false);
    expect(vm.isColor[2]).to.equal(false);
    expect(vm.isColor[3]).to.equal(false);
    vm.spanHover(2);
    expect(vm.isColor[0]).to.equal(false);
    expect(vm.isColor[1]).to.equal(true);
    expect(vm.isColor[2]).to.equal(false);
    expect(vm.isColor[3]).to.equal(false);
    vm.spanHover(3);
    expect(vm.isColor[0]).to.equal(false);
    expect(vm.isColor[1]).to.equal(false);
    expect(vm.isColor[2]).to.equal(true);
    expect(vm.isColor[3]).to.equal(false);
    vm.spanHover(4);
    expect(vm.isColor[0]).to.equal(false);
    expect(vm.isColor[1]).to.equal(false);
    expect(vm.isColor[2]).to.equal(false);
    expect(vm.isColor[3]).to.equal(true);
  })
  it('暂停播放函数测试', () => {
    const Constructor = Vue.extend(CarouselCompetition);
    const vm = new Constructor().$mount();
    vm.stop();
    expect(vm.timer).not.to.be.NaN;
  })
  it('位移函数测试', () => {
    const Constructor = Vue.extend(CarouselCompetition);
    const vm = new Constructor().$mount();
    vm.move();
    expect(vm.isMove).to.equal(false);
  })
  it('位移计算函数测试', () => {
    const Constructor = Vue.extend(CarouselCompetition);
    const vm = new Constructor().$mount();
    vm.calculate();
    expect(vm.isMove).to.equal(false);
  })
  it('prev函数测试', () => {
    const Constructor = Vue.extend(CarouselCompetition);
    const vm = new Constructor().$mount();
    vm.prev();
    expect(vm.isMove).to.equal(true);
  })
  it('next函数测试', () => {
    const Constructor = Vue.extend(CarouselCompetition);
    const vm = new Constructor().$mount();
    vm.next();
    expect(vm.isMove).to.equal(true);
  })
})
