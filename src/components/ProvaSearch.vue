<template>
    <div>
        <input type="text" v-model="searchQuery" @input="search" placeholder="Cerca..." />
        <ul>
            <li v-for="result in searchResults" :key="result.id">
                {{ result.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: '',
            searchResults: []
        };
    },
    methods: {
        search() {
            // Esegui una chiamata API o un'elaborazione locale per ottenere i risultati della ricerca
            // Ad esempio, puoi utilizzare axios per fare una chiamata a un server API
            // e assegnare i risultati alla proprietà searchResults

            // Esempio di chiamata API usando axios
            // Assicurati di installare axios tramite npm o yarn: npm install axios
            // import axios from 'axios';
            // axios.get(/api/search?query=${this.searchQuery})
            //   .then(response => {
            //     this.searchResults = response.data;
            //   })
            //   .catch(error => {
            //     console.error(error);
            //   });

            // Esempio di elaborazione locale per la ricerca
            // Supponiamo che tu abbia un array di oggetti che rappresentano i risultati della ricerca
            const data = [
                { id: 1, title: 'Risultato 1' },
                { id: 2, title: 'Risultato 2' },
                { id: 3, title: 'Risultato 3' }
            ];

            this.searchResults = data.filter(result =>
                result.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    }
};
</script>