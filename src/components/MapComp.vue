<template>
    <div class="map" ref="mapRef"></div>
</template>
  
<script>
import tt from '@tomtom-international/web-sdk-maps'

export default {
    name: 'HomeView',
    methods: {
        initializeMap() {
            const map = tt.map({
                // Please use your own API key from Tomtom Developer Portal.
                key: 'EhQUF3bnTXGt6c7oDe8VwtnMNe64AtWq',

                container: this.$refs.mapRef,
                //longitude and latitude Naples = 40.85134832833339, 14.269028108508328 ||| London = -0.127758, 51.507351
                center: [-0.127758, 51.507351],
                zoom: 5,
            })

            new tt.Marker().setLngLat([-0.127758, 51.507351]).addTo(map)
            new tt.Marker().setLngLat([14.269028108508328, 40.85134832833339]).addTo(map)
        },
    },
    mounted() {
        this.initializeMap()
    },
}
</script>
  
<style scoped>
.map {
    width: 100%;
    height: 300px;
}
</style>
  