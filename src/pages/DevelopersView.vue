<template>
  <div class="container 100vh">
    <h2 class="text-center my-5 text-team">Conosci meglio il nostro Team!</h2>
    <div class="row align-items-stretch">
      <div v-for="(team, index) in teams" :key="index" class="col-12 col-md-6 col-lg-4">
        <div class="cards-container d-flex justify-content-center">
          <div class="card rounded-2">
            <div class="header-card">
              <div class="avatar ">
                <img class="" :src="team.profile_img" :alt="team.name" />
              </div>
            </div>

            <h4 class="text-black px-2 pt-2">{{ team.name }}</h4>
            <div>
              <p class="fw-semibold px-2">{{ team.role }}</p>
              <hr />
              <div class="d-flex px-2">
                <a class=" fw-semibold" href="{{ team.link }}">Linkedin <i class="fa-brands fa-linkedin text-black"></i>
                </a>
                <span class="px-1"> | </span>
                <a class=" fw-semibold" href="{{ team.link }}">Github <i class="fa-brands fa-github text-black"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <CreditCard/> -->
</template>

<script>
import { teams } from "../data/data";
import CreditCard from "../components/CreditCard.vue";


export default {
  name: "DevelopersView",
  components: {
    CreditCard
  },
  data() {
    return {
      teams,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;



img {
  width: 280px;
  border-radius: 100%;
  margin: 10px;
}

.card {
  width: 300px;
  height: 440px;
  margin-bottom: 50px;
}

.header-card {
  background-color: $primary;
  height: 300px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.text-team {
  color: $primary;
}

a {
  text-decoration: none;
}
</style>