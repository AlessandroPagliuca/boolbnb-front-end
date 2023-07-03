<template>
    <div>
        ApartmentsView
        <ApartmentCard />
    </div>
</template>

<script>
import ApartmentCard from './views/ApartmentCard.vue';
export default {
    name: 'ApartmentsView',
    components: {
        ApartmentCard,
    }
}
</script>

<style lang="scss" scoped>

</style>