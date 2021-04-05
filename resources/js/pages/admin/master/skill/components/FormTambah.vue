<template>
	<div>
		<form class="form" id="FormTambah" enctype="multipart/form-data" @submit.prevent="simpanData(formData.uuid)" autocomplete="off">
			<div class="form-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group" align="center">
							<div class="image-upload-box images" :style="`background-image: url(${formData.image}); background-size: cover; background-position: center center;`">
								<input type="file" id="image" accept="image/png, image/jpeg" class="form-control" name="image" v-on:change="changeImage" placeholder="Name">
								<label for="image"><i class=" fa fa-plus"></i></label>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Name</label>
							<input type="text" class="form-control" name="nm_skill" required v-model="formData.nm_skill" placeholder="Name">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Link</label>
							<input type="text" class="form-control" name="link" required v-model="formData.link" placeholder="Link">
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label>Deskripsi</label>
							<textarea class="form-control" rows="3" name="description" required v-model="formData.description" placeholder="Deskripsi"></textarea>
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
	        		nm_skill: '',
	        		description: '',
	        		image: '',
	        		link: '',
	        	},
	        }
	    },
	    methods: {
	    	changeImage($event){
	    		var vm = this;

	    		vm.formData.image = $event.target.files[0];
                if(typeof vm.formData.image != 'undefined'){
                    var oFReader = new FileReader();
                    oFReader.readAsDataURL(vm.formData.image);
                 
                    oFReader.onload = function(oFREvent) {
                        $('.images').css('background-image', 'url(' + oFREvent.target.result + ')');
                        $('.images').css({'background-size': 'cover', 'background-position': 'center center'});
                    };
                }
	    	},
	    	simpanData(uuid){
	    		var vm = this;

	    		var urls = `${ vm.apiUrl }/skill/create`;
	    		if(uuid != ''){
	    			urls = `${ vm.apiUrl }/skill/${ uuid }/update`;
	    		}

	    		Aropex.btnLoad('.btn-submit', true);
	    		let formData = new FormData($("#FormTambah")[0]);
                vm.axios.post(urls, formData, {headers: {'content-type': 'multipart/form-data'}}).then((res) => {
	    			vm.$parent.setShowList();
	    			Aropex.btnLoad('.btn-submit', false);
	    			toastr.success(res.data.message, 'Success');
	    		}).catch((err)=>{
	    			Aropex.btnLoad('.btn-submit', false);
	    			toastr.error(err.response.data.message, 'Error');
	    		});
	    	},
	    	getData(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/skill/${ uuid }/getdata`,
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