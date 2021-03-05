<template>
	<div>
		<form class="form" id="FormTambah" enctype="multipart/form-data" @submit.prevent="simpanData(formData.uuid)" autocomplete="off">
			<div class="form-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group" align="center">
							<div class="image-upload-box images" :style="`background-image: url(${formData.thumbnile}); background-size: cover; width: 350px; height: 200px`">
								<input type="file" id="image" accept="image/png, image/jpeg" class="form-control" name="thumbnile" required v-on:change="changeImage" placeholder="Name">
								<label for="image"><i class=" fa fa-plus"></i></label>
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label>Nama Kursus</label>
							<input type="text" class="form-control" name="name" required v-model="formData.name" placeholder="Name">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Nama Sub</label>
							<input type="text" class="form-control" name="subname" required v-model="formData.subname" placeholder="Name">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Color</label>
							<input type="text" class="form-control" name="color" required v-model="formData.color" placeholder="Color">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Type</label>
							<select class="form-control type-select" name="access" required v-model="formData.access" placeholder="Type Access">
								<option value="lifetime">Selamanya</option>
								<option value="annual">Tahunan</option>
								<option value="month">Bulanan</option>
								<option value="weekly">Mingguan</option>
							</select>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Harga</label>
							<input type="text" class="form-control" name="price" required oninput="this.value = this.value.rupiah()" v-model="formData.price" placeholder="Harga">
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
	        		name: '',
	        		subname: '',
	        		thumbnile: '',
	        		color: '#',
	        		description: '',
	        		price: '0',
	        		access: 'lifetime'
	        	}
	        }
	    },
	    methods: {
	    	changeImage($event){
	    		var vm = this;

	    		vm.formData.thumbnile = $event.target.files[0];
                if(vm.formData.thumbnile != undefined){
                    var oFReader = new FileReader();
                    oFReader.readAsDataURL(vm.formData.thumbnile);
                 
                    oFReader.onload = function(oFREvent) {
                        $('.images').css('background-image', 'url(' + oFREvent.target.result + ')');
                        $('.images').css('background-size', 'cover');
                    };
                }
	    	},

	    	getData(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/courses/${ uuid }/getdata`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.formData = res.data.data;

	    			// rupiah
	    			vm.formData.price = vm.formData.price.rupiah();
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		})
	    	},

	    	simpanData(uuid){
	    		var vm = this;

	    		var urls = `${ vm.apiUrl }/courses/create`;
	    		if(uuid != ''){
	    			urls = `${ vm.apiUrl }/courses/${ uuid }/update`;
	    		}

	    		Aropex.btnLoad('.btn-submit', true);
	    		let formData = new FormData($("#FormTambah")[0]);
                vm.axios.post(urls, formData, {headers: {'content-type': 'multipart/form-data'}}).then((res) => {
	    			vm.$parent.thisUuid = res.data.data.uuid;
	    			vm.$parent.thisId = res.data.data.id;
	    			if(!vm.$parent.showGroupMateri){
	    				vm.$parent.showGroupMateri = true;
	    			}
	    			Aropex.btnLoad('.btn-submit', false);
	    			toastr.success(res.data.message, 'Success');
	    		}).catch((err)=>{
	    			Aropex.btnLoad('.btn-submit', false);
	    			toastr.error(err.response.data.message, 'Error');
	    		});
	    	},
	    	select2(){
	    		var vm = this;

	    		$(".type-select").select2({
                    placeholder: "Pilih",
                    width: '100%'
                }).val(vm.formData.access).on('change', function(val) {
                    vm.formData.access = $(this).val();
                });
	    	}
	    },
	    mounted(){
	    	var vm = this;

	    	vm.select2();
	    	if(vm.isEdit){
	    		vm.getData(vm.uuid);
	    		vm.formData.uuid = vm.uuid;
	    		vm.$parent.showGroupMateri = true;
	    	}
	    }
	}
</script>