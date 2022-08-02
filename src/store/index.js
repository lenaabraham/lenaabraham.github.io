import { createStore } from 'vuex'

export default createStore({
  state: {
    toast: null,
  },
  getters: {
  },
  mutations: {
    setToast(state, value) {
      state.toast = value;
    },
  },
  actions: {
    toast({ commit }, value) {
      commit('setToast', value);
      setTimeout(() => {
        commit('setToast', null);
      }, 3000);
    },
  },
  modules: {
  }
})
