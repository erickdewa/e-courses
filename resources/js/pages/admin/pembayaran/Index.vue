<template>
	<div>
		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint" v-if="showList">
				<div class="aro-restraint_title">
					<span>Pembayaran</span>
				</div>
				<div class="aro-restraint_body">
					<AdminTable id="table" ref="table" classx="table table-rowed" :urls="'/usercourses/index'" :callbacks="callback()" :columns="columns"></AdminTable>
				</div>
			</div>
		</transition>

		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint" v-if="showForm">
				<div class="aro-restraint_title">
					<span>Pembayaran</span>
					<div class="button-table">
						<button type="button" class="btn btn-info btn-sm" @click.prevent="showList = true; showForm = false">
							<i class="fa fa-reply-all"></i> Kembali
						</button>
					</div>
				</div>
				<div class="aro-restraint_body">
					<FormTambah></FormTambah>
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
	        		{ name: 'Nama User', data: 'user.name' },
	        		{ name: 'Nama Kursus', data: 'courses.name' },
	        		{ name: 'Method', data: 'method.nm_method' },
	        		{ name: 'Total', data: 'total' },
	        		{ name: 'Status', data: 'status' },
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
	    	},
	    	setShowForm(){
	    		var vm = this;

	    		vm.showList = false;
				vm.showForm = true;
	    	},

	    	callback(){
	    		var vm = this;

	    		setTimeout(function(){
		    		$('#table').on('click', '.detail', function(e){
	                    var uuid = $(this).data('uuid');
	                    vm.thisUuid = uuid;
	                    vm.isEdit = true;
	                    vm.setShowForm();
	                });
	    		}, 200);
	    	},

	    	deleteData(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/user/${ uuid }/delete`,
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