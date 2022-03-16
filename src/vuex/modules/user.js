export default {
  namespaced: true,
  state() {
    return {
      username: 'lanshan',
    }
  },
  mutations: {
    setUsername: function(state, payload) {
      state.username = payload.username
    }
  },
  actions: {
    changeName({ commit }, payload) {
      commit('setUsername', payload)
    }
  },
  getters: {
    username(state) {
      return state.username;
    }
  },
}