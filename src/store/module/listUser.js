const state = {
    users: [
      {
        id: 1,
        userName: 'Nguyễn Văn A',
        gender: 'Nam',
        dateOfBirth: '20/11/2023',
        address: 'Thanh Xuân, Hà Nội',
      },
      {
        id: 2,
        userName: 'Nguyễn Thị B',
        gender: 'Nữ',
        dateOfBirth: '20/11/2023',
        address: 'Cầu Giấy, Hà Nội',
      }
    ]
  }
  
  const getters = {
    getUsers(state) {
      return state.users;
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
  