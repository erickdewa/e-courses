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
					<form v-if="showForm" class="form" id="FormTambah" enctype="multipart/form-data" @submit.prevent="simpanData(formData.uuid)" autocomplete="off">
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
							<button type="submit" form="FormTambah" class="btn btn-sm btn-success btn-submit">
								<i class="fa fa-save"></i> Simpan
							</button>
						</div>
					</form>

					<AdminTable v-if="showList" id="table" ref="table" classx="table table-rowed" :urls="'/courses/index'" :callbacks="callback()" :columns="columns"></AdminTable>
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

	        	dataMateri: [],
	        	formData: {
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
	    	callback(){
	    		var vm = this;
	    	},
	    },
	    mounted(){

	    }
	}
</script>