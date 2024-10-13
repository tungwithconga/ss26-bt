const state = {
    counter: 0
  }
  
  const getters = {
    getCounter(state) {
      return state.counter;
    }
  }
  
  const mutations = {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      if (state.counter > 0) {
        state.counter--;
      }
    }
  }
  
  const actions = {
    increment({ commit }) {
      commit('increment');
    },
    decrement({ commit }) {
      commit('decrement');
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }
  