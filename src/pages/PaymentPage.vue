
<template >
    <div class="background">
        <CreditCard />

    </div>
</template>

<script>
import axios from 'axios';
import CreditCard from "../components/CreditCard.vue";
export default {
    name: 'PaymentPage',
    components: {
        CreditCard,
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.background {
    background-color: $primary-subtle;

}
</style>