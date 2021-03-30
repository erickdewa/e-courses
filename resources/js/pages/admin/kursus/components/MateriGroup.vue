<template>
	<div>
		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint">
				<div class="aro-restraint_title">
					<span>Materi Group</span>
					<div class="button-table">
						<button type="button" class="btn btn-info btn-sm" v-if="showForm" @click.prevent="setShowList()">
							<i class="fa fa-times"></i> Tutup
						</button>
						<button type="button" class="btn btn-success btn-sm" v-if="showList" @click.prevent="setShowForm()">
							<i class="fa fa-plus"></i> Tambah
						</button>
					</div>
				</div>
				<div class="aro-restraint_body">
					<form v-if="showForm" class="form" id="FormMateriGroup" enctype="multipart/form-data" @submit.prevent="simpanData(formData.uuid)" autocomplete="off">
						<div class="form-body">
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<label>Nama Materi Group</label>
										<input type="text" class="form-control" name="nm_materi" required v-model="formData.nm_materi" placeholder="Nama Materi Group">
									</div>
								</div>
							</div>
						</div>
						<hr>
						<div class="form-action" align="right">
							<button type="submit" form="FormMateriGroup" class="btn btn-sm btn-success btn-submit">
								<i class="fa fa-save"></i> Simpan
							</button>
						</div>
					</form>

					<AdminTable v-if="showList" id="table" ref="table" classx="table table-rowed" :urls="`/materigroup/${coursesUuid}/index`" :callbacks="callback()" :columns="columns"></AdminTable>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
    export default {
    	props: ['coursesUuid', 'coursesId'],
    	data() {
	        return {
	        	showList: true,
	        	showForm: false,

	        	dataMateri: [],
	        	formData: {
	        		uuid: '',
	        		courses_id: '',
	        		nm_materi: '',
	        	},
	        	formMateri: {
	        		nm_materi: '',
	        		thumbnaile: '',

	        	},

	        	dataDetail: [],

	        	columns: [
	        		{ name: 'Nama Materi', data: 'nm_materi' },
	        		{ name: 'Aksi', data: 'action' },
	        	],
	        }
	    },
	    methods: {
	    	setShowList(){
	    		var vm = this;

	    		vm.showList = true;
	    		vm.showForm = false;
	    	},
	    	setShowForm(){
	    		var vm = this;

	    		vm.showList = false;
	    		vm.showForm = true;

	    		vm.formData = {
	        		uuid: '',
	        		courses_id: '',
	        		nm_materi: '',
	        	};
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
	                $('#table').on('click', '.detail', function(e){
	                    var id = $(this).data('id');
	                    var uuid = $(this).data('uuid');
	                    vm.$parent.materiGroupId = id;
						vm.$parent.materiGroupUuid = uuid;
	                    vm.$parent.setShowMateri();
	                });
	    		}, 200);
	    	},

	    	getData(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/materigroup/${ uuid }/getdata`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.formData = res.data.data;
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		})
	    	},
	    	
	    	simpanData(uuid){
	    		var vm = this;

	    		var urls = `${ vm.apiUrl }/materigroup/create`;
	    		if(uuid != ''){
	    			urls = `${ vm.apiUrl }/materigroup/${ uuid }/update`;
	    		}

	    		Aropex.btnLoad('.btn-submit', true);
	    		vm.$http({
	    			url: urls,
	    			data: vm.formData,
	    			method: "POST",
	    		}).then((res) => {
                	vm.setShowList();
	    			Aropex.btnLoad('.btn-submit', false);
	    			toastr.success(res.data.message, 'Success');
	    		}).catch((err)=>{
	    			console.log(err);
	    			Aropex.btnLoad('.btn-submit', false);
	    			toastr.error(err.response.data.message, 'Error');
	    		});
	    	},

	    	deleteData(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/materigroup/${ uuid }/delete`,
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
	    	var vm = this;

	    	vm.formData.courses_id = vm.coursesId;
	    }
	}
</script>