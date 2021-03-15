import VueRouter from 'vue-router'

const routesUser =  [
    {
        name: 'user',
        path: '/',
        component: () => import(/* webpackChunkName: "admin" */ '../pages/user/User'),
        meta: {
            title: `Admin | ${process.env.MIX_APP_NAME}`,
            auth: true
        },
        children: [
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
                name: 'home',
                path: '/',
                component: () => import(/* webpackChunkName: "home" */ '../pages/user/home/Index'),
                meta: {
                    title: `Home | ${process.env.MIX_APP_NAME}`,
                    auth: undefined
                }
            },
            {
                name: 'courses',
                path: '/courses/:uuidCourses',
                component: () => import(/* webpackChunkName: "courses" */ '../pages/user/kursus/Index'),
                meta: {
                    title: `Courses | ${process.env.MIX_APP_NAME}`,
                    auth: undefined
                }
            },
            {
                name: 'courses.player',
                path: '/courses/play/:uuidCourses',
                component: () => import(/* webpackChunkName: "courses.player" */ '../pages/user/player/Index'),
                meta: {
                    title: `Courses Play | ${process.env.MIX_APP_NAME}`,
                    auth: undefined
                }
            },
            {
                name: 'courses.payment',
                path: '/courses/payment/:uuidCourses',
                component: () => import(/* webpackChunkName: "courses.payment" */ '../pages/user/payment/Index'),
                meta: {
                    title: `Courses Payment | ${process.env.MIX_APP_NAME}`,
                    auth: undefined
                }
            },
            {
                name: 'notfound404',
                path: '/404',
                component: () => import(/* webpackChunkName: "notfound404" */ '../pages/error/Index'),
                meta: {
                    title: `Halaman tidak ditemukan | ${process.env.MIX_APP_NAME}`,
                    auth: undefined
                }
            }
        ]
    }
];

export default routesUser