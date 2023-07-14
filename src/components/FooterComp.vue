<template>
  <footer>
    <footer class="text-center text-white" style="background-color: #222222">
      <div class="container">
        <div class="row text-center d-flex justify-content-center pt-5">
          <div class="col-md-8">
            <h6>
              Create the listing for your apartment.
              <a href="http://127.0.0.1:8000/" class="fw-semibold d-block link-hover-francesco p-2">Become an official
                member of our
                family.</a>
              <span class="fw-bold">Be a Boolbnbneaner</span>.
            </h6>
          </div>
        </div>
        <hr class="my-5" />
        <section class="text-center pb-3">
          <div class="d-flex justify-content-around">
            <a class="nav-item" v-for="item in menu" :key="item.routeName">
              <router-link :to="{ name: item.routeName }" class="nav-link mx-2 link-hover-francesco"
                active-class="active"> Team 3 with
                <span class="cuore"><i class=" fa-solid fa-heart fa-beat fa-bounce"></i></span> </router-link>
            </a>
            <div>
              <a href="" class="text-white pe-4">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="text-white pe-4">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="text-white pe-4">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="text-white pe-4">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="text-white pe-4">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="" class="text-white pe-4">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
      <div class="text-center p-1">
        <h6>© 2023 Copyright</h6>
      </div>
    </footer>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp',
  data() {
    return {
      menu: [
        {
          label: 'Developers',
          routeName: 'developers'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

footer {
  height: 327px;
}

hr {
  color: $primary;
}

a {
  text-decoration: none;
  color: white;
}

span {
  color: $primary;
}

.link-hover-francesco {
  transition: all .5s;

  &:hover {
    color: $primary;

  }
}
</style>