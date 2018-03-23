<template>
  <div class="background">

    <div class="col-lg-1"></div>
    <div class="col-lg-10">
      <button v-on:click="play" class="btn btn-primary">Ready</button>
      <div class="row justify-content-center" id="control">
      <div class="col-lg">
        <button class="btn" v-on:click="hitCard" type="button" name="button" id="hit">Hit</button>
        <button class="btn" v-on:click="stand" type="button" name="button" id="stand">Stand</button>
        <button class="btn" type="button" name="button" id="newgame">Start New game</button>
      </div>
    </div>
      <div class="content-nest">
        <div v-for="(user, i) in users" :key="i" class="user col-lg-6">
          <div class="username">
            <h4 class="username-font">{{user.name}}</h4>
          </div>
          <div class="cards-all">
            <div v-for="(card, i) in mycard" :key=i class="card">
              <img v-if="card !== ''" class="card-img-top img-fluid" :src="card.image" alt="Card image cap">
              <div v-else></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-1"></div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import routes from '@/router'
export default {
  data: function () {
    return {
      mycard: [],
      users: [],
      standStatus: false
    }
  },
  sockets: {
    drawCard (payload) {
      // received after 'hit'
      console.log(this.turn)
      // this.cardInHand.push(payload)
    },
    standingBy (payload) {
      console.log(payload)
      console.log('standing by')
    },
    opponentDraw (payload) {
      console.log(payload.username + ' has drawn a card')
      this.$store.dispatch('dispatchTurn')
    },
    opponentStand (payload) {
      console.log(payload.username + ' is standing by')
      this.$store.dispatch('dispatchTurn')
    }
  },
  methods: {
    exitgame () {
      this.$store.commit('replaceUsername', this.username)
      routes.push({
        path: '/'
      })
    },
    play () {
      const card = []
      for (let i = 0; i < 4; i++) {
        if (i < 2) {
          let index = Math.ceil(Math.random() * this.cards.length)
          card.push(this.cards[index])
        } else {
          card.push('')
        }
      }
      this.mycard = card
    },
    hitCard () {
      if (this.standStatus === true) {
        return
      }
      if (this.whoseTurn === this.username) {
        this.$socket.emit('hit', {username: this.username})
        this.$store.dispatch('dispatchTurn')
      }
    },
    stand () {
      // disable hit button
      this.$socket.emit('stand', {username: this.username})
      this.standStatus = true
      this.$store.dispatch('dispatchTurn')
    }
  },
  created: function () {
    axios.get('http://localhost:3000/cards/show').then(response => {
      this.$store.commit('getcard', response.data.data)
      axios.get('http://localhost:3000/cards/getPlayer').then(response2 => {
        this.$store.commit('getuser', response2.data.data)
        this.users = this.usermember
        console.log(this.users)
      })
    })
  },
  computed: mapState([
    'cards', 'usermember', 'turn', 'whoseTurn'
  ])
}
</script>

<style>
  .background{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: #0f6534;
    max-height: 800px;
    top: 0;
    overflow: scroll;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
  .waiting-font{
    font-size: 80px;
    color: white
  }
  .title{
    width: 100%;
    margin-bottom: 20px;
  }
  .exit-button{
    color: white !important
  }
  .username-font{
    font-size: 2em;
    color: white
  }
  .card{
    padding: 0;
    margin: 0 5px;
    border: none;
    width: 100px;
    height: 153px;
  }
  .cards-all{
    display: flex;
    flex-direction: row;
    justify-content: space-between
  }

  .content-nest{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .username{
    margin-bottom: 20px;
  }
  .user{
    margin: 20px 0;
  }
  .btn{
    padding: 5px 20px;
    font-size: 2em;
  }
</style>
