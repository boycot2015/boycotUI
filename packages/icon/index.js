import bytIcon from './src/icon.vue';

/* istanbul ignore next */
bytIcon.install = function(Vue) {
  Vue.component(bytIcon.name, bytIcon);
};

export default bytIcon;
