<template>
  <div class="">
    <div class="jumbotron position-relative">
      <img class="img-fluid" src="\img\WhatsApp Image 2023-07-10 at 12.41.47.jpeg" alt="jumbo">

      <div class="position-absolute">
        <h2 class="text-capitalize display-1 fw-bold t-dark text-center">
          welcome to <br>
        </h2>

        <h1 class="text-uppercase fw-bolde fw-bolder t-dark display-1 ">boolBnB!</h1>



      </div>

    </div>
  </div>
  <!-- carosello -->
  <div class="container-fluid  px-5 ">
    <h2 class="text-capitalize py-3">featured apartments</h2>

    <Carousel />

  </div>
</template>



<script>
import Carousel from '../components/Carousel.vue';
import MapComp from '../components/MapComp.vue';
//import SearchBar from '../components/SearchBar.vue'; 
export default {
  name: 'HomeView',

  components: {
    Carousel,
    MapComp,
    //SearchBar
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.box-map {
  overflow: hidden;
}

.jumbotron {
  width: 100%;
  height: calc(100vh - 76px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 76px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .t-dark {
    text-shadow: 5px 5px 3px rgba($color: #343a40, $alpha: 0.8);
    color: #fb6f89;
  }
}
</style>