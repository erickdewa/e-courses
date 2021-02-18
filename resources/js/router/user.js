import VueRouter from 'vue-router'

const routesUser =  [
    {
        name: 'user.home',
        path: '/home',
        component: () => import(/* webpackChunkName: "user.home" */ '../pages/user/home/Index'),
        meta: {
            title: `Home | ${process.env.MIX_APP_NAME}`,
            auth: undefined
        },
    },
    {
        name: 'notfound',
        path: '/*',
        component: () => import(/* webpackChunkName: "login" */ '../pages/error/Index'),
        meta: {
            title: `Halaman tidak ditemukan | ${process.env.MIX_APP_NAME}`,
            auth: undefined
        }
    },
    {
        name: 'notfound404',
        path: '/404',
        component: () => import(/* webpackChunkName: "login" */ '../pages/error/Index'),
        meta: {
            title: `Halaman tidak ditemukan | ${process.env.MIX_APP_NAME}`,
            auth: undefined
        }
    }
];

export default routesUser