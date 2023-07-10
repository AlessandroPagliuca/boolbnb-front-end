<template>
    <div class="body background">
        <div class="container">
            <SearchBar />


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
@use '../assets/partials/variables' as *;

.body {
    margin-top: 76px;
}

.background {
    background-color: $primary-subtle;

}
</style>