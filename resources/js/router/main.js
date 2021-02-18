import VueRouter from 'vue-router'
import adminRouter from './admin'
import userRouter from './user'

const routes = [
    ... adminRouter,
    ... userRouter,
];

const router = new VueRouter({
    history: true,
    mode: 'history',
    routes,
});

export default router