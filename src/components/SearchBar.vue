<template>
    <div class=" min-vh-100">

        <div class="d-flex justify-content-center ">
            <div class="border-pink rounded-5 py-2 px-3 my-3 d-flex justify-content-between bg-white">
                <input class="border-0 no-outline" type="text" v-model.lazy="searchQuery" placeholder="Cerca per nome"
                    @keyup.enter="filterAppartamenti">

                <button class="btn btn-primary text-white rounded-circle fs-5" @click="filterAppartamenti">
                    <i class="fa-solid fa-magnifying-glass"></i></button>
            </div>


        </div>
        <div>

            <ul class="d-flex justify-content-around list-unstyled">
                <li v-for="service in services" @click="filterAppartamenti">
                    <i v-if="service.icon === 'instagram fa-rotate-180'" :class="'fa-brands fa-' + service.icon"></i>
                    <i v-else :class="'fa-solid fa-' + service.icon"></i>
                </li>
            </ul>
        </div>

        <div>
            <!-- <ul> -->
            <!-- <li v-for="apartment in filteredAppartamenti" :key="apartment.id"> -->
            <div v-if="isApartmentsRoute" class="row mb-4 ">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 ps-5 ps-sm-0" v-for="apartment in filteredAppartamenti"
                    :key="apartment.id">
                    <ApartmentCard :apartment="apartment" />
                </div>

            </div>
            <!-- {{ apartment.title }} -->
            <!-- </li> -->
            <!-- </ul> -->
            <div v-if="filteredAppartamenti.length === 0">
                <p>Nessun appartamento trovato.</p>
            </div>
        </div>
        <MapComp />
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
import ApartmentCard from './ApartmentCard.vue';
import { services } from "../data/data";
import MapComp from './MapComp.vue';
export default {
    name: 'SearchBar',
    components: {
        ApartmentCard,
        MapComp,

    },
    data() {
        return {
            store,
            apartments: [],
            searchQuery: '',
            services,
            selectedServices: [], // Aggiungi questa proprietà
        };
    },
    methods: {
        async filterAppartamenti() {
            try {
                const response = await axios.get(`${store.apiURL}/apartments`);
                this.apartments = response.data.data;
                this.$router.push({
                    path: '/apartments',
                    query: { q: this.searchQuery },
                });
            } catch (error) {
                console.error('Errore durante la chiamata al backend:', error);
            }
        },
        async getData() {
            try {
                const response = await axios.get(`${store.apiURL}/apartments`, {
                });
                this.apartments = response.data.data;
            } catch (error) {
                console.error(error);
            }
        },
    },
    computed: {
        filteredAppartamenti() {
            // Filtra gli appartamenti in base alla ricerca dell'utente
            const searchQuery = this.searchQuery.trim();
            return this.apartments.filter(apartment =>
                apartment.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                apartment.address.toLowerCase().includes(searchQuery.toLowerCase())
            );
        },
        isApartmentsRoute() {
            return this.$route.path === '/apartments';
        },
    },
    mounted() {
        this.getData();
    }
}
</script >

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.no-outline {
    outline: none;
}

.bg-pink {
    background-color: $primary;
}
</style>