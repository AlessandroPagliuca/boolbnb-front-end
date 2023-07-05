<template>
    <div class="row m-5">
        <div class="col-0 col-sm-1 col-md-1 col-lg-1 g-3 pb-4">
            <!-- <router-link :to="{ name: item.routeName }" class="btn t-primary text-white rounded-5"><i class="fa-solid fa-arrow-left"></i></router-link> -->
            <button class="btn btn-primary text-white rounded-5"><i class="fa-solid fa-arrow-left"></i></button>
        </div>
        <div class="col-11">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-5">
                    <div class="image-box mb-3">
                        <img class="img-fluid" src="https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg" alt="">
                    </div>
                    <div class="mb-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis inventore minus unde reprehenderit voluptas vero repudiandae consequatur laudantium suscipit et veniam, soluta quo possimus quae laborum distinctio alias maiores!</p>
                    </div>
                    <div class="services-box">
                        <h4>Servizi</h4>
                        <div class="row mt-1 mb-3">
                            <div class="col-6">servizio 1</div>
                            <div class="col-6">servizio 1</div>
                            <div class="col-6">servizio 1</div>
                            <div class="col-6">servizio 1</div>
                            <div class="col-6">servizio 1</div>
                            <div class="col-6">servizio 1</div>
                        </div>
                        <button class="btn btn-primary text-white">mostra tutti</button>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                    <div class="description-box mb-5">
                        <h3>Descrizione</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, harum neque architecto tempora repudiandae alias accusamus ea deleniti explicabo sit fuga ducimus quas ipsam est iusto maxime suscipit esse eos laboriosam illum. Sunt voluptatibus necessitatibus illum numquam facilis optio expedita. Voluptatum odio veritatis excepturi obcaecati commodi consequatur vitae possimus asperiores!</p>
                    </div>
                    <div class="preview card p-3">
                        <div class="border shadow d-flex justify-content-around rounded-3 mb-5">
                            <Date/>
                        </div>
                        <div class="d-flex justify-content-center mb-5">
                            <button style="width: 70%; height: 3rem;" class="btn btn-primary text-white rounded-5 fw-semibold fs-5">Prenota</button>
                        </div>
                        <div class="pt-4 px-3 pb-2 border-top border-1 d-flex justify-content-between">
                            <h6>Totale</h6>
                            <p>00,00 &euro;</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Date from '../components/Date.vue';
export default {
    name: 'SingleApartment',
    components:{
        Date,
    },
    data() {
        return {
            // menu: [
            //     {
            //         label: 'Apartments',
            //         routeName: 'apartments'
            //     },
                
            // ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;
.image-box{
    width: 70%;
    // border: 1px solid black;
}



</style>