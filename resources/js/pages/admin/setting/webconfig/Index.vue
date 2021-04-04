<template>
	<div>
		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint">
				<div class="aro-restraint_title">
					<span>Web Config</span>
					<div class="button-table">
					</div>
				</div>
				<div class="aro-restraint_body">
					<form class="form" id="FormTambah" @submit.prevent="simpanData()" autocomplete="off">
						<div class="form-body">
							<div class="row">
								<div class="col-md-12">
									<div class="form-group" align="center">
										<div class="image-upload-box images" :style="`background-image: url(${formData.ilustration}); width: 300px; height: 200px; background-size: cover;`">
											<input type="file" id="ilustration" accept="image/png, image/jpeg" class="form-control" name="ilustration" v-on:change="changeImage" placeholder="Name">
											<label for="ilustration"><i class=" fa fa-plus"></i></label>
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<label>Name</label>
										<input type="text" class="form-control" name="name" required v-model="formData.name" placeholder="Name">
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<label>Description</label>
										<input type="text" class="form-control" name="description" required v-model="formData.description" placeholder="Description">
									</div>
								</div>
								<hr>
								<div class="col-md-6">
									<div class="form-group">
										<label>Facebook</label>
										<input type="text" class="form-control" name="facebook" required v-model="formData.facebook" placeholder="Facebook">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Instagram</label>
										<input type="text" class="form-control" name="instagram" required v-model="formData.instagram" placeholder="Instagram">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Twitter</label>
										<input type="text" class="form-control" name="twitter" required v-model="formData.twitter" placeholder="Twitter">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Github</label>
										<input type="text" class="form-control" name="github" required v-model="formData.github" placeholder="Github">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Telegram</label>
										<input type="text" class="form-control" name="telegram" required v-model="formData.telegram" placeholder="Telegram">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Youtube</label>
										<input type="text" class="form-control" name="youtube" required v-model="formData.youtube" placeholder="Youtube">
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
			</div>
		</transition>
	</div>
</template>

<script>
    export default {
    	data() {
	        return {
	        	formData: {
	        		uuid: '',
	        	},
	        }
	    },
	    methods: {
	    	changeImage($event){
	    		var vm = this;

	    		vm.formData.ilustration = $event.target.files[0];
                if(typeof vm.formData.ilustration != 'undefined'){
                    var oFReader = new FileReader();
                    oFReader.readAsDataURL(vm.formData.ilustration);

                    oFReader.onload = function(oFREvent) {
                        $('.images').css('background-image', 'url(' + oFREvent.target.result + ')');
                    };
                }
	    	},

	    	simpanData(){
	    		var vm = this;

	    		var urls = `${ vm.apiUrl }/webconfig/${ vm.formData.uuid }/update`;

	    		$('.btn-submit').prop('disabled', true);
	    		let formData = new FormData($("#FormTambah")[0]);
                vm.axios.post(urls, formData, {headers: {'content-type': 'multipart/form-data'}}).then((res) => {
	    			$('.btn-submit').prop('disabled', false);
	    			toastr.success(res.data.message, 'Success');
	    		}).catch((err)=>{
	    			$('.btn-submit').prop('disabled', false);
	    			toastr.error(err.response.data.message, 'Error');
	    		});
	    	},
	    	getData(){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/webconfig/getdata`,
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

	    	vm.getData();
	    }
    }
</script>