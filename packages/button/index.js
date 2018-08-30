/**
 * @author boycot
 * Date: 18/8/30
 */
import Button from './src/button.vue';

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;