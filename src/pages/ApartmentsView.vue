<template>
    <div class="body overflow-auto">
        <div class="container">
            <h1 class="text-black my-5">{{ title }}</h1>
            <div class="row mb-4">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(apartment, index) in apartments" :key="apartment.id">
                    <ApartmentCard :apartment="apartment" />
                </div>
            </div>

            <div class="" style="width: fit-content;">
                <nav aria-label="Page navigation example" class="py-5">
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
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ApartmentCard from '../components/ApartmentCard.vue';
export default {
    name: 'ApartmentsView',
    components: {
        ApartmentCard,
    },
    data() {
        return {
            title: 'All apartments',
            apartments: [],
            apiUrl: 'http://127.0.0.1:8000/api',
            currentPage: 1,
            lastPage: null,
        }
    },
    methods: {
        getData(numPage) {
            axios.get(`${this.apiUrl}/apartments`, {
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
    mounted() {
        this.getData(1);
    }
}
</script>

<style lang="scss" scoped></style>