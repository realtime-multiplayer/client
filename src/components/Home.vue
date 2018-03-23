<template>
  <div class="background-home">
    <div class="col-lg-2">

    </div>
    <div class="col-lg-8">
      <div class="title">
        <h1 class="title-font">Black Jack</h1>
      </div>
      <div class="input-site">
        <input v-model="username" class="form-control col-lg-4" type="text" placeholder="Place your name">
        <button v-on:click="join" class="btn btn-primary">Join</button>
      </div>
    </div>
    <div class="col-lg-2"></div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import routes from '@/router'
export default {
  name: 'HelloWorld',
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    userid: function (userid) {
      // First visit get entry id
      console.log(`Hey somebody has visit this place ${userid}`)
      this.userid = userid
    },
    welcome () {
      console.log('welcome')
    },
    userdisconnect (userid) {
      // Sombedy has leave
      for (let i = 0; i < this.usermember.length; i++) {
        if (this.usermember[i].userid === this.userid) {
        }
      }
    }
  },
  data () {
    return {
      username: '',
      currentuserid: '',
      userid: ''
    }
  },
  created () {
    // Get Users in Firebase
    axios.get('http://localhost:3000/cards/getPlayer').then(response => {
      if(response.data.data !== null) {
        this.$store.commit('getuser', response.data.data)
      }
      console.log(this.usermember)
    })
  },
  methods: {
    join () {
      if (this.username === '') {
        alert('Please input username to join')
      } else {
        // Check User In Firebase
        console.log('joining room')
        if (this.usermember.length < 4) {
          this.$socket.emit('joinuser', {room: 'getthebunny', username: this.username})
          this.$socket.on('receivemessage', (value) => {
            let submitUser = {
              name: value.username,
              room: value.room,
              userid: this.userid
            }
            axios.post('http://localhost:3000/cards/addPlayer', submitUser).then(response => {
              routes.push({
                path: '/play'
              })
            })
          })
        }
      }
    }
  },
  computed: mapState([
    'usermember'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-family: 'Pacifico', cursive;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.background-home{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: #0f6534;
  max-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row
}
.input-site{
  display: flex;
  width: 100%;
  justify-content: center;
}
.title{
  width: 100%;
  margin-bottom: 20px;
}
.form-control{
  margin-right: 20px !important;
  padding: 10px !important;
  font-size: 1.2em !important;
}
.title-font{
  font-size: 120px;
  color: white;
}

.btn{
  padding: 5px 20px !important;
}
.images{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.image{
  width: 200px;
}
</style>
