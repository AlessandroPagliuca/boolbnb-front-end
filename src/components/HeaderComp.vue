<template>
    <div>
        <header class="bg-black">
            <!-- <nav class=" container-fluid navbar navbar-expand-lg navbar-light d-flex justify-content-between">
                <div class="p-3">
                    <img src="" alt="">
                    <a class="navbar-brand text-first-primary fw-bold" href="#">BOOLBNB</a>
                </div>
                <div class="d-flex">
                    <ul class="navbar-nav mr-auto ">
                        <a class="p-3" href="#">Home</a>
                        <a class="p-3" href="#">Apartments</a>
                        <a class="p-3" href="#">Developers</a>
                        <nav class="navbar navbar-light bg-light">
                            <div class="container-fluid">
                                <button class="navbar-toggler ms-auto" type="button" data-mdb-toggle="collapse"
                                    data-mdb-target="#navbarToggleExternalContent3"
                                    aria-controls="navbarToggleExternalContent3" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <i class="fas fa-bars"></i>
                                </button>
                            </div>
                        </nav>
                        <div class="collapse" id="navbarToggleExternalContent3">
                            <div class="bg-black shadow-3 p-4">
                                <button class="btn btn-link btn-block border-bottom m-0">Home</button>
                                <button class="btn btn-link btn-block border-bottom m-0">Apartments</button>
                                <button class="btn btn-link btn-block m-0">Developers</button>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav> -->
            <nav class="container-fluid navbar navbar-expand-lg navbar-dark d-flex justify-content-between">
                <div class="">
                    <img src="../../public/logo-boolbnb.png" alt="logo">
                    <a class="navbar-brand text-first-primary fw-bold" href="#">BOOLBNB</a>
                </div>
                <div class="text-white">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon text-white"></span>
                    </button>
                    <div class="collapse navbar-collapse text-white" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item" v-for="item in menu" :key="item.routeName">
                                <router-link :to="{ name: item.routeName }" class="nav-link mx-2" active-class="active text-decoration-primary"> {{ item.label }} </router-link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
            <!-- <nav class="navbar navbar-expand-md ">
            <div class="container">
                <a class="navbar-brand text-uppercase text-white" href="#">Start Bootstrap</a>
                <button class="navbar-toggler ah-hamburger-border" type="button" data-bs-toggle="collapse"
                    data-bs-target="#mynav" aria-controls="mynav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="mynav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-uppercase text-white" href="#">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-uppercase text-white" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-uppercase text-white" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> -->



        </header>
    </div>
</template>

<script>
export default {
    name: 'HeaderComp',
    data() {
        return {
            menu: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Apartments',
                    routeName: 'apartments'
                },
                {
                    label: 'Developers',
                    routeName: 'developers'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.text-first-primary {
    color: $primary;
}

.btn-first-primary {
    background-color: $primary;
}

.navbar-toggler{
    color: white;
}

a{
    border-bottom: transparent 3px inset;
    
}

.text-decoration-primary {
    border-bottom: $primary 3px inset;
    
}

img{
    height: 60px;
}
</style>