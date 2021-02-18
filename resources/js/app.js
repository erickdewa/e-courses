require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'

import VueRouter from 'vue-router'
import router from './router/main'

window.toastr = require('toastr');

Vue.use(VueRouter)
Vue.router = router;

import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios)

axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`

import VueAuth from '@websanova/vue-auth'
import Auth from './auth'

Vue.use(VueAuth, Auth)

import App from './pages/App'

import AdminTable from './pages/components/Table'

// Global Components
Vue.component('AdminTable', AdminTable)

// Global Variables
Vue.mixin({
	data: function() {
		return {
			get apiUrl() {
        		return `${process.env.MIX_APP_URL}/api/v1/auth`;
    		},
    		get baseUrl() {
        		return `${process.env.MIX_APP_URL}`;
    		},
            loadJs: function(file){
                var htmlTag = document.createElement("script");
                $('head').append($(htmlTag).prop("src", file));
            },
		}
	}
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});