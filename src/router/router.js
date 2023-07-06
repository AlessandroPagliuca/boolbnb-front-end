import { createRouter, createWebHistory } from "vue-router";

import HomeView from '../pages/HomeView.vue';
import ApartmentsView from '../pages/ApartmentsView.vue';
import DevelopersView from '../pages/DevelopersView.vue';
import SingleApartment from '../pages/SingleApartment.vue';
import PaymentPage from '../pages/PaymentPage.vue';
import NotFound from '../pages/NotFound.Vue';


// const router = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     routes: [
//         {
//             path: '/',
//             name: 'home',
//             component: HomeView,
//         },
//         {
//             path: '/apartments',
//             name: 'apartments',
//             component: ApartmentsView,
//         },
//         {
//             path: '/developers',
//             name: 'developers',
//             component: DevelopersView,
//         },

// {
//     path: '/apartments/:slug',
//     name: 'single-apartments',
//     component: SingleApartment,
// },
//         //pagina di 404 NotFound
//         // {
//         //     path: '/:pathmatch(.*)*',
//         //     name: 'not-found',
//         //     component: NotFound,
//         // },


//     ]
// });


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../pages/HomeView.vue')
        },
        {
            path: '/apartments',
            name: 'apartments',
            component: () => import('../pages/ApartmentsView.vue'),
            props: (route) => ({ searchQuery: route.query.q || '' }), // Recupera il parametro di ricerca come query parameter
        },
        {
            path: '/developers',
            name: 'developers',
            component: () => import('../pages/DevelopersView.vue')
        },

        {
            path: '/apartment/:slug',
            name: 'single-apartment',
            component: () => import('../pages/SingleApartment.vue')
        },

        {
            path: '/payment-page/:slug',
            name: 'payment-page',
            component: () => import('../pages/PaymentPage.vue')
        },


        //page not found error 404
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: () => import('../pages/NotFound.vue')
        }

    ]
})

export { router };
