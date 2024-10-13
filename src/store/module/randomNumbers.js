const state = {
    randomNumbers: []
  }
  
  const getters = {
    getRandomNumbers(state) {
      return state.randomNumbers;
    }
  }
  
  const mutations = {
    addRandomNumber(state, number) {
      state.randomNumbers.push(number);
    }
  }
  
  const actions = {
    generateRandomNumber({ commit }) {
      const randomNumber = Math.floor(Math.random() * 100);
      commit('addRandomNumber', randomNumber);
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }
  