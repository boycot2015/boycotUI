/**
 * @author boycot
 * Date: 18/8/30
 */
import bytButton from './button/index.js';
import bytTag from './tag/index.js';
import bytIcon from './icon/index.js';
// import WAlert from './alert/index'
// import WLoadingBar from './loading-bar/index'
// import Skeleton from './skeleton/index'

const components = [
  bytButton,
  bytIcon,
  bytTag
]

const install = function(Vue) {
  if (install.installed) return;
  Vue.b = function(obj){
    return obj
  }
  components.map(component => Vue.component(component.name, component))
  // MetaInfo.install(Vue)
  // Vue.prototype.$loading = WLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  bytButton,
  bytIcon,
  bytTag
}