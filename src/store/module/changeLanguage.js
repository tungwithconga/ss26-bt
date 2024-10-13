const state = {
    language: 'vi'
  }
  
  const getters = {
    getLanguage(state) {
      return state.language;
    }
  }
  
  const mutations = {
    setLanguage(state, payload) {
      state.language = payload;
    }
  }
  
  const actions = {
    changeLanguage({ commit }, language) {
      commit('setLanguage', language);
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }
  