import VueRouter from 'vue-router'

const routesAdmin =  [
    {
        name: 'admin.login',
        path: '/admin/login',
        component: () => import(/* webpackChunkName: "admin.login" */ '../pages/auth/admin/Login'),
        meta: {
            title: `Admin Login | ${process.env.MIX_APP_NAME}`,
            auth: false
        },
    },
    {
        name: 'admin',
        path: '/admin',
        component: () => import(/* webpackChunkName: "admin" */ '../pages/admin/Admin'),
        meta: {
            title: `Admin | ${process.env.MIX_APP_NAME}`,
            auth: true
        },
        children: [
		    {
		        name: 'admin.dashboard',
		        path: '/admin/dashboard',
		        component: () => import(/* webpackChunkName: "admin.dashboard" */ '../pages/admin/dashboard/Index'),
		        meta: {
		            title: `Dashboard | ${process.env.MIX_APP_NAME}`,
		            auth: true
		        }
		    },
		    {
		        name: 'admin.kursus',
		        path: '/admin/kursus',
		        component: () => import(/* webpackChunkName: "admin.dashboard" */ '../pages/admin/kursus/Index'),
		        meta: {
		            title: `Kursus | ${process.env.MIX_APP_NAME}`,
		            auth: true
		        }
		    },
		    {
		        name: 'admin.master',
		        path: '/admin/master',
		        component: () => import(/* webpackChunkName: "admin.master" */ '../pages/admin/master/Master'),
		        meta: {
		            title: `Master | ${process.env.MIX_APP_NAME}`,
		            auth: true
		        },
		        children: [
		        	{
				        name: 'admin.master.kategori',
				        path: '/admin/master/kategori',
				        component: () => import(/* webpackChunkName: "admin.master.kategori" */ '../pages/admin/master/kategori/Index'),
				        meta: {
				            title: `Kategori | ${process.env.MIX_APP_NAME}`,
				            auth: true
				        }
				    },
				    {
				        name: 'admin.master.level',
				        path: '/admin/master/level',
				        component: () => import(/* webpackChunkName: "admin.master.level" */ '../pages/admin/master/level/Index'),
				        meta: {
				            title: `Level | ${process.env.MIX_APP_NAME}`,
				            auth: true
				        }
				    },
				    {
				        name: 'admin.master.skill',
				        path: '/admin/master/skill',
				        component: () => import(/* webpackChunkName: "admin.master.skill" */ '../pages/admin/master/skill/Index'),
				        meta: {
				            title: `Skill | ${process.env.MIX_APP_NAME}`,
				            auth: true
				        }
				    },
				    {
				        name: 'admin.master.tool',
				        path: '/admin/master/tool',
				        component: () => import(/* webpackChunkName: "admin.master.tool" */ '../pages/admin/master/tool/Index'),
				        meta: {
				            title: `Tool | ${process.env.MIX_APP_NAME}`,
				            auth: true
				        }
				    },
		        ],
		    },
		    {
		        name: 'admin.setting',
		        path: '/admin/setting',
		        component: () => import(/* webpackChunkName: "admin.setting" */ '../pages/admin/setting/Index'),
		        meta: {
		            title: `Setting | ${process.env.MIX_APP_NAME}`,
		            auth: true
		        },
		        children: [
		        	{
				        name: 'admin.setting.webconfig',
				        path: '/admin/setting/webconfig',
				        component: () => import(/* webpackChunkName: "admin.setting.webconfig" */ '../pages/admin/setting/webconfig/Index'),
				        meta: {
				            title: `Web Config | ${process.env.MIX_APP_NAME}`,
				            auth: true
				        }
				    },
				    {
				        name: 'admin.setting.user',
				        path: '/admin/setting/user',
				        component: () => import(/* webpackChunkName: "admin.setting.user" */ '../pages/admin/setting/user/Index'),
				        meta: {
				            title: `User | ${process.env.MIX_APP_NAME}`,
				            auth: true
				        }
				    },
		        ],
		    },
		],
	},
];

export default routesAdmin