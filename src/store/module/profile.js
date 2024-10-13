const state = {
    profile: {
      id: 1,
      userName: 'Nguyễn Văn Nam',
      gender: 'Nam',
      dateOfBirth: '20/03/2023',
      address: 'Thanh Xuân, Hà Nội'
    }
  }
  
  const getters = {
    getProfile(state) {
      return state.profile;
    }
  }
  
  const mutations = {}
  
  const actions = {}
  
  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }
  