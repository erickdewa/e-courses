require('./bootstrap');

window.Vue = require('vue');

import CssBase from "css-loader/lib/css-base";
import AddStyles from "style-loader/lib/addStyles";

import Vue from 'vue'

import VueRouter from 'vue-router'
import router from './router/main'

window.toastr = require('toastr');

Vue.use(VueRouter)
Vue.router = router;

import Skeleton from 'vue-loading-skeleton';

Vue.use(Skeleton)

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

Number.prototype.rupiah = function(is_float=false) {
    var str = this.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
    if(is_float) {
        var rp = this.toString().split('.');
        var str = rp[0].toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return str+','+rp[1]
    }

    return str;
}

String.prototype.rupiah = function(is_float=false) {
    var str = this.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    if(is_float) {
        var rp = this.toString().split('.');
        var str = rp[0].toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return str+','+rp[1]
    }

    return str;
}

// Global Variables
Vue.mixin({
	data: function() {
		return {
			get apiUrl() {
        		return `${process.env.MIX_APP_URL}/api/v1/auth`;
    		},
    		get baseUrl() {
        		return `${process.env.MIX_APP_URL}/api/v1`;
    		},
            get defaultUrl() {
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