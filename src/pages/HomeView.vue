<template>
  <div class="">
    <div class="jumbotron position-relative">
      <img class="img-fluid" src="img\2008720-bellissimo-paesaggio-urbano-di-kobe-citta-giappone-gratuito-foto.jpg"
        alt="jumbo">



    </div>
  </div>
  <!-- carosello -->
  <div class="container-fluid  px-5 ">
    <h2 class="text-capitalize my-3">featured apartments</h2>

    <Carousel />

    <h2 class="text-capitalize my-3">maps</h2>

    <!-- mappa -->
    <!-- 
    <MapComp /> -->
  </div>
</template>



<script>
import Carousel from '../components/Carousel.vue';
import MapComp from '../components/MapComp.vue';
export default {
  name: 'HomeView',

  components: {
    Carousel,
    MapComp,

  }
}
</script>

<style lang="scss" scoped>
.jumbotron {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>