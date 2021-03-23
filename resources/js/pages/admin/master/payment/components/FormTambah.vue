<template>
	<div>
		<form class="form" id="FormTambah" enctype="multipart/form-data" @submit.prevent="simpanData(formData.uuid)" autocomplete="off">
			<div class="form-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label>Nama Payment</label>
							<input type="text" class="form-control" name="nm_method" required v-model="formData.nm_method" placeholder="Nama Payment">
						</div>
					</div>
				</div>
			</div>
			<hr>
			<div class="form-action" align="right">
				<button type="submit" form="FormTambah" class="btn btn-sm btn-success btn-submit">
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
	        		nm_method: '',
	        	},
	        }
	    },
	    methods: {
	    	simpanData(uuid){
	    		var vm = this;

	    		var urls = `${ vm.apiUrl }/payment/create`;
	    		if(uuid != ''){
	    			urls = `${ vm.apiUrl }/payment/${ uuid }/update`;
	    		}

	    		Aropex.btnLoad('.btn-submit', true);
	    		let formData = new FormData($("#FormTambah")[0]);
                vm.axios.post(urls, formData, {headers: {'content-type': 'multipart/form-data'}}).then((res) => {
	    			vm.$parent.setShowList();
	    			Aropex.btnLoad('.btn-submit', true);
	    			toastr.success(res.data.message, 'Success');
	    		}).catch((err)=>{
	    			Aropex.btnLoad('.btn-submit', true);
	    			toastr.error(err.response.data.message, 'Error');
	    		});
	    	},
	    	getData(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/payment/${ uuid }/getdata`,
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