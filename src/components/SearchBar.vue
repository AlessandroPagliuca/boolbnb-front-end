<template>
    <div class="min-vh-100 pb-3">
        <div class="load d-flex align-items-center justify-content-center" v-if="store.loader">
            <LoaderComp />
        </div>
        <div class="d-flex justify-content-center">
            <div class="border-pink box-input rounded-5 py-2 px-2 my-3 d-flex justify-content-between">
                <input class="border-0 no-outline" type="text" v-model.lazy="searchQuery"
                    placeholder="Search city or address..." @keyup.enter="filterAppartments" />
                <button class="btn btn-primary text-white rounded-circle fs-5" @click="filterAppartments">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
        <!--ora le icone hanno la funzione della checkbox precedente e quando ci clicchiamo cambia lo stile di esso per far capire all'utente il campo selezionato-->
        <div class="row align-items-center justify-content-start list-unstyled">
            <div v-for="service in services" :key="service.icon"
                class="col-2 col-md-1 style-icon py-2 mb-3 position-relative">
                <i :class="[service.icon === 'instagram fa-rotate-180' ? 'fa-brands fa-' + service.icon : 'fa-solid fa-' + service.icon]"
                    @click="toggleService(service)"
                    :style="{ backgroundColor: isSelected(service) ? '#FF385C' : '', color: isSelected(service) ? 'white' : '' }">

                    <div class="drop-icon rounded-3 p-1">
                        {{ service.name }}


                    </div>

                    <div class="spunta"> &#9650;</div>
                </i>
            </div>
        </div>

        <div v-if="isApartmentsRoute" class="row align-items-center pb-4">
            <ApartmentCard v-for="apartment in resultAppartments" :key="apartment.id" :apartment="apartment"
                class="col-12 col-sm-6 col-lg-4 col-xl-3" />
        </div>

        <div v-if="resultAppartments.length === 0" class="mb-3">
            <p class="fw-semibold text-uppercase text-danger">results :</p>
            <p class="fw-semibold">Not apartments found. </p>
        </div>


        <MapComp :apartments="resultAppartments" />

    </div>
</template>

<script>
////////// SCRIPT FUNZIONANTE //////////
import axios from 'axios';
import { store } from '../store';
import ApartmentCard from './ApartmentCard.vue';
import { services } from "../data/data";
import MapComp from './MapComp.vue';
import LoaderComp from './LoaderComp.vue';

export default {
    name: 'SearchBar',
    components: {
        ApartmentCard,
        MapComp,
        LoaderComp,
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
                this.selectedServices.push(service);
            } else {
                this.selectedServices.splice(index, 1);
            }
            this.filterAppartments();
        },
        isSelected(service) {
            return this.selectedServices.includes(service);
        },
        async filterAppartments() {
            try {
                let resultAppartments = this.apartments;

                if (this.searchQuery) {
                    const searchQuery = this.searchQuery.trim().toLowerCase();
                    resultAppartments = resultAppartments.filter(
                        apartment =>
                            apartment.city.toLowerCase().includes(searchQuery) ||
                            apartment.address.toLowerCase().includes(searchQuery)
                    );
                }

                if (this.selectedServices.length > 0) {
                    const selectedServiceNames = this.selectedServices.map(service => service.name);
                    resultAppartments = resultAppartments.filter(apartment => {
                        const apartmentServiceNames = apartment.services.map(service => service.name);
                        return selectedServiceNames.every(serviceName => apartmentServiceNames.includes(serviceName));
                    });
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
                const response = await axios.get(`${store.apiURL}/apartments`).finally(() => {
                    this.store.loader = false;
                });
                this.apartments = response.data.data;
                this.resultAppartments = this.apartments;
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
        window.scrollTo(0, 0);
        store.loader = true;
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

.box-input {
    border: 1px solid;
}

.style-icon {
    .drop-icon {
        border: 2px solid $primary;
        position: absolute;
        top: 40px;
        left: 10px;
        opacity: 0;
        transition: all .5;
        font-size: 10px;
        background-color: $primary-subtle;
        z-index: 10;
        transition: all .5s;
        letter-spacing: 3px;


    }

    .spunta {
        color: $primary;
        position: absolute;
        top: 32px;
        left: 15px;
        font-size: 14px;
        opacity: 0;
        transition: all .5s;

    }

    i {
        padding: 5px;
        border-radius: 50%;
        font-size: 16px;
        color: #222222;
        transition: all .5s;

        &:hover {
            background-color: $primary;
            color: white;

            .drop-icon {
                opacity: 1;
                color: #000000;

            }

            .spunta {
                opacity: 1;
            }
        }


    }




}
</style>