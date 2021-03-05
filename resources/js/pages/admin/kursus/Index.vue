<template>
	<div>
		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint" v-if="showList">
				<div class="aro-restraint_title">
					<span>Courses</span>
					<div class="button-table">
						<button type="button" class="btn btn-success btn-sm" @click.prevent="setShowForm()">
							<i class="fa fa-plus"></i> Tambah
						</button>
					</div>
				</div>
				<div class="aro-restraint_body">
					<AdminTable id="table" ref="table" classx="table table-rowed" :urls="'/courses/index'" :callbacks="callback()" :columns="columns"></AdminTable>
				</div>
			</div>
		</transition>

		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint" v-if="showForm">
				<div class="aro-restraint_title">
					<span>Tambah Courses</span>
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

		<div v-if="showGroupMateri">
			<MateriGroup :coursesUuid="thisUuid" :coursesId="thisId"></MateriGroup>
		</div>
			
		<div v-if="showMateri">
			<Materi :materiGroupUuid="materiGroupUuid" :materiGroupId="materiGroupId"></Materi>
		</div>

		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint" v-if="showTools">
				<div class="aro-restraint_title">
					<span>Courses Tools</span>
					<div class="button-table">
						<button type="button" class="btn btn-info btn-sm" @click.prevent="setShowList()">
							<i class="fa fa-reply-all"></i> Kembali
						</button>
					</div>
				</div>
				<div class="aro-restraint_body">
					<Tools></Tools>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import FormTambah from './components/FormTambah'
	import MateriGroup from './components/MateriGroup'
	import Materi from './components/Materi'
	import Tools from './components/Tools'
    export default {
    	components: {
            FormTambah, MateriGroup, Materi, Tools
        },
    	data() {
	        return {
	        	showList: true,
	        	showForm: false,

	        	showGroupMateri: false,
	        	showMateri: false,
	        	showTools: false,

	        	columns: [
	        		{ name: 'Nama', data: 'name' },
	        		{ name: 'Aksi', data: 'action' },
	        	],

	        	thisId: '',
	        	thisUuid: '',

	        	materiGroupId: '',
	        	materiGroupUuid: '',

	        	isEdit: false,
	        }
	    },
	    methods: {
	    	setShowList(){
	    		var vm = this;

	    		vm.showList = true;
				vm.showForm = false;
				vm.showGroupMateri = false;
				vm.showMateri = false;
				vm.showTools = false;
	    	},
	    	setShowForm(){
	    		var vm = this;

	    		vm.showList = false;
				vm.showForm = true;
				vm.showGroupMateri = false;
				vm.showMateri = false;
				vm.showTools = false;
	    	},
	    	setShowMateri(){
	    		var vm = this;

	    		vm.showList = false;
				vm.showForm = false;
				vm.showGroupMateri = false;
				vm.showMateri = true;
				vm.showTools = false;
	    	},
	    	setShowTools(){
	    		var vm = this;

	    		vm.showList = false;
				vm.showForm = false;
				vm.showGroupMateri = false;
				vm.showMateri = false;
				vm.showTools = true;
	    	},

	    	callback(){
	    		var vm = this;

	    		setTimeout(function(){
		    		$('#table').on('click', '.edit', function(e){
	                    var uuid = $(this).data('uuid');
	                    var id = $(this).data('id');
	                    vm.thisUuid = uuid;
	                    vm.thisId = id;
	                    vm.isEdit = true;
	                    vm.setShowForm();
	                });

	                $('#table').on('click', '.hapus', function(e){
	                    var uuid = $(this).data('uuid');
	                    vm.deleteData(uuid);
	                });

	                $('#table').on('click', '.tools', function(e){
	                    var uuid = $(this).data('uuid');
	                    vm.setShowTools();
	                });
	    		}, 200);
	    	},

	    	deleteData(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/courses/${ uuid }/delete`,
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