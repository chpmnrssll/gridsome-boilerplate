/* eslint no-param-reassign: "error" */

import Vuex from 'vuex';
import netlifyIdentity from 'netlify-identity-widget';
import user from './src/store/modules/user';
// import store from './src/store';

export default function(Vue, options, context) {
  // FIXME: hack to add route meta data
  ['protected'].forEach(routeName => {
    const protectedRoute = context.router.options.routes.find(route => route.name === routeName);
    protectedRoute.meta.requiresAuth = true;
  });

  Vue.use(Vuex);
  const store = new Vuex.Store({
    strict: true,
    modules: {
      user,
    },
  });

  context.appOptions.store = store;
  context.appOptions.netlifyIdentity = netlifyIdentity;

  if (process.isClient) {
    context.router.beforeEach((to, from, next) => {
      if (
        !store.getters['user/isLoggedIn'] &&
        to.matched.some(record => record.meta.requiresAuth)
      ) {
        netlifyIdentity.open('login');
        next('/');
      } else {
        next();
      }
    });

    const loginSuccessHandler = userData => {
      store.dispatch('user/updateUser', {
        username: userData.user_metadata.full_name,
        email: userData.email,
        access_token: userData.token.access_token,
        expires_at: userData.token.expires_at,
        refresh_token: userData.token.refresh_token,
        token_type: userData.token.token_type,
      });
      // context.router.push({ path: '/admin' });
    };

    netlifyIdentity.init();
    netlifyIdentity.on('login', loginSuccessHandler);
    netlifyIdentity.on('signup', loginSuccessHandler);
    netlifyIdentity.on('logout', () => store.dispatch('user/updateUser', null));
  }
}
