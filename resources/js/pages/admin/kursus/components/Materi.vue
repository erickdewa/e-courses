<template>
	<div>
		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint" v-if="showForm">
				<div class="aro-restraint_title">
					<span>{{ title }}</span>
					<div class="button-table"></div>
				</div>
				<div class="aro-restraint_body">
					<transition v-if="showTambah" enter-active-class="animated fadeIn">
						<form class="form" id="FormTambah" enctype="multipart/form-data" @submit.prevent="simpanData(formData.uuid)" autocomplete="off">
							<div class="form-body">
								<div class="row">
									<div class="col-md-12">
										<div class="form-group" align="center">
											<div class="image-upload-box images" :style="`background-image: url(${formData.thumbnail}); background-size: contain; background-position: center center; width: 350px; height: 200px`">
												<input type="file" id="image" accept="image/png, image/jpeg" class="form-control" name="thumbnail" v-on:change="changeImage" placeholder="Name">
												<label for="image"><i class=" fa fa-plus"></i></label>
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Nama Materi</label>
											<input type="text" class="form-control" name="nm_materi" required v-model="formData.nm_materi" placeholder="Name">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Link Video</label>
											<div class="input-group d-flex" style="padding: 2px">
												<input type="text" class="form-control" name="video" required @input="showPreviewVideo()" v-model="formData.video" placeholder="Link Video">
												<div class="input-group-append">
													<span class="input-group-text" id="preview">
														<i class="fa fa-link"></i>
													</span>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label>Deskripsi</label>
											<textarea class="form-control" rows="3" name="description" v-model="formData.description" placeholder="Deskripsi"></textarea>
										</div>
									</div>
								</div>
							</div>
							<hr>
							<div class="form-action" align="right">
								<button type="button" class="btn btn-info btn-sm" @click.prevent="setShowList()">
									<i class="fa fa-times"></i> Tutup
								</button>
								<button type="submit" form="FormTambah" class="btn btn-sm btn-success btn-submit">
									<i class="fa fa-save"></i> Simpan
								</button>
							</div>
						</form>
					</transition>
				</div>
			</div>
		</transition>

		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint" v-if="showList">
				<div class="aro-restraint_title">
					<span>Materi</span>
					<div class="button-table">
						<button v-if="!showForm" type="button" class="btn btn-success btn-sm" @click.prevent="setShowForm()">
							<i class="fa fa-plus"></i> Tambah
						</button>
						<button v-if="!showForm" type="button" class="btn btn-info btn-sm" @click.prevent="setShowback()">
							<i class="fa fa-reply-all"></i> Kembali
						</button>
					</div>
				</div>
				<div class="aro-restraint_body">
					<AdminTable v-if="showList" id="tableMateri" ref="tableMateri" classx="table table-rowed" :urls="`/materi/${materiGroupUuid}/index`" :callbacks="callback()" :columns="columns"></AdminTable>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
    export default {
    	props: ['materiGroupUuid', 'materiGroupId'],
    	data() {
	        return {
	        	showList: true,
	        	showForm: false,

	        	title: 'Tambah Materi',
	        	showTambah: true,

	        	columns: [
	        		{ name: 'Nama Materi', data: 'nm_materi' },
	        		{ name: 'Status', data: 'is_preview' },
	        		{ name: 'Aksi', data: 'action' },
	        	],

	        	formData: {
	        		uuid: '',
	        		video: '',
	        		nm_materi: '',
					description: '-',
	        	},
	        }
	    },
	    methods: {
	    	setShowback(){
	    		var vm = this;

	    		vm.$parent.setShowForm();
	    		vm.$parent.showGroupMateri = true;
	    	},
	    	setShowList(){
	    		var vm = this;

	    		vm.showList = true;
	    		vm.showForm = false;

	    		setTimeout(function(){
	    			vm.$refs.tableMateri.reload();
	    		}, 500);
	    	},
	    	setShowForm(){
	    		var vm = this;

	    		vm.showForm = true;
	    		vm.setShowTambah();
	    	},
	    	setShowTambah(){
	    		var vm = this;

	    		vm.title = 'Tambah Materi';
	    		vm.showTambah = true;

	        	vm.formData = {
	        		uuid: '',
	        		video: '',
	        		nm_materi: '',
					description: '-',
	        	};
	    	},

	    	callback(){
	    		var vm = this;

	    		setTimeout(function(){
		    		$('#tableMateri').on('click', '.edit', function(e){
	                    var uuid = $(this).data('uuid');
	                    vm.showForm = false;
	                    vm.getData(uuid);
	                    vm.setShowForm();
	                });

	                $('#tableMateri').on('click', '.hapus', function(e){
	                    var uuid = $(this).data('uuid');
	                    vm.deleteData(uuid);
	                });

	                $('#tableMateri').on('click', '.switch', function(e){
	                    var uuid = $(this).data('uuid');
	                    var is_preview = $(this).data('is_preview');
	                    vm.changeStatus(uuid, ((is_preview=='Y')?'N':'Y'));
	                });
	    		}, 200);
	    	},

	    	showPreviewVideo: _.debounce(function(){
	    		var vm = this;

	    		Aropex.btnLoad('#preview', true);
	    		var url = vm.formData.video;
	    		if(url.length != 11){
	    			$('#preview').children('i').css({'color': '#FD397A'});
	    		}else{
	    			$('#preview').children('i').css({'color': '#0ABB87'});
	    		}
	    		setTimeout(function(){
	    			Aropex.btnLoad('#preview', false);
	    		}, 1000);
	    	}, 500),

	    	getData: _.debounce(function(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/materi/${ uuid }/getdata`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.formData = res.data.data;
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		})
	    	}, 1000),

	    	changeImage($event){
	    		var vm = this;

	    		vm.formData.thumbnail = $event.target.files[0];
                if(vm.formData.thumbnail != undefined){
                    var oFReader = new FileReader();
                    oFReader.readAsDataURL(vm.formData.thumbnail);
                 
                    oFReader.onload = function(oFREvent) {
                        $('.images').css('background-image', 'url(' + oFREvent.target.result + ')');
                        $('.images').css({'background-size': 'contain', 'background-position': 'center center'});
                    };
                }
	    	},

	    	simpanData(uuid){
	    		var vm = this;

	    		var urls = `${ vm.apiUrl }/materi/create`;
	    		if(uuid != ''){
	    			urls = `${ vm.apiUrl }/materi/${ uuid }/update`;
	    		}

	    		Aropex.btnLoad('.btn-submit', true);
	    		let formData = new FormData($("#FormTambah")[0]);
	    		formData.append('materigroup_id', vm.$parent.materiGroupId);
                vm.axios.post(urls, formData, {headers: {'content-type': 'multipart/form-data'}}).then((res) => {
	    			vm.setShowList();
	    			Aropex.btnLoad('.btn-submit', false);
	    			toastr.success(res.data.message, 'Success');
	    		}).catch((err)=>{
	    			Aropex.btnLoad('.btn-submit', false);
	    			toastr.error(err.response.data.message, 'Error');
	    		});
	    	},

	    	changeStatus: _.debounce(function(uuid, status){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/materi/${ uuid }/status`,
	    			data: { is_preview: status },
	    			method: 'POST',
	    		}).then((res)=>{
	    			vm.$refs.tableMateri.reload();
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		})
	    	}, 1000),

	    	deleteData(uuid){
	    		var vm = this;

	    		swal({
					title: "Apakah anda yakin?",
					text: "Data yang dihapus tidak dapat dikembalikan.",
					type: "warning",
					showCancelButton: true,
					confirmButtonColor: "#DD6B55",
					confirmButtonText: "Yes!",
					cancelButtonText: "No",
					closeOnConfirm: false,
					closeOnCancel: false,
				}).then((isConfirm)=>{
					if(isConfirm){
			    		vm.$http({
			    			url: `${ vm.apiUrl }/materi/${ uuid }/delete`,
			    			method: 'DELETE',
			    		}).then((res)=>{
			    			vm.$refs.tableMateri.reload();
			    			toastr.success(res.data.message, 'Success');
			    		}).catch((err)=>{
			    			toastr.error(err.response.data.message, 'Error');
			    		})
			    	}
			    });
	    	}
    	},
    	mounted(){

    	}
    }
</script>
<style type="text/css" scoped>
	@import url('/assets/css/video.css');
</style>