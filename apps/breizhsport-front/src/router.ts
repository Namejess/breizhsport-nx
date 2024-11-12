import { createRouter, createWebHistory } from 'vue-router';
import Authentification from './components/Authentification.vue'; // Assure-toi que le chemin est correct
import Home from './components/Home.vue'; // Composant d'accueil, pour l'exemple

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/signup', component: Authentification, name: 'signup' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
