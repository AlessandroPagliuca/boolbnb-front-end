<template>
    <div class="body overflow-auto">
        <div class="container">
            <SearchBar />

            <!-- <h1 class="text-black my-5">{{ title }}</h1>
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
            </div> -->
        </div>
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';

export default {
    name: 'ApartmentsView',
    components: {
        SearchBar
    },

}
</script>

<style lang="scss" scoped>
.body{
    margin-top: 76px;
    height: 100vh;
}

.container{
    height: 100vh;
}
</style>