/* eslint no-param-reassign: "error" */

export default {
  namespaced: true,
  state: {
    user: window.localStorage.getItem('user'),
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
        window.localStorage.removeItem('user');
        return;
      }
      const theUser = JSON.stringify(currentUser);
      state.user = theUser;
      window.localStorage.setItem('user', theUser);
    },
  },
};
