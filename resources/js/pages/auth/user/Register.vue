<template>
	<div>
		<div class="login-header">
			<div class="title">Daftar</div>
			<div class="subtitle">Daftar untuk mendapatkan akun baru</div>
		</div>
		<div class="login-body">
			<form class="form" id="form-login" @submit.prevent="register()" autocomplete="off">
				<div class="form-head">
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
				</div>
				<div class="form-footer" align="right">
					<button type="submit" form="form-login" class="btn btn-sm btn-success btn-user-register">
						<i class="fa fa-user-plus"></i> Daftar
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
	        		email: '',
					username: '',
					password: '',
					confirm_password: '',
					level_id: '2',
	        	},
	        }
	    },
	    methods: {
	    	register(){
	    		var vm = this;

	    		Aropex.btnLoad('.btn-user-register', true);
				vm.$auth.register({
                    data: vm.formData,
                }).then((res)=>{
                	vm.login();
                	$('#modal-login').modal('hide');
                	Aropex.btnLoad('.btn-user-register', false);
                	toastr.success(res.data.message, 'Success');
                }).catch((err)=>{
                	Aropex.btnLoad('.btn-user-register', false);
                	toastr.error(err.response.data.message, 'Error');
                });
	    	},

	    	login(){
	    		var vm = this;

	    		vm.$auth.login({
                    data: vm.formData,
                    rememberMe: false,
                    fetchUser: true,
                }).then((res)=>{
                	localStorage.setItem("level_id", vm.formData.level_id);
                }).catch((err)=>{
                	// error
                });
	    	},
	    },
	    mounted(){
	    	var vm = this;
	    },
    }
</script>