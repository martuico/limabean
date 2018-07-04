import Cookies from 'js-cookie'
import _ from 'lodash'

const app = {
  state: {
    carts: typeof Cookies.get('carts') != 'undefined' ? JSON.parse(Cookies.get('carts')): []
  },
  mutations: {
    ADD_CART: (state, cart) => {
      // state.carts.push(cart)
      let items = []
      let update_cart = _.find(state.carts, (item) => {
                          return item.id == cart.id
                        })
      if(update_cart){
        update_cart.qty = update_cart.qty + 1
      }else{
        cart.qty = 1
        state.carts.push(cart)
      }
      Cookies.set('carts', state.carts)
    },
    DELETE_CART: (state, cartIndex) => {
      state.carts.splice(cartIndex, 1)
      Cookies.set('carts', state.carts)
    }
  },
  actions: {
    addToCart: ({ commit }, cart) => {
      commit('ADD_CART', cart)
    },
    deleteCart: ({ commit }, cartIndex) => {
      commit('DELETE_CART', cartIndex)
    }
  }
}

export default app
