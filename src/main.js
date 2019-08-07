import BootstrapVue from 'bootstrap-vue';
import DefaultLayout from './layouts/Default.vue';
import checkIfMobile from './util/checkIfMobile';

export default function(Vue, { head }) {
  // Add calendly widget Javascript before the closing </body> tag
  head.script.push({
    src: '/assets/calendly/widget.js',
    body: true,
    async: true,
  });

  // Preload local fonts
  const preloadFonts = [
    'nunito-v10-latin-regular.woff2',
    'nunito-v10-latin-600.woff2',
    'nunito-v10-latin-700.woff2',
  ];
  preloadFonts.forEach(font => {
    head.link.push({
      rel: 'preload',
      href: `/assets/fonts/${font}`,
      as: 'font',
      type: 'font/woff2',
      crossorigin: true,
    });
  });

  Vue.use(BootstrapVue);
  Vue.component('Layout', DefaultLayout);
  Vue.mixin(checkIfMobile);
}
