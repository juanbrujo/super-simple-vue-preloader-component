import Vue from 'vue';
import VuePreloader from 'super-simple-vue-preloader-component';

describe('VuePreloader', () => {
  it('should be able to be mounted', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      components: {
        VuePreloader,
      },
    });
    expect(vm.$refs.preloader).toBeTruthy();
  });

  it('should be able to start and stop', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      components: {
        VuePreloader,
      },
    });
    vm.$refs.preloader.start();
    expect(vm.$refs.preloader.isVisible).toBeTruthy();
    vm.$refs.preloader.stop();
    expect(vm.$refs.preloader.isVisible).toBeFalsy();
  });
});
