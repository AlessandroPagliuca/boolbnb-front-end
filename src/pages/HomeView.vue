<template>
  <div class=" background">
    <div class="jumbotron position-relative">
      <img class="img-fluid" src="\img\WhatsApp Image 2023-07-10 at 12.41.47.jpeg" alt="jumbo">

      <div class="position-absolute">
        <h2 class="text-capitalize display-1 fw-bold t-dark text-center">
          welcome to <br>
        </h2>
        <h1 class="text-uppercase fw-bolde fw-bolder t-dark display-1 ">boolBnB!</h1>

        <div class="t-button shadow rounded-5"><router-link :to="{ name: 'apartments' }"
            class="text-decoration-none fw-bold d-flex justify-content-between align-items-center">
            <div class="px-2">
              See all
              apartments
            </div>
            <i class="fa-solid fa-magnifying-glass"></i>
          </router-link>
        </div>

      </div>

    </div>
  </div>
  <!-- carosello -->
  <div class="container-fluid background  px-5 ">
    <h2 class="text-capitalize py-5 fw-bold display-4">featured apartments</h2>

    <Carousel />

  </div>
</template>



<script>

import Carousel from '../components/Carousel.vue';
import MapComp from '../components/MapComp.vue';
import ApartmentsView from './ApartmentsView.vue';
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
  mounted() {

    window.scrollTo(0, 0);

  },
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

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
  background-color: rgba($color: #000000, $alpha: 1);
  z-index: 10;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .t-dark {
    text-shadow: 5px 5px 3px rgba($color: #343a40, $alpha: 0.8);
    color: $primary;
  }

  .t-button {
    background-color: transparent;
    width: 100%;
    font-size: 8px;
    transition: all .5s;

    a {
      color: $primary;
      transition: all .5s;
    }

    i {
      font-size: 18px;
    }

    border: 2px solid $primary;

    @media screen {
      padding: .5rem;
      width: 75%;
      font-size: 1rem;
    }

    @media (min-width: 676px) {
      padding: 1rem;
      width: 70%;
      font-size: 18px;


      i {
        font-size: 24px;
      }

    }

    @media (min-width:1024px) {
      padding: 1rem;
      width: 70%;
      font-size: 24px;


      i {
        font-size: 36px;
      }

    }

    @keyframes bounce {
      0% {
        transform: translateY(0);
      }

      25% {
        transform: translateY(-10px);
      }

      50% {
        transform: translateY(0);
      }

      75% {
        transform: translateY(-5px);
      }

      100% {
        transform: translateY(0);
      }
    }


    &:hover {
      background-color: $primary;

      a {
        color: white;
      }

      .fa-magnifying-glass {
        animation: bounce 0.5s .75s infinite;
      }

    }

  }
}
</style>