<template>
  <HeaderComp />
  <div class="margin">
    <RouterView></RouterView>
  </div>

  <FooterComp  class="footer-class"/>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
import { RouterView } from 'vue-router';

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

<style lang="scss" scoped>
.margin {
  margin-top: 76px;
}
</style>