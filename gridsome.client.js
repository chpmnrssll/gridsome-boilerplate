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

  // Wrap the router-view with a transition tag.
  // You could do the same with keep-alive etc.
  context.appOptions.render = h =>
    h(
      'transition',
      { props: { name: 'page', appear: true } },
      // The router-view component as defined in 0.5.4
      [h('router-view', { attrs: { id: 'app' } })],
    );

  if (process.isClient) {
    window.netlifyIdentity = netlifyIdentity;
    console.log(window.netlifyIdentity);
    context.router.beforeEach((to, from, next) => {
      if (
        to.matched.some(record => record.meta.requiresAuth) &&
        !store.getters['user/isLoggedIn']
      ) {
        window.netlifyIdentity.open('login');
        next(from);
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
    };

    if (window.netlifyIdentity) {
      window.netlifyIdentity.init();
      window.netlifyIdentity.on('login', loginSuccessHandler);
      window.netlifyIdentity.on('signup', loginSuccessHandler);
      window.netlifyIdentity.on('logout', () => store.dispatch('user/updateUser', null));
    }
  }
}
