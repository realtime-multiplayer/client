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
        <button class="btn" type="button" name="button">Hit</button>
        <button class="btn" type="button" name="button">Stand</button>
        <button class="btn" type="button" name="button">Start New game</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Board',
  data () {

  },
  computed: {

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
