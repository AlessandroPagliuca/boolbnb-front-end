<template>
    <swiper :slidesPerView="1" :spaceBetween="10" :cssMode="true" :navigation="true" :mousewheel="true" :keyboard="true"
        :modules="modules" :loop="true" :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
        }" :pagination="{
    clickable: true,
    dynamicBullets: true,
}" :breakpoints="{
    '640': {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    '768': {
        slidesPerView: 3,
        spaceBetween: 40,
    },
    '1024': {
        slidesPerView: 3,
        spaceBetween: 50,
    },
}" class="mySwiper">
        <swiper-slide>
            <div class="card shadow">
                <div class="card-title">
                    <!-- <h3>{{ product.name }}</h3> -->
                    <h3>NOME APPARTAMENTO</h3>
                </div>
                <div class="card-img-top">
                    <img class="img-fluid"
                        src="https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg" alt="">
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
            </div>1
        </swiper-slide>
        <swiper-slide>
            <div class="card shadow">
                <div class="card-title">
                    <!-- <h3>{{ product.name }}</h3> -->
                    <h3>NOME APPARTAMENTO</h3>
                </div>
                <div class="card-img-top">
                    <img class="img-fluid"
                        src="https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg" alt="">
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
            </div>2
        </swiper-slide><swiper-slide>
            <div class="card shadow">
                <div class="card-title">
                    <!-- <h3>{{ product.name }}</h3> -->
                    <h3>NOME APPARTAMENTO</h3>
                </div>
                <div class="card-img-top">
                    <img class="img-fluid"
                        src="https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg" alt="">
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
            </div>3
        </swiper-slide>
        <swiper-slide>
            <div class="card shadow">
                <div class="card-title">
                    <!-- <h3>{{ product.name }}</h3> -->
                    <h3>NOME APPARTAMENTO</h3>
                </div>
                <div class="card-img-top">
                    <img class="img-fluid"
                        src="https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg" alt="">
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
            </div>4
        </swiper-slide><swiper-slide>
            <div class="card shadow">
                <div class="card-title">
                    <!-- <h3>{{ product.name }}</h3> -->
                    <h3>NOME APPARTAMENTO</h3>
                </div>
                <div class="card-img-top">
                    <img class="img-fluid"
                        src="https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg" alt="">
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
            </div>5
        </swiper-slide>
        <swiper-slide>
            <div class="card shadow">
                <div class="card-title">
                    <!-- <h3>{{ product.name }}</h3> -->
                    <h3>NOME APPARTAMENTO</h3>
                </div>
                <div class="card-img-top">
                    <img class="img-fluid"
                        src="https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg" alt="">
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
            </div>6
        </swiper-slide><swiper-slide>
            <div class="card shadow">
                <div class="card-title">
                    <!-- <h3>{{ product.name }}</h3> -->
                    <h3>NOME APPARTAMENTO</h3>
                </div>
                <div class="card-img-top">
                    <img class="img-fluid"
                        src="https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg" alt="">
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
            </div>7
        </swiper-slide>
        <swiper-slide>
            <div class="card shadow">
                <div class="card-title">
                    <!-- <h3>{{ product.name }}</h3> -->
                    <h3>NOME APPARTAMENTO</h3>
                </div>
                <div class="card-img-top">
                    <img class="img-fluid"
                        src="https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg" alt="">
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
            </div>8
        </swiper-slide><swiper-slide>
            <div class="card shadow">
                <div class="card-title">
                    <!-- <h3>{{ product.name }}</h3> -->
                    <h3>NOME APPARTAMENTO</h3>
                </div>
                <div class="card-img-top">
                    <img class="img-fluid"
                        src="https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg" alt="">
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
            </div>9
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/bundle';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Navigation, Pagination, Mousewheel, Keyboard],

        };
    },
};
</script>
  