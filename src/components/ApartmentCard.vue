<template>
<<<<<<< HEAD
    <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-if="apartment.visible">
=======
    <div class="card shadow mb-3">
        <div class="card-img-top">
>>>>>>> 6d8d06befc17cf63f8597b76e55ce0a5b7db95b8

            <img class="img-fluid" v-if="apartment.main_img.includes('http')" :src="apartment.main_img" alt="">
            <img class="img-fluid" v-else :src="getImagePath" :alt="apartment.title">
        </div>
        <div class="card-body justify-content-between align-items-end">
            <div>
                <h6>{{ apartment.title }}</h6>
                <span>rooms :{{ apartment.rooms }}</span>
                <span> | </span>
                <span>beds :{{ apartment.beds }}</span>
                <p>{{ apartment.price }}: &euro;</p>
            </div>
            <div class="card-text">
                <router-link :to="{ name: 'single-apartment', params: { slug: apartment.slug } }"
                    class="btn btn-primary">Show the apartment</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'ApartmentCard',
    props: ['apartment'],
    data() {
        return {
            store
        }
    },
    computed: {
        getImagePath() {
            return store.imgBasePath + this.apartment.main_img;
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.card-img-top {
    width: 500px;
}
</style>