// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import fs from 'fs'
import App from './App'
import router from './router/index'
import bytUI from '../packages/index'
import demoBlock from './components/demo-block.vue'
import '../packages/theme-default/lib/index.css'
import './assets/scss/index.scss'
Vue.config.productionTip = false
Vue.use(bytUI);
Vue.component('demo-block', demoBlock)
Vue.prototype.$fs = fs;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
