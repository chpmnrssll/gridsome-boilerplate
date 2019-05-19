/* eslint no-param-reassign: "error" */

export default {
  namespaced: true,
  state: {
    user: process.isClient ? JSON.parse(window.localStorage.getItem('user')) : null,
  },

  getters: {
    isLoggedIn: state => !!state.user,
    getUser: state => state.user,
  },

  actions: {
    updateUser: ({ commit }, userData) => {
      commit('setUser', userData);
    },
  },

  // Mutations Must Be Synchronous
  mutations: {
    setUser: (state, userData) => {
      if (!userData) {
        state.user = null;
        if (process.isClient) {
          window.localStorage.removeItem('user');
        }
      } else {
        state.user = userData;
        if (process.isClient) {
          window.localStorage.setItem('user', JSON.stringify(state.user));
        }
      }
    },
  },
};
