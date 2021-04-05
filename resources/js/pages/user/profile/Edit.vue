<template>
	<div>
		<form id="FormTambah" class="form" @submit.prevent="simpanData()" autocomplete="off">
			<div class="profile-page-edit">
				<div class="form-group" align="center">
					<div class="image-upload-box images" :style="`background-image: url(${formData.image}); background-size: cover; width: 170px; height: 170px`">
						<input type="file" id="image" accept="image/png, image/jpeg" class="form-control" name="image" v-on:change="changeImage" placeholder="Name">
						<label for="image"><i class=" fa fa-plus"></i></label>
					</div>
				</div>
			</div>
			<div class="profile-edit">
				<div class="profile-edit-title">
					<span>Edit Profile Kamu :</span>
				</div>
				<div class="info-profile">
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label>Nama Lengkap</label>
								<input type="text" class="form-control" name="nm_full" v-model="formData.nm_full" placeholder="Nama Lengkap">
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>Tanggal Lahir</label>
								<input type="text" class="form-control" name="date_bird" v-model="formData.date_bird" placeholder="Tanggal Lahir">
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>Alamat</label>
								<input type="text" class="form-control" name="address" v-model="formData.address" placeholder="Surabaya, Indonesia">
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>Pekerjaan</label>
								<select class="form-control profession-select" name="profession" v-model="formData.profession" placeholder="Pekerjaan">
									<option v-for="pekerjaan in dataPekerjaan" :value="pekerjaan.nm_pekerjaan">{{ pekerjaan.nm_pekerjaan }}</option>
								</select>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>Bio</label>
								<textarea rows="3" class="form-control" name="bio" v-model="formData.bio" placeholder="Bio"></textarea>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>Deskripsi</label>
								<textarea rows="3" class="form-control" name="description" v-model="formData.description" placeholder="Deskripsi"></textarea>
							</div>
						</div>
					</div>
				</div>
				<div class="profile-edit-title">
					<span>Sosial Media Kamu :</span>
				</div>
				<div class="info-profile">
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label>Facebook</label>
								<input type="text" class="form-control" name="facebook" :title="formData.facebook" v-model="formData.facebook" placeholder="Facebook">
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>Instagram</label>
								<input type="text" class="form-control" name="instagram" :title="formData.instagram" v-model="formData.instagram" placeholder="Instagram">
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>Twitter</label>
								<input type="text" class="form-control" name="twitter" :title="formData.twitter" v-model="formData.twitter" placeholder="Twitter">
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>Github</label>
								<input type="text" class="form-control" name="github" :title="formData.github" v-model="formData.github" placeholder="Github">
							</div>
						</div>
					</div>
					<div class="form-footer">
						<div></div>
						<div>
							<button type="button" class="btn btn-sm btn-info" @click="$router.push({ path: '/profile' })">
								<i class="fa fa-reply-all"></i> Kembali
							</button>
							<button type="submit" form="FormTambah" class="btn btn-sm btn-success btn-submit">
								<i class="fa fa-save"></i> Simpan
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
    export default {
    	data() {
	        return {
	        	isEdit: true,
	        	formData: {
	        		image: {},
					nm_full: '',
					date_bird: '',
					address: '',
					profession: '',
					bio: '',
					description: '',
					facebook: 'https://facebook.com/',
					instagram: 'https://instagram.com/',
					twitter: 'https://twitter.com/',
					github: 'https://github.com/',
	        	},

	        	dataPekerjaan: [],
	        }
	    },
	    methods: {
	    	changeImage($event){
	    		var vm = this;

	    		vm.formData.image = $event.target.files[0];
                if(vm.formData.image != undefined){
                    var oFReader = new FileReader();
                    oFReader.readAsDataURL(vm.formData.image);
                 
                    oFReader.onload = function(oFREvent) {
                        $('.images').css('background-image', 'url(' + oFREvent.target.result + ')');
                        $('.images').css('background-size', 'cover');
                    };
                }
	    	},

	    	simpanData(){
	    		var vm = this;

	    		var urls = `${ vm.apiUrl }/profile/create`;
	    		if(vm.isEdit){
	    			urls = `${ vm.apiUrl }/profile/${ vm.formData.uuid }/update`;
	    		}

	    		Aropex.btnLoad('.btn-submit', true);
	    		let formData = new FormData($("#FormTambah")[0]);
                vm.axios.post(urls, formData, {headers: {'content-type': 'multipart/form-data'}}).then((res) => {
                	vm.$router.push({ path: '/profile' });
	    			Aropex.btnLoad('.btn-submit', false);
	    			vm.$parent.getProfile();
	    			toastr.success(res.data.message, 'Success');
	    		}).catch((err)=>{
	    			Aropex.btnLoad('.btn-submit', false);
	    			toastr.error(err.response.data.message, 'Error');
	    		});
	    	},

	    	getProfile(){
	    		var vm = this;

	    		vm.$http({
		    		url: `${ vm.apiUrl }/profile/getdata`,
		    		method: 'GET',
		    	}).then((res) => {
		    		vm.isEdit = true;
		    		vm.formData = res.data.data;
		    	}).catch((error) => {
		    		vm.isEdit = false;
		    	});
	    	},

	    	select2(){
	    		var vm = this;

	    		vm.$http({
		    		url: `${ vm.apiUrl }/pekerjaan/getdatas`,
		    		method: 'GET',
		    	}).then((res) => {
		    		vm.dataPekerjaan = res.data.data;

		    		$(".profession-select").select2({
	                    placeholder: "Pilih",
	                    width: '100%'
	                }).val(vm.formData.profession).on('change', function(val) {
	                    vm.formData.profession = $(this).val();
	                });
		    	}).catch((error) => {

		    	});
	    	}
	    },
	    mounted(){
	    	var vm = this;

	    	vm.getProfile();
	    	vm.select2();
	    },
    }
</script>