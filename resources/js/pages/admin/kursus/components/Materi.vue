<template>
	<div>
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
					<form class="form" id="FormTambah" enctype="multipart/form-data" @submit.prevent="simpanData(formData.uuid)" autocomplete="off">
						<div class="form-body">
							<div class="row">
								<div class="col-md-12">
									<div class="form-group" align="center">
										<div class="image-upload-box images" style="width: 350px; height: 200px">
											<input type="file" id="image" accept="image/png, image/jpeg" class="form-control" name="thumbnile" required v-on:change="changeImage" placeholder="Name">
											<label for="image"><i class=" fa fa-plus"></i></label>
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<label>Nama Kursus</label>
										<input type="text" class="form-control" name="name" required v-model="formData.name" placeholder="Name">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Nama Sub</label>
										<input type="text" class="form-control" name="subname" required v-model="formData.subname" placeholder="Name">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Color</label>
										<input type="text" class="form-control" name="color" required v-model="formData.color" placeholder="Color">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Type</label>
										<select class="form-control type-select" name="access" required v-model="formData.access" placeholder="Type Access">
											<option value="lifetime">Selamanya</option>
											<option value="annual">Tahunan</option>
											<option value="month">Bulanan</option>
											<option value="weekly">Mingguan</option>
										</select>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Harga</label>
										<input type="text" class="form-control" name="price" required v-model="formData.price" placeholder="Harga">
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<label>Deskripsi</label>
										<textarea class="form-control" rows="3" name="description" required v-model="formData.description" placeholder="Deskripsi"></textarea>
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
				</div>
			</div>
		</transition>

		<transition enter-active-class="animated fadeIn">
			<div class="aro-restraint" v-if="showList">
				<div class="aro-restraint_title">
					<span>Materi</span>
					</div>
					<div class="button-table">
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

	        	columns: [
	        		{ name: 'Nama Materi', data: 'nm_materi' },
	        	],

	        	formData: {},
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
	    	},
	    	setShowForm(){
	    		var vm = this;

	    		vm.showForm = true;
	    	},

	    	callback(){
	    		var vm = this;
	    	},
    	},
    	mounted(){

    	}
    }
</script>