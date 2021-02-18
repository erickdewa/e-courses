<template>
	<div>
		<form class="form" id="formUser" @submit.prevent="simpanData(formData.uuid)" autocomplete="off">
			<div class="form-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label>Name</label>
							<input type="text" class="form-control" name="name" required v-model="formData.name" placeholder="Name">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Username</label>
							<input type="text" class="form-control" name="username" required v-model="formData.username" placeholder="Username">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Email</label>
							<input type="email" class="form-control" name="email" required v-model="formData.email" placeholder="Email">
						</div>
					</div>
					<div class="col-md-12">
						<label>Level</label>
						<div class="form-group">
							<select class="form-control" name="level_id" required v-model="formData.level_id" placeholder="Pilih">
								<option v-for="data in dataLevel" :value="data.id">{{ data.name }}</option>
							</select>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label>Password</label>
							<input type="password" class="form-control" name="password" required min="8" v-model="formData.password" placeholder="Password">
						</div>
					</div>
				</div>
			</div>
			<hr>
			<div class="form-action" align="right">
				<button type="submit" form="formUser" class="btn btn-sm btn-success btn-submit">
					<i class="fa fa-save"></i> Simpan
				</button>
			</div>
		</form>
	</div>
</template>

<script>
    export default {
		props: ['uuid', 'isEdit'],
    	data() {
	        return {
	        	formData: {
	        		uuid: '',
	        		name: '',
	        		username: '',
	        		email: '',
	        		level_id: '',
	        		password: '',
	        	},

	        	dataLevel: [],
	        }
	    },
	    methods: {
	    	simpanData(uuid){
	    		var vm = this;

	    		var urls = `${ vm.apiUrl }/user/create`;
	    		if(uuid != ''){
	    			urls = `${ vm.apiUrl }/user/${ uuid }/update`;
	    		}

	    		$('.btn-submit').prop('disabled', true);
	    		vm.$http({
	    			url: urls,
	    			data: vm.formData,
	    			method: 'POST',
	    		}).then((res)=>{
	    			vm.$parent.setShowList();
	    			$('.btn-submit').prop('disabled', false);
	    			toastr.success(res.data.message, 'Success');
	    		}).catch((err)=>{
	    			$('.btn-submit').prop('disabled', false);
	    			toastr.error(err.response.data.message, 'Error');
	    		});
	    	},
	    	getData(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/user/${ uuid }/getdata`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.formData = res.data.data;
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		})
	    	},
	    	select2(){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/level/getdatas`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.dataLevel = res.data.data;
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		})
	    	},
	    },
	    mounted(){
	    	var vm = this;

	    	vm.select2();
	    	if(vm.isEdit){
	    		vm.formData.uuid = vm.uuid;
	    		vm.getData(vm.formData.uuid);
	    	}
	    }
    }
</script>