import { createStore } from 'vuex'
import user from './modules/user'

// type stateType = {
//   websiteName: string;
// }

/** TODO: 支持TS */
// export const store = createStore<stateType>({
export const store = createStore({
  // namespaced: true,
  state() {
    return {
      websiteName: 'lanshan的博客',
    }
  },
  mutations: {
    setWebSiteName: function(state, payload) {
      state.websiteName = payload.websiteName
    }
  },
  actions: {
    changeName({ commit }, payload) {
      commit('setWebSiteName', payload)
    }
  },
  getters: {
    websiteName(state) {
      return state.websiteName;
    }
  },
  modules: {
    user
  }
})