<template>
    <form @submit.prevent="searchCards">

    </form>
</template>
  
<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
            store,
            apartments: [],
            city: '',
            country: '',
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

  
  

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.input-group {
    background-color: $primary;
    width: 80%;

}
</style>