<template>
	<div>
		<form class="form" id="FormTambah" enctype="multipart/form-data" @submit.prevent="simpanData()" autocomplete="off">
			<div class="form-body">
				<div class="row">
					<div class="col-md-10">
						<select class="form-control tools-select" name="tool" required v-model="formData.tool" placeholder="Tools">
							<option v-for="tool in dataTools" :value="tool.id">{{ tool.nm_tool }}</option>
						</select>
					</div>
					<div class="col-md-2">
						<button type="submit" class="btn btn-success btn-submit" style="width: 100%">
							<i class="fa fa-plus"></i> Tambah
						</button>
					</div>
				</div>
				<div class="row list-tools">
					<div class="col-md-4 col-12" v-for="selected in dataSelected">
						<div class="tool-selected">
							<div class="tool-hapus" title="Hapus" @click="deleteData(selected.uuid)">
								<i class="fa fa-times text-light"></i>
							</div>
							<div class="tools-image">
								<img :src="selected.tool.image">
							</div>
							<div class="tools-info">
								<div class="name">{{ selected.tool.nm_tool }}</div>
								<div class="website">{{ selected.tool.link }}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
    export default {
    	data() {
	        return {
	        	formData: {
	        		courses_id: '',
	        		tool_id: '',
	        	},

	        	dataTools: [],
	        	dataSelected: [],
	        }
	    },
	    methods: {
	    	getData(){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/courses/tool/${ vm.$parent.thisUuid }/getdata`,
	    			method: "GET",
	    		}).then((res) => {
	    			vm.select2();
	    			vm.dataSelected = res.data.data;
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		});
	    	},

	    	simpanData(){
	    		var vm = this;

	    		Aropex.btnLoad('.btn-submit', true);
	    		vm.formData.courses_id = vm.$parent.thisId;
	    		vm.$http({
	    			url: `${ vm.apiUrl }/courses/tool/create`,
	    			data: vm.formData,
	    			method: "POST",
	    		}).then((res) => {
	    			vm.getData();
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
	    			url: `${ vm.apiUrl }/courses/tool/${ uuid }/delete`,
	    			method: "DELETE",
	    		}).then((res) => {
	    			vm.getData();
	    			toastr.success(res.data.message, 'Success');
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		});
	    	},

	    	select2(){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/courses/tool/${ vm.$parent.thisUuid }/gettool`,
	    			method: "GET",
	    		}).then((res) => {
	    			vm.dataTools = res.data.data;

		    		$(".tools-select").select2({
	                    placeholder: "Pilih",
	                    width: '100%'
	                }).val(vm.formData.tool_id).on('change', function(val) {
	                    vm.formData.tool_id = $(this).val();
	                });
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		});
	    	}
	    },
	    mounted(){
	    	var vm = this;

	    	vm.getData();
	    }
    }
</script>
<style type="text/css" scoped>
	.list-tools{
		margin-top: 25px;
	}
	.list-tools .tool-selected{
		background: #F7F7F7;
		position: relative;
		padding: 10px;
		width: 100%;
		display: flex;
		border-radius: 5px;
		overflow: hidden;
	}
	.list-tools .tool-hapus{
		background: #FD397A;
		position: absolute;
		font-size: 18px;
		text-align: center;
		width: 25px;
	    border-radius: 5px;
		right: 0px;
		top: 0px;
		cursor: pointer;
	}
	.tool-selected .tools-image{
		display: inline-block;
	}
	.tool-selected .tools-image img{
		width: 50px;
		height: 50px;
		border-radius: 5px;
	}
	.tool-selected .tools-info{
		display: inline-block;
	    margin-left: 10px;
	}
	.tools-info .name{
		color: #5488A5;
	    font-size: 17px;
	    font-weight: 600;

	}
	.tools-info .website{
		color: #5488A5;
	    font-size: 12px;
	    font-weight: 400;
		
	}
</style>