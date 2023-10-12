import { createStore } from 'vuex'

const store = createStore({
  state: {
    availableFields: 0
  },
  mutations: {
    increment(state) {
      if (state.availableFields < 0) {
        state.availableFields = 0
      } else {
        state.availableFields++
      }
    },
    decrement(state) {
      if (state.availableFields > 0) {
        state.availableFields--
      }
    }
  }
})

export default store
