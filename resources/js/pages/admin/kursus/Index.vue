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
			<Materi ref="refmateri" :materiGroupUuid="materiGroupUuid" :materiGroupId="materiGroupId"></Materi>
		</div>

		<div v-if="showLearn">
			<Learn></Learn>
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

		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint" v-if="showSkill">
				<div class="aro-restraint_title">
					<span>Courses Skill</span>
					<div class="button-table">
						<button type="button" class="btn btn-info btn-sm" @click.prevent="setShowList()">
							<i class="fa fa-reply-all"></i> Kembali
						</button>
					</div>
				</div>
				<div class="aro-restraint_body">
					<Skill></Skill>
				</div>
			</div>
		</transition>

		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint" v-if="showReview">
				<div class="aro-restraint_title">
					<span>Courses Review</span>
					<div class="button-table">
						<button type="button" class="btn btn-info btn-sm" @click.prevent="setShowList()">
							<i class="fa fa-reply-all"></i> Kembali
						</button>
					</div>
				</div>
				<div class="aro-restraint_body">
					<Review></Review>
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
	import Skill from './components/Skill'
	import Learn from './components/Learn'
	import Review from './components/Review'
    export default {
    	components: {
            FormTambah, MateriGroup, Materi, Tools, Skill, Review, Learn
        },
    	data() {
	        return {
	        	showList: true,
	        	showForm: false,

	        	showGroupMateri: false,
	        	showMateri: false,
	        	showTools: false,
	        	showSkill: false,
	        	showReview: false,
	        	showLearn: false,

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
				vm.showSkill = false;
				vm.showReview = false;
				vm.showLearn = false;
	    	},
	    	setShowForm(){
	    		var vm = this;

	    		vm.showList = false;
				vm.showForm = true;
				vm.showGroupMateri = false;
				vm.showMateri = false;
				vm.showTools = false;
				vm.showSkill = false;
				vm.showReview = false;
				vm.showLearn = false;
	    	},
	    	setShowMateri(status, tag){
	    		var vm = this;

	    		if(status == 'show'){
					vm.showMateri = true;
					vm.$refs.refmateri.reload();
					vm.$refs.refmateri.tag = tag;
	    		}else{
	    			vm.showMateri = false;
	    		}
	    	},
	    	setShowTools(){
	    		var vm = this;

	    		vm.showList = false;
				vm.showForm = false;
				vm.showGroupMateri = false;
				vm.showMateri = false;
				vm.showTools = true;
				vm.showSkill = false;
				vm.showReview = false;
				vm.showLearn = false;
	    	},
	    	setShowReview(){
	    		var vm = this;

	    		vm.showList = false;
				vm.showForm = false;
				vm.showGroupMateri = false;
				vm.showMateri = false;
				vm.showTools = false;
				vm.showSkill = false;
				vm.showReview = true;
				vm.showLearn = false;
	    	},
	    	setShowSkill(){
	    		var vm = this;

	    		vm.showList = false;
				vm.showForm = false;
				vm.showGroupMateri = false;
				vm.showMateri = false;
				vm.showTools = false;
				vm.showSkill = true;
				vm.showReview = false;
				vm.showLearn = false;
	    	},
	    	setShowLearn(){
	    		var vm = this;

	    		vm.showList = false;
				vm.showForm = false;
				vm.showGroupMateri = false;
				vm.showMateri = false;
				vm.showTools = false;
				vm.showSkill = false;
				vm.showReview = false;
				vm.showLearn = true;
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
	                    var id = $(this).data('id');
	                    vm.thisUuid = uuid;
	                    vm.thisId = id;
	                    vm.setShowTools();
	                });

	                $('#table').on('click', '.skill', function(e){
	                	var uuid = $(this).data('uuid');
	                    var id = $(this).data('id');
	                    vm.thisUuid = uuid;
	                    vm.thisId = id;
	                    vm.setShowSkill();
	                });

	                $('#table').on('click', '.review', function(e){
	                	var uuid = $(this).data('uuid');
	                    var id = $(this).data('id');
	                    vm.thisUuid = uuid;
	                    vm.thisId = id;
	                    vm.setShowReview();
	                });

	                $('#table').on('click', '.learn', function(e){
	                	var uuid = $(this).data('uuid');
	                    var id = $(this).data('id');
	                    vm.thisUuid = uuid;
	                    vm.thisId = id;
	                    vm.setShowLearn();
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
			    			url: `${ vm.apiUrl }/courses/${ uuid }/delete`,
			    			method: 'DELETE',
			    		}).then((res)=>{
			    			vm.$refs.table.reload();
			    			toastr.success(res.data.message, 'Success');
			    		}).catch((err)=>{
			    			toastr.error(err.response.data.message, 'Error');
			    		});
			    	}
			    });
	    	}
	    },
	    mounted(){

	    }
    }
</script>