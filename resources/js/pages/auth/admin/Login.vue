<template>
	<div>
		<div class="main" style="background-image: url('../assets/images/bg/bg-01.jpg');">
			<div class="aro-login-one">
				<div class="aro-login-body">
					<div class="aro-one-title">
						<div class="title">Login</div>
						<div class="desc">Login in your account</div>
					</div>
					<form id="form-login-one" class="aro-one-form" @submit.prevent="inLogin()" autocomplete="off">
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
							<a href="">Lupa Passord ?</a>
						</div>
						<button type="submit" form="form-login-one" class="btn btn-info btn-md btn-login">MASUK</button>
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
	        	formData: {
	        		username: '',
	        		password: '',
	        	},
	        }
	    },
	    methods: {
			inLogin(){
				var vm = this;

				vm.$auth.login({
                    data: vm.formData,
                    rememberMe: false,
                    fetchUser: true,
                }).then((res)=>{
                	console.log(res.data.message);
                	toastr.success(res.data.message, 'Success');
                }).catch((err)=>{
                	toastr.error(err.response.data.message, 'Error');
                });
			}
	    }
    }
</script>