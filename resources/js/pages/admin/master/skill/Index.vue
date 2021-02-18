<template>
	<div>
		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint" v-if="showList">
				<div class="aro-restraint_title">
					<span>Tambah Skill</span>
					<div class="button-table">
						<button type="button" class="btn btn-success btn-sm" @click.prevent="showList = false; showForm = true">
							<i class="fa fa-plus"></i> Tambah
						</button>
					</div>
				</div>
				<div class="aro-restraint_body">
					<AdminTable id="table" ref="table" classx="table table-rowed" :urls="'/skill/index'" :callbacks="callback()" :columns="columns"></AdminTable>
				</div>
			</div>
		</transition>

		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint" v-if="showForm">
				<div class="aro-restraint_title">
					<span>Skill</span>
					<div class="button-table">
						<button type="button" class="btn btn-info btn-sm" @click.prevent="showList = true; showForm = false">
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
	        		{ name: 'Nama', data: 'nm_skill' },
	        		{ name: 'Aksi', data: 'action' },
	        	],

	        	dataDetail: {},

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
	                $('#table').on('click', '.detail', function(e){
	                    var uuid = $(this).data('uuid');
	                    vm.thisUuid = uuid;
	                    vm.getDetail(uuid, this);
	                });
	    		}, 200);
	    	},

	    	getDetail(uuid, el){
	    		var vm = this;

	    		if(!$(el).parents('tr').next().hasClass('details')){
	    			vm.$http({
		    			url: `${ vm.apiUrl }/skill/${ uuid }/getdata`,
		    			method: 'GET',
		    		}).then((res)=>{
		    			vm.dataDetail = {};
		    			vm.dataDetail = res.data.data;
		    			vm.addDetail(el);
		    		}).catch((err)=>{
		    			toastr.error(err.response.data.message, 'Error');
		    		});
                }else{
                	vm.addDetail(el);
                }
	    	},
	    	addDetail(element){
                var app = this;
                var el = $(element).parents('tr');

                var table = "<tr class='details' style='background: #FFFFFF'><td colspan='5' align='center'><table width='100%'><tr><td>test</td></tr></table></td></tr>";

                if(!el.next().hasClass('details')){
                    if($('tr').hasClass('details')){
                        $('tr.details').remove();
                        $(table).insertAfter($(el));
                    }else{
                        $(table).insertAfter($(el));
                    }
                }else{
                    $('tr.details').remove();
                }
            },
            destroyDetail(){
                if($('tr').hasClass('details')){
                    $('tr.details').remove();
                }
            },

	    	deleteData(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/skill/${ uuid }/delete`,
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