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
	        }
	    },
	    methods: {
	    	simpanData(uuid){
	    		var vm = this;

	    		var urls = `${ vm.apiUrl }/level/create`;
	    		if(uuid != ''){
	    			urls = `${ vm.apiUrl }/level/${ uuid }/update`;
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
	    			url: `${ vm.apiUrl }/level/${ uuid }/getdata`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.formData = res.data.data;
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		})
	    	},
	    },
	    mounted(){
	    	var vm = this;

	    	if(vm.isEdit){
	    		vm.formData.uuid = vm.uuid;
	    		vm.getData(vm.formData.uuid);
	    	}
	    }
    }
</script>