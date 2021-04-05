<template>
	<div>
		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint" v-if="showList">
				<div class="aro-restraint_title">
					<span>Tambah Level</span>
					<div class="button-table">
						<button type="button" class="btn btn-success btn-sm" @click.prevent="setShowForm()">
							<i class="fa fa-plus"></i> Tambah
						</button>
					</div>
				</div>
				<div class="aro-restraint_body">
					<AdminTable id="table" ref="table" classx="table table-rowed" :urls="'/level/index'" :callbacks="callback()" :columns="columns"></AdminTable>
				</div>
			</div>
		</transition>

		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint" v-if="showForm">
				<div class="aro-restraint_title">
					<span>Level</span>
					<div class="button-table">
						<button type="button" class="btn btn-info btn-sm" @click.prevent="setShowList()">
							<i class="fa fa-reply-all"></i> Kembali
						</button>
					</div>
				</div>
				<div class="aro-restraint_body">
					<FormTambah :uuid="thisUuid" :isEdit="isEdit"></FormTambah>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import FormTambah from './components/FormTambah'
    export default {
    	components: {
            FormTambah
        },
    	data() {
	        return {
	        	showList: true,
	        	showForm: false,

	        	columns: [
	        		{ name: 'Nama', data: 'name' },
	        		{ name: 'Aksi', data: 'action' },
	        	],

	        	thisUuid: '',
	        	isEdit: false,
	        }
	    },
	    methods: {
	    	setShowList(){
	    		var vm = this;

	    		vm.showList = true;
				vm.showForm = false;
				vm.isEdit = false;
				vm.thisUuid = '';
	    	},
	    	setShowForm(){
	    		var vm = this;

	    		vm.showList = false;
				vm.showForm = true;
	    	},

	    	callback(){
	    		var vm = this;

	    		setTimeout(function(){
		    		$('#table').on('click', '.edit', function(e){
	                    var uuid = $(this).data('uuid');
	                    vm.thisUuid = uuid;
	                    vm.isEdit = true;
	                    vm.setShowForm();
	                });
	                $('#table').on('click', '.hapus', function(e){
	                    var uuid = $(this).data('uuid');
	                    vm.deleteData(uuid);
	                });
	    		}, 200);
	    	},

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
			    			url: `${ vm.apiUrl }/level/${ uuid }/delete`,
			    			method: 'DELETE',
			    		}).then((res)=>{
			    			vm.$refs.table.reload();
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