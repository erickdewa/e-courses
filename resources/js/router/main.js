import VueRouter from 'vue-router'
import admin from './admin'

const routes = [
    ... admin
];

const router = new VueRouter({
    history: true,
    mode: 'history',
    routes,
});

export default router