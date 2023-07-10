<template>
    <div class="min-vh-100">
        <div class="d-flex justify-content-center">
            <div class="border-pink box-input rounded-5 py-2 px-3 my-3 d-flex justify-content-between">
                <input class="border-0 no-outline" type="text" v-model.lazy="searchQuery"
                    placeholder="Search city or address..." @keyup.enter="filterAppartments" />
                <button class="btn btn-primary text-white rounded-circle fs-5" @click="filterAppartments">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>

        <!--Filtri services-->
        <ul class="d-flex justify-content-around list-unstyled">
            <li v-for="service in services" :key="service.icon">
                <input type="checkbox" :value="service" v-model="selectedServices" />
                <i v-if="service.icon === 'instagram fa-rotate-180'" :class="'fa-brands fa-' + service.icon"></i>
                <i v-else :class="'fa-solid fa-' + service.icon"></i>
            </li>
        </ul>


        <div v-if="isApartmentsRoute" class="row mb-4">
            <ApartmentCard v-for="apartment in resultAppartments" :key="apartment.id" :apartment="apartment" />
        </div>
        <div v-if="resultAppartments.length === 0">
            <p>Not apartments found.</p>
        </div>

        <MapComp />
    </div>
</template>

<script>
////////// SCRIPT FUNZIONANTE //////////
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
            selectedServices: [],
            resultAppartments: [],
        };
    },
    methods: {
        /**
         * function per filtrare i risultati tramite la ricerca usufruendo
         * servizi, città, indirizzo 
         */
        async filterAppartments() {
            try {
                /**
                 * associo la variabile filteredAppartments = a tutti gli appartamenti esistenti,
                 * dove poi verrà utilizzata per ritornarci i dati filtrati in base alla propria ricerca
                 */
                let resultAppartments = this.apartments;
                // Filtra gli appartamenti in base alla ricerca
                if (this.searchQuery) {
                    const searchQuery = this.searchQuery.trim().toLowerCase();
                    resultAppartments = resultAppartments.filter(
                        apartment =>
                            apartment.city.toLowerCase().includes(searchQuery) ||
                            apartment.address.toLowerCase().includes(searchQuery)
                    );
                }
                // Filtra gli appartamenti in base ai servizi selezionati
                if (this.selectedServices.length > 0) {
                    const selectedServices = this.selectedServices.map(service => service.name);
                    resultAppartments = resultAppartments.filter(apartment =>
                        apartment.services.some(service => selectedServices.includes(service.name))
                    );
                }
                this.resultAppartments = resultAppartments;
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
                const response = await axios.get(`${store.apiURL}/apartments`);
                this.apartments = response.data.data;
                this.resultAppartments = this.apartments; // Imposta gli appartamenti filtrati inizialmente a tutti gli appartamenti
            } catch (error) {
                console.error(error);
            }
        },
    },
    computed: {
        isApartmentsRoute() {
            return this.$route.path === '/apartments';
        },
    },
    mounted() {
        this.getData();
    },
};


</script>



<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.no-outline {
    outline: none;
    background-color: $primary-subtle;
}

.bg-pink {
    background-color: $primary;
}

.box-input {
    border: 1px solid;
}
</style>