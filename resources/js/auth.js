import bearer from '@websanova/vue-auth/drivers/auth/bearer'
import axios from '@websanova/vue-auth/drivers/http/axios.1.x'
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x'
// Auth base configuration some of this options
// can be override in method calls
const config = {
	auth: bearer,
	http: axios,
	router: router,
	tokenDefaultName: 'authToken',
	tokenStore: ['localStorage'],
	
	registerData: {
		url: 'v1/register',
		method: 'POST',
		redirect: '/login'
	},
	
	loginData: {
		url: 'v1/login',
		method: 'POST',
		redirect: '/superuser/dashboard',
		fetchUser: true
	},

	logoutData: {
		url: 'v1/auth/logout',
		method: 'POST',
		redirect: '/login',
		makeRequest: true
	},

	fetchData: {
		url: 'v1/auth/user',
		method: 'GET',
		enabled: true
	},

	refreshData: {
		url: 'v1/auth/refresh',
		method: 'GET',
		enabled: true,
		interval: 30
	}
}
export default config