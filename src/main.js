import BootstrapVue from 'bootstrap-vue';

import DefaultLayout from './layouts/Default.vue';
import './assets/styles/main.scss';
import checkIfMobile from './mixins/checkIfMobile';

export default function(Vue) {
  Vue.use(BootstrapVue);
  Vue.component('Layout', DefaultLayout);
  Vue.mixin(checkIfMobile);
}
