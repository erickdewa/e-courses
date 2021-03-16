import VueRouter from 'vue-router'
import adminRouter from './admin'
import userRouter from './user'

const routes = [
    ... adminRouter,
    ... userRouter,
    
    {
        name: 'global.redirect',
        path: '/redirect/:type',
        component: () => import(/* webpackChunkName: "global.redirect" */ '../pages/auth/redirect/Index'),
        meta: {
            title: `Redirect | ${process.env.MIX_APP_NAME}`,
            auth: true
        },
    },

    {
        name: 'user.notfound',
        path: '/*',
        component: () => import(/* webpackChunkName: "user.notfound" */ '../pages/error/Index'),
        meta: {
            title: `Halaman tidak ditemukan | ${process.env.MIX_APP_NAME}`,
            auth: undefined
        }
    },
    {
        name: 'admin.notfound',
        path: '/admin/*',
        component: () => import(/* webpackChunkName: "admin.notfound" */ '../pages/error/Index'),
        meta: {
            title: `Halaman tidak ditemukan | ${process.env.MIX_APP_NAME}`,
            auth: undefined
        }
    }
];

const router = new VueRouter({
    history: true,
    mode: 'history',
    routes,
});

export default router