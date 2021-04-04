<template>
	<div>
		<div id="aro-sidebar" class="aro-sidebar">
			<div class="aro-sidebar--brand">
				<div class="aro-sidebar--brand_text">{{ dataWeb.name }}</div>
			</div>
			<div class="aro-sidebar--menu" id="scroll-sidebar">
				<ul class="aro-sidebar--menu_ul">
					<template v-for="menu in dataMenu">
						<li class="aro-sidebar--menu_li">
							<div class="aro-sidebar--menu_item" v-bind:class="activeMenu('parent', menu.name)">
								<router-link :to="menu.path">
									<a href="javascript:void(0)"><i class="fa" v-bind:class="menu.icon"></i><span class="menu-text">{{ menu.title }}</span></a>
									<i v-if="menu.haveChild" class="icon-submenu fa fa-angle-right"></i>
								</router-link>
							</div>
							<ul v-if="menu.haveChild" class="aro-sidebar--submenu_ul">
								<template v-for="submenu in menu.child">
									<li class="aro-sidebar--submenu_li">
										<div class="aro-sidebar--submenu_item">
											<router-link :to="submenu.path">
												<div class="item">
													<i class="fa fa-circle-thin"></i><span class="submenu-text">{{ submenu.title }}</span>
												</div>
											</router-link>
										</div>
									</li>
								</template>
							</ul>
						</li>
					</template>
				</ul>
			</div>
		</div>
		<div class="aro-main">
			<div class="aro-top-menu">
				<div class="top-menu">
					<div class="aro-top-menu_left">
						<div class="aro-menu" data-event="dropdown" data-target="#aro-sidebar"><i class="fa fa-bars"></i></div>
					</div>
					<div class="aro-top-menu_rigth">
						<div class="aro-info-top">
							<div class="top-icon">
								<i class="fa fa-search"></i>
							</div>
							<div class="top-icon">
								<i class="fa fa-snowflake-o"></i>
							</div>
							<div class="top-icon">
								<span>12</span>
								<i class="fa fa-commenting-o"></i>
							</div>
							<div class="top-icon">
								<span>1</span>
								<i class="fa fa-bell-o"></i>
							</div>
						</div>
						<div class="aro-profile-top dropdown" data-event="dropdown" data-target="#profile-top-dropdown">
							<img class="aro-profile-top-img" src="/assets/images/avatar-1.png">
						</div>
						<div id="profile-top-dropdown" class="aro-profile-top-dropdown">
							<div class="aro-profile-information">
								<div class="profile-dropdown-name">Erick Dewa Pranata</div>
							</div>
							<div class="aro-profile-button">
								<div class="btn btn-warning btn-sm" @click="logout()"><i class="fa fa-sign-out"></i> Logout</div>
								<div class="btn btn-info btn-sm"><i class="fa fa-user"></i> Profile</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="aro-content">
				<router-view></router-view>
			</div>
		</div>
		<div class="aro-footer">
			<div class="aro-footer_text">
				&copy; {{ dataWeb.name }}
			</div>
			<div class="aro-footer_social">
				<div class="aro-footer_social_btn"><i class="fa fa-facebook"></i></div>
				<div class="aro-footer_social_btn"><i class="fa fa-instagram"></i></div>
				<div class="aro-footer_social_btn"><i class="fa fa-twitter"></i></div>
				<div class="aro-footer_social_btn"><i class="fa fa-linkedin"></i></div>
				<div class="aro-footer_social_btn"><i class="fa fa-github"></i></div>
				<div class="aro-footer_social_btn"><i class="fa fa-feed"></i></div>
			</div>
		</div>
	</div>
</template>

<script>
	import postscribe from 'postscribe';
    export default {
    	data() {
	        return {
	        	dataWeb: {},
	        	dataMenu: [
	        		{ title: 'Dashboard', icon: 'fa-th-large', name: 'admin.dashboard', path: '/admin/dashboard', haveChild: false },
	        		{ title: 'Kursus', icon: 'fa-book', name: 'admin.kursus', path: '/admin/kursus', haveChild: false },
	        		{ title: 'Pembayaran', icon: 'fa-money', name: 'admin.pembayaran', path: '/admin/pembayaran', haveChild: false },
	        		{ title: 'Master', icon: 'fa-th-large', name: 'admin.master', path: '', haveChild: true, child: [
	        			{ title: 'Level', name: 'admin.master.level', path: '/admin/master/level' },
	        			{ title: 'Payment', name: 'admin.master.payment', path: '/admin/master/payment' },
	        			{ title: 'Pekerjaan', name: 'admin.master.pekerjaan', path: '/admin/master/pekerjaan' },
	        			{ title: 'Kategori', name: 'admin.master.kategori', path: '/admin/master/kategori' },
	        			{ title: 'Skill', name: 'admin.master.skill', path: '/admin/master/skill' },
	        			{ title: 'Tool', name: 'admin.master.tool', path: '/admin/master/tool' },
	        		]},
	        		{ title: 'Setting', icon: 'fa-th-large', name: 'admin.setting', path: '', haveChild: true, child: [
	        			{ title: 'Web Config', name: 'admin.setting.webconfig', path: '/admin/setting/webconfig' },
	        			{ title: 'User', name: 'admin.setting.user', path: '/admin/setting/user' },
	        		]},

	        	],
	        }
	    },
	    methods: {
	    	activeMenu(tipe, name){
	    		var vm = this;

		    	var menuName = vm.$route.name.split('.');
	    		if(tipe == 'submenu'){
	    			return ((menuName.length == 3) ? ((vm.$route.name == name) ? 'active' : '') : '');
	    		}else{
	    			var nameParent = `${ menuName[0] }.${ menuName[1] }`;
	    			return ((nameParent == name) ? 'active' : '' );
	    		}
	    	},
	    	logout(){
				var vm = this;

				swal({
                    title: "Anda akan logout?",
					text: "Apakah anda yakin untuk logout!",
					icon: "warning",
					confirmButtonText: "Yes",
                }).then((result) => {
                    if(result) {
                    	vm.$router.push({ path: '/redirect/logout'});
                    }
                });
			},

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
	    },
	    mounted(){
	    	var vm = this;
	    	
	    	vm.getWeb();
	    	setTimeout(function() {
				postscribe('#script', `<script src="${vm.defaultUrl}/js/index.js"><\/script>`);
			}, 1000);
	    }
    }
</script>