<template>
    <div>
        <header style="background-color: #222222">
            <nav class="container-fluid navbar navbar-expand-lg navbar-dark d-flex justify-content-between fixed-top top-nav"
                style="background-color: #222222">
                <div class="">
                    <img src="/logo-boolbnb.png" alt="logo">
                    <a class="navbar-brand text-first-primary fw-bold" href="#">BOOLBNB</a>
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container pe-3' for="menu-toggle">
                    <div class='menu-button'></div>
                </label>
                <ul class="menu">
                    <li class="nav-item" v-for="item in menu" :key="item.routeName">
                        <router-link :to="{ name: item.routeName }" class="nav-link mx-2" active-class="active"> {{
                            item.label }} </router-link>
                    </li>
                </ul>
            </nav>
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

li {
    color: white;
}

.active {
    border-bottom: $primary 3px inset;
    // color: $primary;


}

.text-decoration-primary {
    border-bottom: $primary 3px inset;

}

img {
    height: 60px;
}
</style>