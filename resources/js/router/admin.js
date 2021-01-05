import VueRouter from 'vue-router'

const routesAdmin =  [
    {
        name: 'home',
        path: '/',
        component: () => import(/* webpackChunkName: "home" */ '../pages/admin/Index'),
        meta: {
            title: `Home | ${process.env.MIX_APP_NAME}`,
            auth: false
        }
    },
];

export default routesAdmin