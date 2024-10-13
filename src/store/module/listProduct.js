const state = {
    products: [
      {
        id: 1,
        productName: 'Cam sành',
        price: '20.000 đ',
        quantity: 10,
      },
      {
        id: 2,
        productName: 'Bưởi ba roi',
        price: '50.000 đ',
        quantity: 15,
      }
    ]
  }
  
  const getters = {
    getProducts(state) {
      return state.products;
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
  