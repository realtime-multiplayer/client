<template>
  <div class="background">

    <div class="col-lg-1"></div>

    <div v-if="users.length === 4" class="col-lg-10">
      <div class="row justify-content-center" id="control">
        
        <div class="col-lg">
          <button v-on:click="gameplay">Play</button>
          <button class="btn" v-on:click="hitCard" type="button" name="button" id="hit">Hit</button>
          <button class="btn" v-on:click="stand" type="button" name="button" id="stand">Stand</button>
          <button v-on:click="play" class="btn btn-primary">Ready</button>
        </div>
        <div class="content-nest">
          <div v-for="(u, i) in usermember" :key="i" class="user col-lg-6">   
            <div class="username">
              <h4 class="username-font">{{u.name}}</h4>
            </div>
            <div class="cards-all">
              <div v-for="(card, i) in u.cards" :key=i class="cards">
                <img v-if="card !== ''" class="card-img-top img-fluid" :src="card.image" alt="Card image cap">
                <div v-else></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="col-lg-10">
      <h5 class="waitinglist">Waiting List</h5>
      <div v-for="(user, i) in users" :key="i" class="card col-lg-2">
         <div class="card-body">
          <h5 class="card-title">{{user.name}}</h5>
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
      users: [],
      mycard: [],
      users: [],
      standStatus: false,
      return: 0,
      status: false
    }
  },
  sockets: {
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
      this.$store.dispatch('dispatchStandBy')
    },
    getcards (value) {
      this.$store.commit('updateuser', value)
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
      this.$socket.emit('hit', 'what is my socket id')
      this.$socket.on('drawCard', (value)=>{
        if(value.socketid === this.users[this.return]) {
          console.log('heyy')
        }
      })
      if (this.standStatus === true) {
        return
      }
      const index = Math.floor(Math.random() * this.cards.length)
      const card = this.cards[index]
      // if (this.whoseTurn === this.username) {
      
      // this.$store.dispatch('dispatchTurn')
      // // get new card
      // let index = Math.ceil(Math.random() * this.cards.length)
      // this.mycard.push(this.cards[index])
      // }
    },
    stand () {
      // disable hit button
      this.$socket.emit('stand', {username: this.username})
      this.standStatus = true
      this.$store.dispatch('dispatchTurn')
      this.$store.dispatch('dispatchStandBy')
    },
    gameplay () {
      axios.get('http://bjserver.agnynureza.online/cards/show').then(response => {
      this.$store.commit('getcard', response.data.data)
      axios.get('http://bjserver.agnynureza.online/cards/getPlayer').then(response2 => {
        if(response2.data.data === null){
          return routes.push({
            path: '/'
          })
        }else{
          this.$socket.emit('getrandom', (this.cards))
          this.$store.commit('getuser', response2.data.data)
        }
      }).catch((err => {
        res.send(err)
      }))
    }).catch((err)=> {
      res.send(err)
    })
    }
  },
  created: function () {
      axios.get('http://bjserver.agnynureza.online/cards/getPlayer').then(response2 => {
        if(response2.data.data === null){
          return routes.push({
            path: '/'
          })
        }else{
          this.$store.commit('getuser', response2.data.data)
          console.log(this.usermember)
          this.users = this.usermember
          
        }
      }).catch((err => {
        res.send(err)
      }))
    this.$store.dispatch('dispatchActive')
  },
  computed: {
    ...mapState([
      'cards', 'usermember', 'turn', 'whoseTurn'
    ]),
    currentVal () {
      let value = 0
      this.card.forEach(item => {
        value += item.value
      })
      return value
    }
  },
  watch: {
    // currentVal (val) {
    //   if (val >= 21) {
    //     this.stand()
    //     console.log('standing automatically')
    //   }
    // },
    // users () {
    //   this.status = true
    // }
  }
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
  .cards{
    padding: 0;
    margin: 0 5px;
    border: none;
    width: 100px;
    height: 153px;
    background-color: white;
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
  .card{
    margin-bottom: 20px;
  }
  .card-title{
    margin-bottom: 0
  }
  .waitinglist{
    text-align: left;
    font-size: 2em;
    color: white;
  }
  .card-body{
    padding: 5px 10px
  }
</style>
