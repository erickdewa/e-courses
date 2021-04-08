<template>
	<div>
		<div class="main" style="background-image: url('../assets/images/bg/bg-01.jpg');">
			<div class="aro-login-one">
				<div class="aro-login-body">
					<div class="aro-one-title">
						<div class="title">Login</div>
						<div class="desc">Login in your account</div>
					</div>
					<form v-if="showLogin" id="form-login-one" class="aro-one-form" @submit.prevent="inLogin()" autocomplete="off">
						<div class="form-group">
							<div class="aro-input-group">
								<span class="aro-input-icon">
									<i class="fa fa-user"></i>
								</span>
								<input type="username" name="username" required v-model="formData.username" placeholder="Username">
							</div>
						</div>
						<div class="form-group">
							<div class="aro-input-group">
								<span class="aro-input-icon">
									<i class="fa fa-key"></i>
								</span>
								<input type="password" name="password" required min="8" v-model="formData.password" placeholder="Password">
							</div>
						</div>
						<div class="forgot">
							<div @click="setShowReset()">Lupa Password?</div>
						</div>
						<button type="submit" form="form-login-one" class="btn btn-success btn-md btn-login">
							<i class="fa fa-sign-in"></i> Masuk
						</button>
						<button type="button" @click="setShowRegister()" class="btn btn-info btn-md btn-register">
							<i class="fa fa-user"></i> Register
						</button>
					</form>

					<form v-if="showRegister" id="form-register" class="aro-one-form" @submit.prevent="register()" autocomplete="off">
						<div class="form-group">
							<div class="input-group">
								<span class="input-icon">
									<i class="fa fa-envelope"></i>
								</span>
								<input type="email" name="email" required v-model="formData.email" placeholder="Email">
							</div>
						</div>
						<div class="form-group">
							<div class="input-group">
								<span class="input-icon">
									<i class="fa fa-user"></i>
								</span>
								<input type="text" name="username" required v-model="formData.username" placeholder="Username">
							</div>
						</div>
						<div class="form-group">
							<div class="input-group">
								<span class="input-icon">
									<i class="fa fa-key"></i>
								</span>
								<input type="password" name="password" required v-model="formData.password" placeholder="Password">
							</div>
						</div>
						<div class="form-group">
							<div class="input-group">
								<span class="input-icon">
									<i class="fa fa-key"></i>
								</span>
								<input type="password" name="confirm_password" required v-model="formData.confirm_password" placeholder="Ulangi Password">
							</div>
						</div>
						<div class="forgot">
							<!-- <a href="">Lupa Passord ?</a> -->
						</div>
						<button type="submit" form="form-register" class="btn btn-info btn-md btn-register">
							<i class="fa fa-user"></i> Register
						</button>
					</form>

					<form v-if="showReset" id="form-reset" class="aro-one-form" @submit.prevent="reset()" autocomplete="off">
						<div class="form-group">
							<div class="input-group">
								<span class="input-icon">
									<i class="fa fa-envelope"></i>
								</span>
								<input type="email" name="email" required v-model="formData.email" v-bind:disabled="status" placeholder="Email">
							</div>
						</div>
						<div class="form-group" v-if="status">
							<div class="input-group">
								<span class="input-icon">
									<i class="fa fa-key"></i>
								</span>
								<input type="password" name="password" required v-model="formData.password" placeholder="Password">
							</div>
						</div>
						<div class="form-group" v-if="status">
							<div class="input-group">
								<span class="input-icon">
									<i class="fa fa-key"></i>
								</span>
								<input type="password" name="confirm_password" required v-model="formData.confirm_password" placeholder="Konfirmasi Password">
							</div>
						</div>
						<button type="button" class="btn btn-sm btn-success" @click="check()" v-if="!status">
							Cek
						</button>
						<button type="submit" form="form-reset" class="btn btn-sm btn-success" v-if="status">
							Ubah Password
						</button>
					</form>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
    	data() {
	        return {
	        	status: false,
	        	showLogin: true,
	        	showRegister: false,
	        	showReset: false,

	        	formData: {
	        		email: '',
					username: '',
					password: '',
					confirm_password: '',
					level_id: '1',
	        	},
	        }
	    },
	    methods: {
	    	setShowLogin(){
	    		var vm = this;

	    		vm.showLogin = true;
	    		vm.showRegister = false;
	    		vm.showReset = false;
	    	},
			setShowRegister(){
				var vm = this;

				vm.showLogin = false;
	    		vm.showRegister = true;
	    		vm.showReset = false;
			},
			setShowReset(){
				var vm = this;

				vm.showLogin = false;
	    		vm.showRegister = false;
	    		vm.showReset = true;
			},

			inLogin(){
				var vm = this;

				Aropex.btnLoad('.btn-login', true);
				vm.$auth.login({
                    data: vm.formData,
                    rememberMe: false,
                    fetchUser: true,
                }).then((res)=>{
                	localStorage.setItem("level_id", vm.formData.level_id);
                	Aropex.btnLoad('.btn-login', false);
                	toastr.success(res.data.message, 'Success');
                }).catch((err)=>{
                	Aropex.btnLoad('.btn-login', false);
                	toastr.error(err.response.data.message, 'Error');
                });
			},
			register(){
	    		var vm = this;

	    		Aropex.btnLoad('.btn-register', true);
				vm.$http({
	    			url: `${ vm.apiUrl }/register`,
	    			data: vm.formData,
	    			method: 'POST',
	    		}).then((res)=>{
	    			vm.inLogin();
                	Aropex.btnLoad('.btn-register', false);
                	toastr.success(res.data.message, 'Success');
                }).catch((err)=>{
                	Aropex.btnLoad('.btn-register', false);
                	toastr.error(err.response.data.message, 'Error');
                });
	    	},

	    	check: _.debounce(function(){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.baseUrl }/auth/cekemail`,
	    			data: vm.formData,
	    			method: 'POST',
	    		}).then((res)=>{
	    			vm.status = true;
	    		}).catch((error)=>{
	    			vm.status = false;
	    		});
	    	}, 1000),
	    	reset(){
	    		var vm = this;

	    		if(vm.formData.password == vm.formData.confirm_password){
		    		vm.$http({
		    			url: `${ vm.baseUrl }/auth/reset`,
		    			data: vm.formData,
		    			method: 'POST',
		    		}).then((res)=>{
		    			vm.status = false;
		    			vm.setShowLogin();
		    			vm.formData = {
			        		email: '',
							username: '',
							password: '',
							confirm_password: '',
							level_id: '1',
			        	};
		    		}).catch((error)=>{
		    			vm.status = true;
		    			toastr.success(res.data.message, 'Success');
		    		});
	    		}else{
	    			toastr.error('Konfirmasi Password tidak sama', 'Error');
	    		}
	    	},
	    }
    }
</script>