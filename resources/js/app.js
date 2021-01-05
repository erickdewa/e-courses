require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'

import VueRouter from 'vue-router'
import router from './router/main'

Vue.router = router;
Vue.use(VueRouter)

import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios)

axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`

import VueAuth from '@websanova/vue-auth'
import Auth from './auth'

Vue.use(VueAuth, Auth)

import App from './pages/App'

// Global variable
Vue.mixin({
	data: function() {
		return {
			get apiUrl() {
        		return `${process.env.MIX_APP_URL}/api/v1`;
    		},
    		get baseUrl() {
        		return `${process.env.MIX_APP_URL}`;
    		},
		}
	}
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});