import { createApp } from 'vue';
import App from '@/App.vue'
import NeshanMapLeaflet from './components/NeshanMapLeaflet.vue'
import '@/styles/app.css';

const app = createApp(App);
app.use(NeshanMapLeaflet);

app.mount('#app');
