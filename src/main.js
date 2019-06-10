import BootstrapVue from 'bootstrap-vue';
import DefaultLayout from './layouts/Default.vue';
import AgencyLayout from './layouts/Agency.vue';
import checkIfMobile from './util/checkIfMobile';

export default function(Vue) {
  Vue.use(BootstrapVue);
  Vue.component('Layout', DefaultLayout);
  Vue.component('AgencyLayout', AgencyLayout);
  Vue.mixin(checkIfMobile);
}
