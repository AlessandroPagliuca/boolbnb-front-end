<template>
    <div class="background">
        <div class="row p-5" v-if="apartment">
            <div class="col-0 col-sm-1 col-md-1 col-lg-1 g-3 pb-4">
                <router-link :to="{ name: routeName }" class="btn btn-primary text-white rounded-5"><i
                        class="fa-solid fa-arrow-left"></i></router-link>
                <!-- <button class="btn btn-primary text-white rounded-5"><i class="fa-solid fa-arrow-left"></i></button> -->
            </div>
            <div class="col-11">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-5">
                        <div class="image-box mb-3">
                            <img class="img-fluid" v-if="apartment.main_img.includes('http')" :src="apartment.main_img"
                                alt="">
                            <img class="img-fluid" v-else :src="getImagePath" :alt="apartment.title">
                        </div>
                        <div class="mb-4">
                            <p>{{ apartment.title }}
                                <br> {{ apartment.city }} {{ apartment.country }} {{ apartment.address }}
                                <br> {{ apartment.rooms }} <i class="fa-solid fa-person-shelter"></i> | {{ apartment.beds }}
                                <i class="fa-solid fa-bed"></i> | {{ apartment.bathrooms }} <i
                                    class="fa-solid fa-toilet"></i>
                            </p>
                        </div>
                        <div class="services-box">
                            <h4>Servizi</h4>
                            <div class="row mt-1 mb-3">
                                <div v-for="(service, index) in apartment.services" class="col-6"><i
                                        v-if="service.icon == 'instagram fa-rotate-180'"
                                        :class="'fa-brands fa-' + service.icon"></i><i v-else
                                        :class="'fa-solid fa-' + service.icon"></i> {{ service.name }}</div>
                            </div>
                            <!-- <button class="btn btn-primary text-white">mostra tutti</button> -->
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div class="description-box mb-5">
                            <h3>Descrizione</h3>
                            <p>{{ apartment.description }}</p>
                        </div>
                        <!-- <div class="preview card p-3">
                        <div class="border shadow d-flex justify-content-around rounded-3 mb-5">
                            <Date />
                        </div>
                        <div class="d-flex justify-content-center mb-5">
                            <div style="width: 70%; height: 3rem;" class="btn btn-primary rounded-5 fw-semibold fs-5" v-for="item in menu" :key="item.routeName">
                                <router-link :to="{ name: item.routeName }" class="text-white text-decoration-none" active-class="active"> {{item.label }} </router-link>
                            </div>
                        </div>
                        <div class="pt-4 px-3 pb-2 border-top border-1 d-flex justify-content-between">
                            <h6>Totale</h6>
                            <p>00,00 &euro;</p>
                        </div>
                    </div> -->

                        <div class="contatta">
                            <h5>Contatta il proprietario per avere informazioni sulla disponibilità</h5>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Inserisci la tua email</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        placeholder="name@example.com">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Inserisci la tua
                                        richiesta</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <!-- <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> -->
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Date from '../components/Date.vue';
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'SingleApartment',
    components: {
        Date,
    },
    data() {
        return {
            label: 'Apartments',
            routeName: 'apartments',
            apartment: null,
            apiUrl: 'http://127.0.0.1:8000/api',
            menu: [
                {
                    label: 'Prenota',
                    routeName: 'payment-page'
                },
            ]

        }
    },
    methods: {
        getApartment() {
            axios.get(`${this.apiUrl}/apartment/${this.$route.params.slug}`).then((res) => {

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
            })//.finally(() => {
            //     setTimeout(() => {
            //         this.isLoading = false;
            //     }, 2000);
            // })
        }

    },

    mounted() {
        // console.log(this.$router);
        // console.log(this.$route);
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

.background {
    background-color: $primary-subtle;

}

.image-box {
    width: 70%;
    // border: 1px solid black;
}
</style>