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
        <!--ora le icone hanno la funzione della checkbox precedente e quando ci clicchiamo cambia lo stile di esso per far capire all'utente il campo selezionato-->
        <ul class="d-flex justify-content-around list-unstyled">
            <li v-for="service in services" :key="service.icon" class="style-icon">
                <i :class="[service.icon === 'instagram fa-rotate-180' ? 'fa-brands fa-' + service.icon : 'fa-solid fa-' + service.icon]"
                    @click="toggleService(service)"
                    :style="{ backgroundColor: isSelected(service) ? '#FF385C' : '', color: isSelected(service) ? 'white' : '' }"></i>
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
        toggleService(service) {
            const index = this.selectedServices.indexOf(service);

            if (index === -1) {
                this.selectedServices.push(service); // aggiungi il servizio selezionato
            } else {
                this.selectedServices.splice(index, 1); // rimuovi il servizio deselezionato
            }
        },
        isSelected(service) {
            return this.selectedServices.includes(service);
        },
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

.style-icon {


    i {
        padding: 5px;
        border-radius: 50%;
        font-size: 16px;
        color: #222222;
        transition: all .5s;

        &:hover {
            background-color: $primary;
            color: white;
        }
    }
}
</style>