import './assets/general.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/router.js'
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

const app = createApp(App)

app.use(router)
app.component('VCalendar', Calendar)
app.component('VDatePicker', DatePicker)
app.mount('#app')
