<template>
  <div class="">
    <div class="jumbotron">
      <img class="img-fluid" src="img\2008720-bellissimo-paesaggio-urbano-di-kobe-citta-giappone-gratuito-foto.jpg"
        alt="jumbo">
    </div>
  </div>
  <h2 class="text-capitalize">featured apartments</h2>
  <!-- carosello -->

  <h2 class="text-capitalize">maps</h2>

  <!-- mappa -->
</template>



<script>
export default {
  name: 'HomeView',
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