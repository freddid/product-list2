export default {
  ADD_PRODUCT (state, payload) {
    state.products.push(payload)
  },
  DELETE_PRODUCT (state, payload) {
    state.products.splice(state.products.findIndex(el => el.id === payload), 1)
  },
  ADD_PRODUCTS (state, payload) {
    state.products = payload
  }
}
