import bytTag from './src/tag.vue';

/* istanbul ignore next */
bytTag.install = function(Vue) {
  Vue.component(bytTag.name, bytTag);
};

export default bytTag;
