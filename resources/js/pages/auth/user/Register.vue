<template>
	<div>
		<div class="login-header">
			<div class="title">Daftar</div>
			<div class="subtitle">Daftar untuk mendapatkan akun baru</div>
		</div>
		<div class="login-body">
			<form class="form" id="form-login" @submit.prevent="login()" autocomplete="off">
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
							<input type="text" name="password" required v-model="formData.password" placeholder="Password">
						</div>
					</div>
					<div class="form-group">
						<div class="input-group">
							<span class="input-icon">
								<i class="fa fa-key"></i>
							</span>
							<input type="text" name="password" required v-model="formData.confirm_password" placeholder="Ulangi Password">
						</div>
					</div>
				</div>
				<div class="form-footer" align="right">
					<button type="submit" form="form-login" class="btn btn-md btn-success btn-user-login">
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