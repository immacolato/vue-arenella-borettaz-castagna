import { createStore } from 'vuex'
const store = createStore({
  state: {
    count: 3
  },
  mutations: {
    increment(state) {
      console.log(state)
      state.count++
    },
    decrement(state) {
      state.count--
    }
  }
})
export default store
