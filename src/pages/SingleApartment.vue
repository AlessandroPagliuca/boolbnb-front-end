<template>
    <div class="page background min-vh-100">
        <div class="load d-flex align-items-center justify-content-center" v-if="store.loader">
            <LoaderComp />
        </div>
        <div class="row p-5 page" v-if="apartment">
            <div class="col-12 col-md-1 pb-4">
                <router-link :to="{ name: routeName }" class="btn btn-primary text-white rounded-5">
                    <i class="fa-solid fa-arrow-left"></i>
                </router-link>
            </div>
            <div class="col-12 col-md-11">
                <div class="row">
                    <div class="col-12 col-lg-6 pb-5">
                        <div class="image-box pb-3">
                            <img class="img-fluid" v-if="apartment.main_img.includes('http')" :src="apartment.main_img"
                                alt="">
                            <img class="img-fluid" v-else :src="getImagePath" :alt="apartment.title">
                        </div>
                        <div>
                            <p>{{ apartment.title }} {{ apartment.square_meters }}mq.
                                <br> {{ apartment.city }} {{ apartment.country }} {{ apartment.address }}
                                <br> {{ apartment.rooms }} <i class="fa-solid fa-person-shelter"></i> | {{ apartment.beds }}
                                <i class="fa-solid fa-bed"></i> | {{ apartment.bathrooms }} <i
                                    class="fa-solid fa-toilet"></i>
                            </p>
                        </div>
                        <div>
                            <p class="text-pink p-2 d-inline-block rounded-5">{{ apartment.price }}&euro; for night</p>
                        </div>
                        <div class="services-box">
                            <h4>Services</h4>
                            <div class="row pt-1 pb-3">
                                <div v-for="(service, index) in apartment.services" class="col-6"><i
                                        v-if="service.icon == 'instagram fa-rotate-180'"
                                        :class="'fa-brands fa-' + service.icon"></i><i v-else
                                        :class="'fa-solid fa-' + service.icon"></i> {{ service.name }}</div>

                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6">
                        <div class="description-box pb-5">
                            <h3>Description</h3>
                            <p>{{ apartment.description }}</p>
                        </div>

                        <div class="w-75 card p-4 box-card ">
                            <div class="container">
                                <h5>Contact the owner for information on availability</h5>
                                <div v-if="success" class="alert alert-success text-start" role="alert">
                                    Messaggio inviato con successo!
                                </div>
                                <div class="row">
                                    <form @submit.prevent="sendForm()" class="col-12 text-start">
                                        <div class="pb-3">
                                            <input class="form-control border-pink rounded-5"
                                                :class="{ 'is-invalid': errors.email }" type="email" name="email" id="email"
                                                placeholder="name@example.com" v-model="email">
                                            <p v-for="(error, index) in errors.email" :key="`message-error-${index}`"
                                                class="invalid-feedback">
                                                {{ error }}
                                            </p>
                                        </div>
                                        <div class="pb-3">
                                            <textarea class="form-control border-pink rounded-3"
                                                :class="{ 'is-invalid': errors.message }" name="message" id="message"
                                                cols="30" rows="10" placeholder="Message" v-model="message"></textarea>
                                            <p v-for="(error, index) in errors.message" :key="`message-error-${index}`"
                                                class="invalid-feedback">
                                                {{ error }}
                                            </p>
                                        </div>
                                        <button class="btn btn-lg btn-primary text-white" type="submit" :disabled="loading">
                                            {{ loading ? 'Sending...' : 'Send' }}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Date from '../components/Date.vue';
import LoaderComp from '../components/LoaderComp.vue';
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'SingleApartment',
    components: {
        Date,
        LoaderComp,
    },

    data() {
        return {
            store,
            label: 'Apartments',
            routeName: 'apartments',
            apartment: null,
            email: '',
            message: '',
            loading: false,
            success: false,
            errors: {}

        }
    },

    methods: {

        sendForm() {
            this.loading = true;
            this.errors = {};

            if (!this.email) {
                this.errors.email = ['Email is required.'];
            }

            if (!this.message) {
                this.errors.message = ['Message is required.'];
            }

            if (Object.keys(this.errors).length === 0) {
                const data = {
                    email: this.email,
                    message: this.message
                };

                axios
                    .post(`${store.apiURL}/apartment/${this.$route.params.slug}/messages`, data)
                    .then(response => {
                        this.success = response.data.success;
                        if (this.success) {
                            this.errors = response.data.errors;
                        } else {
                            this.email = '';
                            this.message = '';
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        this.errors.generic = 'An error occurred. Please try again later.';
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            } else {
                this.loading = false;
            }
        },


        getApartment() {
            axios.get(`${store.apiURL}/apartment/${this.$route.params.slug}`).then((res) => {

                this.apartment = res.data.results;
                console.log(res.data.results);
                // if(res.data.results){

                // } else{
                //     this.$router.push({name: 'not-found'});
                // }

            }).catch((error) => {
                console.log(error);
                console.log(error.response.data);
                this.$router.push({ name: 'not-found', query: { e: error.response.data.message } });
            }).finally(() => {
                this.store.loader = false
            });//.finally(() => {
            //     setTimeout(() => {
            //         this.isLoading = false;
            //     }, 2000);
            // })
        }

    },

    mounted() {

        window.scrollTo(0, 0);

        store.loader = true;
        this.getApartment();
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

.page {
    width: 100%;

}

.background {
    background-color: $primary-subtle;

}

.image-box {
    width: 70%;
    // border: 1px solid black;
}

input,
textarea {
    // outline: 4px solid #ff385d55;
    background-color: transparent !important;
}

.box-card {
    min-width: 250px;
    border: 0;
    box-shadow: 2px 2px 12px 6px #fe385c55;
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
        color: $primary;


    }
}

a:hover {
    .fa-arrow-left {
        animation: slide1 1s ease-in-out infinite;
    }
}

.text-pink {
    color: white;
    background-color: $primary;
}

@keyframes slide1 {

    0%,
    100% {
        transform: translate(5px, 0);
    }

    50% {
        transform: translate(-5px, 0);
    }
}
</style>
