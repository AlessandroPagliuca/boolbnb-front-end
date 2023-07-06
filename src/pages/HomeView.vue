<template>
  <div class="">
    <div class="jumbotron position-relative">
      <img class="img-fluid" src="\img\2008720-bellissimo-paesaggio-urbano-di-kobe-citta-giappone-gratuito-foto.jpg"
        alt="jumbo">

      <div class="border-1 border-danger position-absolute">
        <SearchComponent />
        <ProvaSearch />
      </div>



    </div>
  </div>
  <!-- carosello -->
  <div class="container-fluid  px-5 ">
    <h2 class="text-capitalize my-3">featured apartments</h2>

    <Carousel />

    <h2 class="text-capitalize my-3">maps</h2>

    <!-- mappa -->
    <div class="pb-3 rounded-2 box-prov">
      <MapComp />

    </div>
  </div>
</template>



<script>
import Carousel from '../components/Carousel.vue';
import MapComp from '../components/MapComp.vue';
import SearchComponent from '../components/searchcomponent.vue';
import ProvaSearch from '../components/ProvaSearch.vue';


export default {
  name: 'HomeView',

  components: {
    Carousel,
    MapComp,
    SearchComponent,
    ProvaSearch

  },




}
</script>

<style lang="scss" scoped>
.box-prov {
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