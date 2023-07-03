<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <div class="card-title">
                <!-- <h3>{{ product.name }}</h3> -->
                <h3>NOME APPARTAMENTO</h3>
            </div>
            <div class="card-img-top">
                <img src="https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg" alt="">
                <!-- <img :src="getImagePath" :alt="product.name"> -->
            </div>
            <div class="card-body d-flex justify-content-between align-items-end">
                <div>
                    <h6>luogo</h6>
                    <span>stanze</span>
                    <span>letti</span>
                    <span>Price: &euro;</span>
                    <!-- <h6>{{ product.brand.name }}</h6>
                    <span>{{ product.category.name }}</span> -->
                </div>
                <!-- <div class="card-text">
                    <p>
                         <a href="#" class="btn btn-primary">Go somewhere</a> 
                        <router-link :to="{ name: 'single-product', params: { slug: product.slug } }"
                            class="btn btn-primary">View
                        </router-link>
                    </p>
                    Price: {{ product.price || 0 }} &euro;
                </div> -->

            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'ApartmentCard',
    props: ['product'],
    data() {
        return {
            store
        }
    },
    computed: {
        getImagePath() {
            return store.imgBasePath + this.product.cover_image;
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
</style>