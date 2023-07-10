<template>
    <div class="body">
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
.body {
    margin-top: 76px;
}
</style>