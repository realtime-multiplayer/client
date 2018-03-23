<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="row justify-content-center">
          <div class="col-sm-2">
            <p>Player 1</p>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>1</p>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>2</p>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>3</p>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>4</p>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>5</p>
            </div>
          </div>
        </div>
        <div class="mb-4">

        </div>
        <div class="row justify-content-center">
          <div class="col-sm-2">
            <p>Player 2</p>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>1</p>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>2</p>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>3</p>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>4</p>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>5</p>
            </div>
          </div>
        </div>

      </div>
      <div class="col-md-6">
        <div class="row justify-content-center">
          <div class="col-sm-2">
            <p>Player 3</p>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>1</p>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>2</p>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>3</p>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>4</p>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>5</p>
            </div>
          </div>
        </div>
        <div class="mb-4">

        </div>
        <div class="row justify-content-center">
          <div class="col-sm-2">
            <p>Player 4</p>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>1</p>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>2</p>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>3</p>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>4</p>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <img class="img-fluid card-img"  src="#" alt="">
              <p>5</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="mb-4">

    </div>
    <div class="row justify-content-center" id="control">
      <div class="col-lg">
        <button class="btn" v-on:click="hitCard" type="button" name="button" id="hit">Hit</button>
        <button class="btn" v-on:click="stand" type="button" name="button" id="stand">Stand</button>
        <button class="btn" type="button" name="button" id="newgame">Start New game</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Board',
  data () {
    return {
      cardInHand: []
    }
  },
  computed: {
    ...mapState([
      'usermember', 'usercount', 'username', 'whoseTurn'
    ]),
    currentVal () {
      let value = 0
      this.cardInHand.forEach(card => {
        value += card.value
      })
      return value
    }
  },
  methods: {
    hitCard () {
      if (this.whoseTurn === this.username) {
        this.$socket.emit('hit', {username: this.username})
      }
    },
    stand () {
      // disable hit button
      this.$socket.emit('stand', {username: this.username})
    }
  },
  sockets: {
    drawCard (payload) {
      // received after 'hit'
      console.log(payload)
      // this.cardInHand.push(payload)
    },
    standingBy (payload) {
      console.log(payload)
      console.log('standing by')
    },
    opponentDraw (payload) {
      console.log(payload.username + ' has drawn a card')
    },
    opponentStand (payload) {
      console.log(payload.username + ' is standing by')
    }
  }
}
</script>

<style lang="css">
.card {
  width: 79px;
  height: 120px;
  background-color: grey;
  border-radius: 5px;
}
.card-img {
    max-width: 100%;
    height: auto;
}
</style>
