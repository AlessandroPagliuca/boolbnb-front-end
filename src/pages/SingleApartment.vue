<template>
    <div class="row m-5">
        <div class="col-1">
            <!-- <router-link :to="{ name: item.routeName }" class="btn btn-primary text-white"> ⬅︎ </router-link> -->
            <button class="btn btn-primary text-white rounded-5"><i class="fa-solid fa-arrow-left"></i></button>
        </div>
        <div class="col-11">
            <div class="row">
                <div class="col-6 mb-5">
                    <div class="image-box mb-3">
                        <img class="img-fluid" src="https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg" alt="">
                    </div>
                    <div class="mb-3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis inventore minus unde reprehenderit voluptas vero repudiandae consequatur laudantium suscipit et veniam, soluta quo possimus quae laborum distinctio alias maiores!</p>
                    </div>
                    <div class="services-box">
                        <div class="d-flex">
                            <p>servizio 1</p>
                            <p>servizio 2</p>
                            <p>servizio 3</p>
                            <p>servizio 4</p>
                            <p>servizio 4</p>
                            <p>servizio 5</p>
                            <p>servizio 6</p>
                            <p>servizio 7</p>
                        </div>
                        <button class="btn btn-primary">mostra tutti</button>
                    </div>
                </div>
                <div class="col-6">
                    <div class="description-box">
                        <h3>Descrizione</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, harum neque architecto tempora repudiandae alias accusamus ea deleniti explicabo sit fuga ducimus quas ipsam est iusto maxime suscipit esse eos laboriosam illum. Sunt voluptatibus necessitatibus illum numquam facilis optio expedita. Voluptatum odio veritatis excepturi obcaecati commodi consequatur vitae possimus asperiores!</p>
                    </div>
                    <div class="preview card p-3">
                        <div class="border shadow d-flex justify-content-around">
                            <div class="left text-center p-0">
                                <p class="p-3 m-0">check-in</p>
                                <span class="text-secondary pb-3">data? si!</span>
                            </div>
                            <div class="right text-center p-0">
                                <p class="p-3 m-0">check-out</p>
                                <span class="text-secondary pb-3">data? si!</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleApartment',
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
.image-box{
    width: 300px;
    height: 225px;
    // border: 1px solid black;
}

</style>