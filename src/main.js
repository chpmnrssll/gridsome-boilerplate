import BootstrapVue from 'bootstrap-vue';
import DefaultLayout from './layouts/Default.vue';
import AgencyLayout from './layouts/Agency.vue';
import checkIfMobile from './util/checkIfMobile';

export default function(Vue, { head }) {
  // Add an external Javascript before the closing </body> tag
  head.script.push({
    src: '/assets/calendly/widget.js',
    body: true,
  });

  Vue.use(BootstrapVue);
  Vue.component('Layout', DefaultLayout);
  Vue.component('AgencyLayout', AgencyLayout);
  Vue.mixin(checkIfMobile);
}
