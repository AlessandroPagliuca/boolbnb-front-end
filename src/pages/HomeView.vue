<template>
  <div class=" background">
    <div class="jumbotron position-relative">
      <img class="img-fluid" src="\img\2008720-bellissimo-paesaggio-urbano-di-kobe-citta-giappone-gratuito-foto.jpg"
        alt="jumbo">

      <!-- <SearchBar class="position-absolute"/>  NON FUNZIONA-->

    </div>
  </div>
  <!-- carosello -->
  <div class="container-fluid  px-5 background ">
    <h2 class="text-capitalize py-3">featured apartments</h2>

    <Carousel />

    <h2 class="text-capitalize py-3">maps</h2>

    <!-- mappa -->
    <div class="pb-3 rounded-2 box-map">
      <MapComp />

    </div>
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

.background {
  background-color: $primary-subtle;

}

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
}
</style>