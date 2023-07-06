<template>
    <div >
        <input class=" rounded-2" type="text" v-model="searchQuery" placeholder="Cerca per nome"
            @keyup.enter="filterAppartamenti">
        <!-- <ul> -->
        <!-- <li v-for="apartment in filteredAppartamenti" :key="apartment.id"> -->
        <div v-if="isApartmentsRoute" class="row mb-4">
            <ApartmentCard v-for="apartment in filteredAppartamenti" :key="apartment.id" :apartment="apartment" />

        </div>

        <div v-if="isApartmentsRoute" class="" style="width: fit-content;">
            <nav v-if="filteredAppartamenti.length > 0" aria-label="Page navigation example" class="py-5">
                <ul class="pagination">
                    <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === 1 }"
                            @click="getData(currentPage - 1)">Previous</button></li>
                    <li class="page-item" v-for="n in lastPage">
                        <button :class="{ 'page-link': true, 'active': currentPage === n }" @click="getData(n)">{{ n
                        }}</button>
                    </li>

                    <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === lastPage }"
                            @click="getData(currentPage + 1)">Next</button></li>
                </ul>
            </nav>
        </div>
        <!-- {{ apartment.title }} -->
        <!-- </li> -->
        <!-- </ul> -->
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
import ApartmentCard from './ApartmentCard.vue';
export default {
    name: 'SearchBar',
    components: {
        ApartmentCard,

    },
    data() {
        return {
            store,
            apartments: [],
            searchQuery: '',
            currentPage: 1,
            lastPage: null,
        }
    },
    methods: {
        async filterAppartamenti() {
            try {
                const response = await axios.get(`${store.apiURL}/apartments`);  // Esegui la chiamata al backend per ottenere la lista completa degli appartamenti
                this.apartments = response.data.data;
                this.$router.push({ path: '/apartments' + query, query: { q: searchQuery } });
                // Aggiorna la lista degli appartamenti
            } catch (error) {
                console.error('Errore durante la chiamata al backend:', error);
            }
        },
        getData(numPage) {
            axios.get(`${store.apiURL}/apartments`, {
                params: {
                    'page': numPage,
                }
            })
                .then((res) => {
                    console.log(res);
                    this.apartments = res.data.data;
                    this.currentPage = res.data.meta.current_page;
                    this.lastPage = res.data.meta.last_page;
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    },
    computed: {
        filteredAppartamenti() {
            // Filtra gli appartamenti in base alla ricerca dell'utente
            return this.apartments.filter(apartment =>
                apartment.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
        isApartmentsRoute() {
            return this.$route.path === '/apartments';
        },
    },
    mounted() {
        this.getData(1);
    }
}
</script>

<style lang="scss" scoped></style>