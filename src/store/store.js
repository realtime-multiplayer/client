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
    username: '',
    turn: 0,
    whoseTurn: '',
    cards: []
  },
  mutations: {
    getcard (state, payload) {
      let cardsall = []
      Object.keys(payload).forEach((key, index) => {
        cardsall.push(payload[key])
      })
      state.cards = cardsall
    },
    getuser (state, payload) {
      let userall = []
      let firebase = Object.keys(payload)
      Object.keys(payload).forEach((key, index) => {
        let user = payload[key]
        user['keyfire'] = firebase[index]
        userall.push(user)
      })
      state.usermember = userall
    },
    nextTurn (state, payload) {
      if (state.turn === 3) {
        state.turn = 0
      } else {
        console.log('updating turn')
        state.turn += 1
        // console.log(state.turn)
      }
    }
  },
  actions: {
    dispatchTurn ({commit, state}) {
      commit('nextTurn')
    }
  }
})
export default store
