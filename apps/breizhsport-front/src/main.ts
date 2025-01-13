import { createApp } from 'vue';
import App from './app/App.vue';
import router from './router'; // Importer le routeur

// Crée et monte l'application Vue sur un élément avec l'ID `app`
createApp(App).mount('#app');

// Créer et monter l'application Vue avec le routeur
const app = createApp(App);
app.use(router); // Intégrer le routeur
app.mount('#app');