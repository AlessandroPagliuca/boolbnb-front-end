<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-if="apartment.visible">
        <router-link class="text-decoration-none" :to="{ name: 'single-apartment', params: { slug: apartment.slug } }">
            <div class="card border text-decoration-none">
                <img class="img-fluid" style="height: 200px;" v-if="apartment.main_img.includes('http')"
                    :src="apartment.main_img" alt="">
                <img class="img-fluid" style="height: 200px;" v-else :src="getImagePath" :alt="apartment.title">
                <div class="card-body justify-content-between">
                    <div class="d-flex justify-content-between">
                        <div>
                            <div class="card-head pb-3 w-75">
                                <h6 class="fw-bolder">{{ apartment.title }}</h6>
                            </div>
                            <div class="card-text pb-2">
                                <div class="mb-2 city">
                                    <span class="fw-semibold">{{ apartment.city }} ,</span>
                                    <span class="address d-block">{{ apartment.address }}</span>
                                </div>
                                <span> <i class="fa-solid fa-person-shelter"></i> {{ apartment.rooms }}</span>
                                <span> | </span>
                                <span><i class="fa-solid fa-bed"></i> {{ apartment.beds }}</span>
                            </div>

                        </div>
                        <span class="price fw-bold">{{ apartment.price }} &euro;</span>
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
    // width: 300px;
    height: 380px;
    // margin-bottom: 50px;
    transition: all .5s;
    transition: all .5s;
    transform: scale(0.9);
    border: transparent;
    background-color: transparent;
    border: 0px !important;


    &:hover {
        transform: scale(1);
        box-shadow: 0px 0px 12px 6px rgba($primary, $alpha: 0.3);
        border: rgba(0, 0, 0, 0.3);

    }
}

// .card-head {
//     width: 150px;
//     height: 70px;
// }

// .price {
//     height: 60px;
//     width: 100px;
// }

// .city {
//     width: 200px;
// }
.address {
    font-size: 12px;
    // margin-top: 2px;
}
</style>