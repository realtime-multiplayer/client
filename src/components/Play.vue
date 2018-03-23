<template>
  <div class="background">
    <div class="col-lg-2"></div>
    <div class="col-lg-8">
      <div v-if="usercount < 5" class="waiting-player">
        <div class="title">
          <h1 class="waiting-font">Waiting Other Player</h1>
        </div>
        <button class="btn btn-primary" v-on:click="exitgame">Exit</button>
      </div>
    </div>
    <div class="col-lg-2"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import routes from '@/router'
export default {
  computed: mapState([
    'usercount', 'username', 'usermember'
  ]),
  methods: {
    exitgame () {
      this.$store.commit('replaceUsername', this.username)
      routes.push({
        path: '/'
      })
    }
  },
  created: function () {
    console.log(this.usermember)
    if (this.usermember.indexOf(this.username) === -1) {
      routes.push({
        path: '/'
      })
    }
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
    overflow: hidden;
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
</style>
