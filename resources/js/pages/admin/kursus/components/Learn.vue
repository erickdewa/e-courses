<template>
	<div>
		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint">
				<div class="aro-restraint_title">
					<span>Courses Learn</span>
					<div class="button-table">
						<button v-if="showList" type="button" class="btn btn-success btn-sm" @click.prevent="setShowForm()">
							<i class="fa fa-plus"></i> Tambah
						</button>
						<button v-if="showList" type="button" class="btn btn-info btn-sm" @click.prevent="$parent.setShowList()">
							<i class="fa fa-reply-all"></i> Kembali
						</button>
						<button v-if="showForm" type="button" class="btn btn-info btn-sm" @click.prevent="setShowList()">
							<i class="fa fa-reply-all"></i> Kembali
						</button>
					</div>
				</div>
				<div class="aro-restraint_body">
					<form v-if="showForm" id="FormTambah" class="form" @submit.prevent="simpanData(formData.uuid)" autocomplete="off">
						<div class="form-body">
							<div class="form-group">
								<label>Isi Teks</label>
								<input class="form-control" type="text" name="text" v-model="formData.text" placeholder="Text">
							</div>
						</div>
						<hr>
						<div class="form-action" align="right">
							<button type="submit" form="FormTambah" class="btn btn-sm btn-success btn-submit">
								<i class="fa fa-save"></i> Simpan
							</button>
						</div>
					</form>

					<AdminTable v-if="showList" id="table" ref="table" classx="table table-rowed" :urls="`/courses/learn/${$parent.thisUuid}/index`" :callbacks="callback()" :columns="columns"></AdminTable>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
    export default {
    	data() {
	        return {
	        	showList: true,
	        	showForm: false,

	        	formData: {
	        		uuid: '',
	        		courses_id: '',
	        		text: '',
	        	},

	        	columns: [
	        		{ name: 'Text', data: 'text' },
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
	        		text: '',
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
	    		}, 200);
	    	},

	    	getData(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/courses/learn/${ uuid }/getdata`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.formData = res.data.data;
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		})
	    	},
	    	
	    	simpanData(uuid){
	    		var vm = this;

	    		var urls = `${ vm.apiUrl }/courses/learn/create`;
	    		if(uuid != ''){
	    			urls = `${ vm.apiUrl }/courses/learn/${ uuid }/update`;
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
	    			Aropex.btnLoad('.btn-submit', false);
	    			toastr.error(err.response.data.message, 'Error');
	    		});
	    	},

	    	deleteData(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/courses/learn/${ uuid }/delete`,
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

	    	vm.formData.courses_id = vm.$parent.thisId;
	    }
	}
</script>