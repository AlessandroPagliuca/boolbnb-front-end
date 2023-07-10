<template>
    <div class="map" ref="mapRef"></div>
</template>
  
<script>
import axios from 'axios';
import { store } from '../store';
import tt from '@tomtom-international/web-sdk-maps';


export default {
    name: 'HomeView',
    data() {
        return {
            store,
            apartments: [],
        };
    },
    methods: {
        async getData() {
            try {
                const response = await axios.get(`${store.apiURL}/apartments`);
                console.log(response.data.data); // Verifica se i dati degli appartamenti vengono correttamente ricevuti
                this.apartments = response.data.data;
            } catch (error) {
                console.error(error);
            }
        },

        initializeMap() {
            const map = tt.map({
                key: 'EhQUF3bnTXGt6c7oDe8VwtnMNe64AtWq',
                container: this.$refs.mapRef,
                center: [12.4963655, 41.9027835],
                zoom: 4,
            });

            this.apartments.forEach(apartment => {
                // Crea un elemento HTML per l'indicatore con l'icona di FontAwesome
                const markerElement = document.createElement('div');
                markerElement.className = 'custom-marker';
                markerElement.innerHTML = '<i class="fa-solid fa-house text-white bg-dark p-2 rounded-circle"></i>'; // Aggiungi l'icona di FontAwesome qui

                // Crea il marker utilizzando l'elemento HTML dell'indicatore personalizzato
                const marker = new tt.Marker({
                    element: markerElement, // Passa l'elemento HTML dell'indicatore come parametro
                }).setLngLat([apartment.longitude, apartment.latitude]).addTo(map);



                const popupContent = `            
            <a class="text-black text-decoration-none no-outline" href="apartment/${apartment.slug}"><strong>Title:</strong> ${apartment.title}<br/>
            <strong>Price:</strong> ${apartment.price} &euro;<br/>
            <img class="img-fluid" v-if="apartment.main_img.includes('http')"
                    src="${apartment.main_img}" alt="${apartment.title}">
                <img class="img-fluid" v-else :src="getImagePath" :alt="apartment.title"></a>`
                    ;


                const popup = new tt.Popup({ anchor: 'top' }).setHTML(popupContent);
                marker.setPopup(popup);
            });
        },

        getImageUrl(apartment) {
            if (apartment.main_img.includes('http')) {
                return apartment.main_img; // Restituisce direttamente l'URL se è un URL esterno
            } else {
                return store.imgBasePath + apartment.main_img; // Restituisce l'URL basato sul percorso di base e il nome del file se è un file locale
            }
        },






    },
    mounted() {
        this.getData()
            .then(() => {
                this.initializeMap();
            })
            .catch(error => {
                console.error(error);
            });
    },
    computed: {
        getImagePath() {
            return store.imgBasePath + this.apartment.main_img;
        }
    }
}
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
  