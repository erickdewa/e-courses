<template>
	<div>
		<div class="login-header">
			<div class="title">Reset Password</div>
		</div>
		<div class="login-body">
			<form class="form" id="resetData" @submit.prevent="reset()" autocomplete="off">
				<div class="form-head">
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
							<input type="password" name="confirm" required v-model="formData.confirm" placeholder="Konfirmasi Password">
						</div>
					</div>
					<!-- <div class="forgot">Lupa Password?</div> -->
				</div>
				<div class="form-footer" align="right">
					<button type="button" class="btn btn-sm btn-success" @click="check()" v-if="!status">
						Cek
					</button>
					<button type="submit" form="resetData" class="btn btn-sm btn-success" v-if="status">
						Ubah Password
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
	        	status: false,
	        	formData: {
	        		email: '',
	        		password: '',
	        		confirm: '',
	        	},
	        }
	    },
	    methods: {
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

	    		if(vm.formData.password == vm.formData.confirm){
		    		vm.$http({
		    			url: `${ vm.baseUrl }/auth/reset`,
		    			data: vm.formData,
		    			method: 'POST',
		    		}).then((res)=>{
		    			vm.status = false;
		    			vm.$parent.setShowLogin();
		    		}).catch((error)=>{
		    			vm.status = true;
		    			toastr.success(res.data.message, 'Success');
		    		});
	    		}else{
	    			toastr.error('Konfirmasi Password tidak sama', 'Error');
	    		}
	    	},
	    },
	    mounted(){
	    	var vm = this;
	    },
    }
</script>