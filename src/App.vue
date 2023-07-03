<template>
  <HeaderComp/>
  <div>
    ciao
  </div>
  <FooterComp/>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

<style lang="scss" scoped></style>