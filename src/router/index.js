import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
import Home from '@/components/Home'
import Play from '@/components/Play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/game',
      name: 'Board',
      component: Board
    },
    {
      path: '/play',
      name: 'play',
      component: Play
    }
  ]
})
