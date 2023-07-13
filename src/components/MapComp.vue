<template>
    <div class="map" ref="mapRef"></div>
</template>
  
<script>
import axios from 'axios';
import { store } from '../store';
import tt from '@tomtom-international/web-sdk-maps';


export default {
    name: 'MapComp',
    props: {
        apartments: {
            type: Array,
            required: true,
        },
    },
    mounted() {
        this.createMap();
    },
    watch: {
        apartments: {
            handler() {
                this.createMap();
            },
            deep: true,
        },
    },
    methods: {

        createMap() {
            const mapContainer = this.$refs.mapRef;
            mapContainer.innerHTML = '';

            const map = tt.map({
                key: 'EhQUF3bnTXGt6c7oDe8VwtnMNe64AtWq',
                container: mapContainer,
                center: [12.4963655, 41.9027835],
                zoom: 4,
            });

            this.apartments.forEach(apartment => {
                const markerElement = document.createElement('div');
                markerElement.className = 'custom-marker';
                markerElement.innerHTML = '<i class="fa-solid fa-house text-white bg-dark p-2 rounded-circle"></i>';

                const marker = new tt.Marker({
                    element: markerElement,
                }).setLngLat([apartment.longitude, apartment.latitude]).addTo(map);

                const popupContent = `
                 <a class="text-black text-decoration-none no-outline" href="apartment/${apartment.slug}">
                <strong>Title:</strong> ${apartment.title}<br/>
                <strong>Price:</strong> ${apartment.price} &euro;<br/>
                <img class="img-fluid" src="${apartment.main_img.includes('http') ? apartment.main_img : store.imgBasePath + apartment.main_img}" alt="${apartment.title}">
                </a>
                `;

                const popup = new tt.Popup({ anchor: 'top' }).setHTML(popupContent);
                marker.setPopup(popup);
            });
        },

    },
    computed: {
        getImagePath() {
            return store.imgBasePath + this.apartment.main_img;
        }
    }
};
</script>
  
<style scoped>
.map {
    width: 100%;
    height: 300px;
}

.no-outline {
    outline: none;
}
</style>
  