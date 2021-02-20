<template>
	<div>
		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint">
				<div class="aro-restraint_title">
					<span>Materi Group</span>
					<div class="button-table">
						<button type="button" class="btn btn-info btn-sm" v-if="showForm" @click.prevent="showList = true; showForm = false">
							<i class="fa fa-times"></i> Tutup
						</button>
						<button type="button" class="btn btn-success btn-sm" v-if="showList" @click.prevent="showList = false; showForm = true">
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
	    	},
	    	callback(){
	    		var vm = this;
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
	    			vm.$ref.table.reload();
	    			Aropex.btnLoad('.btn-submit', false);
	    			toastr.success(res.data.message, 'Success');
	    		}).catch((err)=>{
	    			Aropex.btnLoad('.btn-submit', false);
	    			toastr.error(err.response.data.message, 'Error');
	    		});
	    	},
	    },
	    mounted(){
	    	var vm = this;

	    	vm.formData.courses_id = vm.coursesId;
	    }
	}
</script>