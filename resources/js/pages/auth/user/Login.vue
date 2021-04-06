<template>
	<div>
		<div class="login-header">
			<div class="title">Login</div>
			<div class="subtitle">Masuk untuk melanjutkan belajar</div>
		</div>
		<div class="login-body">
			<form class="form" id="form-login" @submit.prevent="login()" autocomplete="off">
				<div class="form-head">
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
					<!-- <div class="forgot">Lupa Password?</div> -->
				</div>
				<div class="form-footer" align="right">
					<button type="button" class="btn btn-sm btn-info" @click="$parent.showLogin = false">
						<i class="fa fa-user-plus"></i> Daftar
					</button>
					<button type="submit" form="form-login" class="btn btn-sm btn-success btn-user-login">
						<i class="fa fa-sign-in"></i> Masuk Akun Saya
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
    export default {
    	data() {
	        return {
	        	formData: {
	        		username: '',
	        		password: '',
	        		level_id: '2',
	        	},
	        }
	    },
	    methods: {
	    	login(){
	    		var vm = this;

	    		Aropex.btnLoad('.btn-user-login', true);
				vm.$auth.login({
                    data: vm.formData,
                    rememberMe: false,
                    fetchUser: true,
                }).then((res)=>{
                	$('#modal-login').modal('hide');
                	localStorage.setItem("level_id", vm.formData.level_id);
                	Aropex.btnLoad('.btn-user-login', false);
                	toastr.success(res.data.message, 'Success');
                }).catch((err)=>{
                	Aropex.btnLoad('.btn-user-login', false);
                	toastr.error(err.response.data.message, 'Error');
                });
	    	},
	    },
	    mounted(){
	    	var vm = this;
	    },
    }
</script>