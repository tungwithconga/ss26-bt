const state = {
    isDarkMode: false
  }
  
  const getters = {
    isDarkMode(state) {
      return state.isDarkMode;
    }
  }
  
  const mutations = {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    setDarkMode(state, payload) {
      state.isDarkMode = payload;
    }
  }
  
  const actions = {
    toggleDarkMode({ commit }) {
      commit('toggleDarkMode');
    },
    setDarkMode({ commit }, payload) {
      commit('setDarkMode', payload);
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }
  