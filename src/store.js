import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    apiURL: 'http://127.0.0.1:8000/api',
    imgBasePath: 'http://127.0.0.1:8000/storage/public/images/apartments/',
    loader: false,
    // endPoint: '',
    // characterList: [],
    // loading: false,
    // params: {},
    // search: {
    //     status: '',
    //     name: ''
    // },
    // errormessage: '',
    // getCharacters() {
    //     this.errormessage = '';
    //     this.loading = true;
    //     const params = { ...this.params }
    //     axios.get(this.apiURL + this.endPoint, { params }).then(
    //         (res) => {
    //             this.characterList = res.data.results;
    //             this.loading = false;
    //         }
    //     ).catch((error) => {
    //         this.characterList.length = 0;
    //         this.loading = false;
    //         this.errormessage = error.message
    //     })
    // }
});