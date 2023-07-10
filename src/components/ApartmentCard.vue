<template>
    <div v-if="apartment.visible">
        <router-link class="text-decoration-none" :to="{ name: 'single-apartment', params: { slug: apartment.slug } }">
            <div class="card border overflow-hidden position-relative">
                <img class="img-fluid " style="height: 200px;" v-if="apartment.main_img.includes('http')"
                    :src="apartment.main_img" alt="">
                <img class="img-fluid " style="height: 200px;" v-else :src="getImagePath" :alt="apartment.title">
                <span class="price fw-bold position-absolute p-2 badge ">{{ apartment.price }}
                    &euro;</span>
                <div class="card-body justify-content-between">
                    <div class="d-flex justify-content-between">
                        <div>
                            <div class="card-head pb-2 w-75">
                                <h6 class="fw-bolder">{{ apartment.title }}</h6>
                            </div>
                            <div class="card-text">
                                <div class="pb-4 city">
                                    <span> <i class="fa-solid fa-person-shelter"></i> {{ apartment.rooms }}</span>
                                    <span> | </span>
                                    <span><i class="fa-solid fa-bed"></i> {{ apartment.beds }} </span>
                                </div>
                                <!-- <span class="price fw-bold">{{ apartment.price }} &euro;</span> -->

                            </div>

                        </div>
                        <div>
                            <span class="fw-semibold">{{ apartment.city }} ,</span>
                            <span class="address d-block">{{ apartment.address }}</span>
                        </div>
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
    max-width: 300px;
    height: 300px;
    // margin-bottom: 50px;
    transition: all .5s;
    transition: all .5s;
    transform: scale(0.8);
    border: transparent;
    background-color: transparent;
    border: 0px !important;


    &:hover {
        transform: scale(0.9);
        box-shadow: 0px 0px 12px 6px rgba($primary, $alpha: 0.3);
        // box-shadow: 8px 8px 12px 5px rgba($primary, $alpha: 0.3);
        border: rgba(0, 0, 0, 0.3);

    }
}

// .card-head {
//     width: 150px;
//     height: 70px;
// }

.price {
    // height: 60px;
    // width: 100px;
    top: 0;
    right: 0;
    color: white;
    background-color: $primary;
    font-size: 13px;
}

// .city {
//     width: 200px;
// }
.address {
    font-size: 12px;
    // margin-top: 2px;
}

.load {
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    background-color: rgba($color: #000000, $alpha: 0.6);
    z-index: 10000;

    .fa-spinner {
        font-size: 10rem;
    }
}
</style>