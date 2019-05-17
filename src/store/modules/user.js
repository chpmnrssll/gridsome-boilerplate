/* eslint no-param-reassign: "error" */

const isClient = typeof window !== 'undefined';

export default {
  namespaced: true,
  state: {
    user: isClient ? window.localStorage.getItem('user') : null,
  },

  getters: {
    getUserStatus: state => !!state.user,
    getUser: state => JSON.parse(state.user),
  },

  actions: {
    updateUser: ({ commit }, payload) => {
      commit('setUser', payload.currentUser);
    },
  },

  // Mutations Must Be Synchronous
  mutations: {
    setUser: (state, currentUser) => {
      if (!currentUser) {
        state.user = null;
        if (isClient) {
          window.localStorage.removeItem('user');
        }
        return;
      }
      const theUser = JSON.stringify(currentUser);
      state.user = theUser;
      if (isClient) {
        window.localStorage.setItem('user', theUser);
      }
    },
  },
};
