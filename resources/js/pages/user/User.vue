<template>
	<div>
		<div class="main-user">
			<nav class="navbar">
				<div class="navbar-brand text-white cursor-pointer" @click="$router.push({ path: '/' })">
					<span>{{ dataWeb.name }}</span>
				</div>
				<div class="btn-navbar" data-event="dropdown" data-target="#navbar-group">
					<i class="fa fa-bars"></i>
				</div>
				<div class="navbar-group" id="navbar-group">
					<ul class="navbar-items" style="display: flex;">
						<li class="navbar-item"><a href="javascript:void(0)">Menu</a></li>
						<li class="navbar-item"><a href="javascript:void(0)">Menu</a></li>
						<li class="navbar-item"><a href="javascript:void(0)">Menu</a></li>
						<li v-if="!$auth.check()" class="navbar-item special-login btn-modal" data-event="modal" data-target="#modal-login" data-modal="true"><a href="javascript:void(0)">Login</a></li>
						<li v-if="$auth.check()" class="navbar-item special-profile" @click="((!$route.path.includes('profile'))?$router.push({ path: '/profile' }):'')"><a href="javascript:void(0)">{{ $auth.user().name }}</a></li>
					</ul>
				</div>
			</nav>
			<router-view></router-view>
			<div class="page-footer">
				<div class="row">
					<div class="col-md-4 col-sm-4 col-12 footer-about">
						<div class="footer-brand">{{ dataWeb.name }}</div>
						<div class="footer-about-text">
							{{ dataWeb.description }}
						</div>
					</div>
					<div class="col-md-3 col-sm-4 col-6 footer-fiture">
						<div class="footer-head">INFORMATION</div>
						<div class="footer-items">
							<div class="footer-item">Fitures</div>
							<div class="footer-item">Store</div>
							<div class="footer-item">Careers</div>
							<div class="footer-item">Disclaimer</div>
							<div class="footer-item">Terms & Conditions</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-4 col-6 footer-contact">
						<div class="footer-head">CONTACT</div>
						<div class="footer-items">
							<div class="footer-item">Contact Support</div>
							<div class="footer-item">Feedback</div>
							<div class="footer-item">Faq</div>
						</div>
					</div>
					<div class="col-md-2 col-sm-12 col-12 footer-social">
						<div class="social-box social-instagram" @click="redirect(dataWeb.instagram)">
							<i class="fa fa-instagram"></i>
						</div>
						<div class="social-box social-facebook" @click="redirect(dataWeb.facebook)">
							<i class="fa fa-facebook"></i>
						</div>
						<div class="social-box social-twitter" @click="redirect(dataWeb.twitter)">
							<i class="fa fa-twitter"></i>
						</div>
						<div class="social-box social-telegram" @click="redirect(dataWeb.telegram)">
							<i class="fa fa-telegram"></i>
						</div>
						<div class="social-box social-github" @click="redirect(dataWeb.github)">
							<i class="fa fa-github"></i>
						</div>
						<div class="social-box social-youtube" @click="redirect(dataWeb.youtube)">
							<i class="fa fa-youtube"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="page-copyright">
				<div class="copyright-copy">
					Copyright © 2021 IThink • All rights reserved
				</div>
			</div>
		</div>

		<div class="modal" id="modal-login" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="login-modal">
						<Login v-if="showLogin"></Login>
						<Register v-if="!showLogin"></Register>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Login from '../auth/user/Login'
	import Register from '../auth/user/Register'
    export default {
    	components: {
            Login, Register
        },
    	data() {
	        return {
	        	dataWeb: {},
	        	profile: {},
	        	showLogin: true,
	        }
	    },
	    methods: {
	    	getWeb(){
				var vm = this;

				vm.$http({
	    			url: `${ vm.baseUrl }/webconfig/getdata`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.dataWeb = res.data.data;
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		});
			},

			redirect(url){
				var vm = this;

				window.open(url, '_blank');
			},
	    },
	    mounted(){
	    	var vm = this;

	    	$('.btn-modal').on('click', function(){
				Aropex.event(this, true);
			});

	    	vm.getWeb();
	    	if(localStorage.getItem("level_id") != null){
		    	vm.$http({
		    		url: `${ vm.apiUrl }/profile/getdata`,
		    		method: 'GET',
		    	}).then((res) => {
		    		vm.profile = res.data.data;
		    	}).catch((error) => {
		    		if(!vm.$route.path.includes('profile')){
						swal({
							title: "Lengkapi Profile?",
							text: "Oop, anda belum melengkapi profile!",
							icon: "warning",
							button: "Ok",
						});
		    		}
		    	});
		    };
	    },
    }
</script>