<template>
  <div class=" background">
    <div class="dark">
      <div class="jumbotron ">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <h3 class=" display-1 fw-bold t-dark text-center">
            Welcome to <span class="text-uppercase fw-bolde fw-bolder t-dark display-1">boolbnb</span>
          </h3>
          <div class="t-button shadow rounded-3"><router-link :to="{ name: 'apartments' }"
              class="text-decoration-none fw-bold d-flex align-items-center">
              <div class="px-2">
                See all
                apartments
              </div>
              <i class="fa-solid fa-plane"></i>
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

.background {
  background-color: $primary-subtle;

}

.dark {
  background-color: black;
}

.jumbotron {
  width: 100%;
  height: calc(100vh - 76px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 76px;
  background-image: url(../../public/img/WhatsApp\ Image\ 2023-07-10\ at\ 12.41.47.jpeg);
  background-size: cover;
  opacity: 85%;
  z-index: 10;

  .t-dark {
    text-shadow: 5px 5px 3px #ff3d67a2;
    color: #ffffff;
  }

  .t-button {
    background-color: #ff385dbc;
    width: 75%;
    font-size: 8px;
    transition: all .5s;


    a {
      color: white;
      transition: all .5s;
    }

    i {
      font-size: 18px;
    }

    border: 2px solid $primary;

    @media screen {
      padding: .5rem;
      // width: 75%;
      font-size: 1rem;
    }

    @media (min-width: 676px) {
      padding: 1rem;
      width: 50%;
      font-size: 18px;

      i {
        font-size: 24px;
      }
    }

    @media (min-width:1024px) {
      padding: 1rem;
      width: 42%;
      font-size: 24px;

      i {
        font-size: 36px;
      }
    }

    @keyframes rotate-plane {
      0% {
        transform: translate(0px) rotate(0);
      }

      25% {
        transform: translate(75px) rotate(0deg);
      }

      50% {
        transform: translate(75px) rotate(180deg);
      }

      75% {
        transform: translate(0px) rotate(180deg);
      }

      100% {
        transform: translate(0px) rotate(360deg);
      }
    }


    &:hover {
      background-color: rgba($color: $primary, $alpha: 0.9);

      a {
        color: white;
      }

      .fa-plane {
        animation: rotate-plane 3s linear infinite;
      }

    }
  }


}
</style>