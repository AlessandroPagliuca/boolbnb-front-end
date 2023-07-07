<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-if="apartment.visible">
        <router-link :to="{ name: 'single-apartment', params: { slug: apartment.slug } }">
            <div class="card mb-2 border">
                <img class="img-fluid" style="height: 200px;" v-if="apartment.main_img.includes('http')"
                    :src="apartment.main_img" alt="">
                <img class="img-fluid" style="height: 200px;" v-else :src="getImagePath" :alt="apartment.title">

                <div class="card-body justify-content-between align-items-end">
                    <div>
                        <h6>{{ apartment.title }}</h6>
                        <span>rooms :{{ apartment.rooms }}</span>
                        <span> | </span>
                        <span>beds :{{ apartment.beds }}</span>
                        <p>{{ apartment.price }}: &euro;</p>
                    </div>
                    <div class="card-text">

                    </div>
                </div>
            </div>
        </router-link>
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

.card {
    width: 300px;
    height: 440px;
    margin-bottom: 50px;
    transition: all .5s;
    border: transparent;
    background-color: transparent;
    transform: scale(0.9);


    &:hover {
        transform: scale(1);
        box-shadow: 12px 12px 12px 5px rgba($primary, $alpha: 0.3);
        border: rgba(0, 0, 0, 0.3);

    }
}
</style>