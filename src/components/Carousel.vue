<template>
    <swiper :slidesPerView="1" :spaceBetween="10" navigation :modules="modules" :loop="true" @swiper="onSwiper"
        @slideChange="onSlideChange" :autoplay="{
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
        <swiper-slide v-for="(apartment, index) in apartments" :key="apartment.id">

            <ApartmentCard :apartment="apartment" />

        </swiper-slide>

    </swiper>
</template>
<script>
import ApartmentCard from './ApartmentCard.vue';
import axios from 'axios';
//import swiper
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/bundle';
export default {

    components: {
        Swiper,
        SwiperSlide,
        ApartmentCard,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Autoplay, Navigation, Pagination, Mousewheel, Keyboard, Scrollbar, A11y],

        };
    },
    data() {
        return {
            apartments: [],
            apiUrl: 'http://127.0.0.1:8000/api',
        }
    },
    methods: {
        getData() {
            axios.get(`${this.apiUrl}/apartments/home`, {

            })
                .then((res) => {
                    console.log(res);
                    this.apartments = res.data.results;
                })
                .catch((error) => {
                    console.error(error);
                });
        }


    },
    mounted() {
        this.getData();
    }
};
</script>

<style>
.mySwiper .swiper-pagination-bullet {
    background-color: #ff385c;

}


.swiper-button-next,
.swiper-button-prev {
    padding: 2rem;
    transition: all .5s;
    border-radius: 50%;
    color: #ff385c !important;
    /* background-color: rgba(255, 255, 255, 0.5); */
    background-color: rgba(0, 0, 0, 0.5);
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
    /* background-color: rgba(0, 0, 0, 0.5); */
    background-color: rgba(255, 255, 255, 0.9);
    /* box-shadow: 1px 1px 12px 6px rgba(255, 255, 255, 0.4); */
    box-shadow: 1px 1px 12px 6px rgba(0, 0, 0, 0.4);
}
</style>

  