<template>
  <div class="container 100vh">
    <h2 class="text-center my-5 text-team">Conosci meglio il nostro Team!</h2>
    <div class="row align-items-stretch">
      <div v-for="(team, index) in teams" :key="index" class="col-12 col-md-6 col-lg-4">
        <div  class="cards-container d-flex justify-content-center">
          <div class="card rounded-2">
            <div class="header-card">
              <div class="avatar">
                <img :src="team.profile_img" :alt="team.name" />
              </div>
            </div>

            <h4 class="text-black">{{ team.name }}</h4>
            <div class="">
              <p class="fw-semibold">{{ team.role }}</p>
              <hr />
              <div class="d-flex">
                <a class=" fw-semibold" href="{{ team.link }}">Linkedin <i class="fa-brands fa-linkedin text-black"></i> </a>
              <p class="px-1"> | </p>
              <a class=" fw-semibold" href="{{ team.link }}">Github <i class="fa-brands fa-github text-black"></i></a>
              </div>


              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { teams } from "../data/data";


export default {
  name: "DevelopersView",
  data() {
    return {
      teams,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;
img{
  width: 280px;
  border-radius: 100%;
  margin: 10px;
}
.card{
  width: 300px;
  height: 430px;
  margin-bottom: 50px;
}
.header-card{
  background-color: $primary;
  height: 300px;
}
.text-team{
  color: $primary;
}
a{
  text-decoration: none;
}
</style>