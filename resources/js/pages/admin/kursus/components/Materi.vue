<template>
	<div>
		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint" v-if="showForm">
				<div class="aro-restraint_title">
					<span>{{ title }}</span>
					<div class="button-table">
						<button v-if="showTambah" type="button" class="btn btn-info btn-sm" @click.prevent="setShowList()">
							<i class="fa fa-reply-all"></i> Kembali
						</button>
						<button v-if="showPreview" type="button" class="btn btn-info btn-sm" @click.prevent="setShowTambah()">
							<i class="fa fa-reply-all"></i> Kembali
						</button>
					</div>
				</div>
				<div class="aro-restraint_body">
					<transition v-if="showTambah" enter-active-class="animated fadeIn">
						<form class="form" id="FormTambah" enctype="multipart/form-data" @submit.prevent="simpanData(formData.uuid)" autocomplete="off">
							<div class="form-body">
								<div class="row">
									<div class="col-md-12">
										<div class="form-group" align="center">
											<div class="image-upload-box images" :style="`background-image: url(${formData.thumbnail}); background-size: cover; width: 350px; height: 200px`">
												<input type="file" id="image" accept="image/png, image/jpeg" class="form-control" name="thumbnail" required v-on:change="changeImage" placeholder="Name">
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
											<div class="input-group mb-3">
												<input type="text" class="form-control" name="video" required @input="showPreviewVideo()" v-model="formData.video" placeholder="Link Video">
												<div class="input-group-append">
													<span class="input-group-text" id="preview" @click="setShowVideo()">
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
								<button type="submit" form="FormTambah" class="btn btn-sm btn-success btn-submit">
									<i class="fa fa-save"></i> Simpan
								</button>
							</div>
						</form>
					</transition>
					<transition v-if="showPreview" enter-active-class="animated fadeIn">
						<div align="center">
							<div class="courses-video-box">
								<div class="video-player">
									<div id="aro-video" :data-video="formData.video"></div>
								</div>
								<div class="video-control">
									<div class="btn-control">
										<div class="btn btn-circle btn-info btn-play">
											<i class="fa fa-play"></i>
										</div>
										<div class="btn btn-circle btn-info btn-pause" style="display: none;">
											<i class="fa fa-pause"></i>
										</div>
									</div>
									<div class="range-duration">
										<input type="range" class="duration" value="0">
									</div>
									<div class="number-duration">
										<span class="current-time">00:00</span>
										<span>/</span>
										<span class="duration-time">00:00</span>
									</div>
								</div>
							</div>
						</div>
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
					<AdminTable v-if="showList" id="table" ref="table" classx="table table-rowed" :urls="`/materi/${materiGroupUuid}/index`" :callbacks="callback()" :columns="columns"></AdminTable>
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
	        	showPreview: false,
	        	player: '',

	        	columns: [
	        		{ name: 'Nama Materi', data: 'nm_materi' },
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
	    			vm.$refs.table.reload();
	    		}, 200);
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
	        	vm.showPreview = false;

	        	if(vm.player != ''){
	        		if(typeof vm.player != 'undefined'){
		        		vm.player.stopVideo();
	        		}
	        	}
	    	},
	    	setShowVideo(){
	    		var vm = this;

	    		vm.title = 'Preview Video';
	    		vm.showTambah = false;
	        	vm.showPreview = true;
	    		vm.player = Aropex.video('aro-video', 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm21-background-tong-058.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=710a6fed5b1923da8d5f95191839ef8a');
	    	},

	    	callback(){
	    		var vm = this;

	    		setTimeout(function(){
		    		$('#table').on('click', '.edit', function(e){
	                    var uuid = $(this).data('uuid');
	                    vm.getData(uuid);
	                    vm.setShowForm();
	                });

	                $('#table').on('click', '.hapus', function(e){
	                    var uuid = $(this).data('uuid');
	                    vm.deleteData(uuid);
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

	    	getData(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/materi/${ uuid }/getdata`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.formData = res.data.data;
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		})
	    	},

	    	changeImage($event){
	    		var vm = this;

	    		vm.formData.thumbnail = $event.target.files[0];
                if(vm.formData.thumbnail != undefined){
                    var oFReader = new FileReader();
                    oFReader.readAsDataURL(vm.formData.thumbnail);
                 
                    oFReader.onload = function(oFREvent) {
                        $('.images').css('background-image', 'url(' + oFREvent.target.result + ')');
                        $('.images').css('background-size', 'cover');
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

	    	deleteData(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/materi/${ uuid }/delete`,
	    			method: 'DELETE',
	    		}).then((res)=>{
	    			vm.$refs.table.reload();
	    			toastr.success(res.data.message, 'Success');
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		})
	    	}
    	},
    	mounted(){

    	}
    }
</script>
<style type="text/css" scoped>
	@import url('/assets/css/video.css');
</style>