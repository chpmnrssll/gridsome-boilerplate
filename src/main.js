/* eslint no-param-reassign: "error" */

import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
// import { ModalPlugin } from 'bootstrap-vue/es/components';

import DefaultLayout from './layouts/Default.vue';
import './assets/styles/main.scss';
import user from './store/modules/user';
import checkIfMobile from './mixins/checkIfMobile';

export default function(Vue, { appOptions }) {
  Vue.use(Vuex);
  appOptions.store = new Vuex.Store({
    strict: true,
    modules: {
      user,
    },
  });

  Vue.use(BootstrapVue);
  // Vue.use(ModalPlugin);
  Vue.component('Layout', DefaultLayout);
  Vue.mixin(checkIfMobile);
}
