import './assets/main.css'
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';

import 'primevue/resources/themes/saga-green/theme.css'
import { createApp } from 'vue'

import { createPinia } from 'pinia'
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('FloatLabel', FloatLabel)
app.component('DataTable', DataTable)
app.component('PrimeColumn', Column)
app.component('InputNumber', InputNumber)
app.component('InputDate', Calendar)

app.mount('#app')
