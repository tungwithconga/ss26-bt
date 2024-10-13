const state = {
    company: 'Rikkei Academy'
  }
  
  const getters = {
    getCompany(state) {
      return state.company;
    }
  }
  
  const mutations = {
    changeCompany(state) {
      state.company = state.company === 'Rikkei Academy' ? 'RikkeiSoft' : 'Rikkei Academy';
    }
  }
  
  const actions = {
    toggleCompany({ commit }) {
      commit('changeCompany');
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }
  