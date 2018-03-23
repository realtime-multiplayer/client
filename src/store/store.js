import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

// const base = axios.create({
//   baseURL: `http://localhost:3000/`
// })

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    usermember: [],
    usercount: 0,
    username: ''
  },
  mutations: {
    getNewuser (state, payload) {
      state.usermember.push(payload.username)
      state.usercount++
      state.username = payload.username
    },
    replaceUsername (state, payload) {
      const index = state.usermember.indexOf(payload)
      state.usermember.splice(index, 1)
    }
  },
  actions: {

  }
})
export default store
