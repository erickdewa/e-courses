<template>
	<div>
		<form class="form" id="FormTambah" enctype="multipart/form-data" @submit.prevent="simpanData(formData.uuid)" autocomplete="off">
			<div class="form-body">
				<div class="row">
					<div class="col-md-12" align="center">
						<label>Bukti Pembayaran</label>
						<div :style="`background-image: url(${ formData.bukti }); background-size: cover; width: 500px; height: 300px; margin-bottom: 25px; cursor: pointer`" @click="redirect(formData.bukti)"></div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label>Status</label>
							<select class="form-control status-select" name="status" v-model="formData.status" placeholder="Status">
								<option value="pending">Pending</option>
								<option value="proccess">Proccess</option>
								<option value="success">Success</option>
								<option value="cancle">Cancle</option>
							</select>
						</div>
					</div>
					<hr>
					<div class="col-md-12">
						<div class="form-group">
							<label>Courses</label>
							<input type="text" class="form-control" name="courses.name" required disabled v-model="formData.courses.name" placeholder="Courses">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Nama User</label>
							<input type="text" class="form-control" name="user.name" required disabled v-model="formData.user.name" placeholder="Nama User">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Nama Payment</label>
							<input type="text" class="form-control" name="nm_method" required disabled v-model="formData.method.nm_method" placeholder="Nama Payment">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Diskon</label>
							<input type="text" class="form-control" name="discount" required disabled v-model="formData.discount.rupiah()" placeholder="Diskon">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Total</label>
							<input type="text" class="form-control" name="total" required disabled v-model="formData.total.rupiah()" placeholder="Total">
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label>Payment Time</label>
							<input type="text" class="form-control" name="payment_time" required disabled v-model="formData.payment_time" placeholder="Payment Time">
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label>Catatan</label>
							<textarea rows="3" class="form-control" name="note" required disabled v-model="formData.note" placeholder="Payment Expired"></textarea>
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
	        		uuid: '',
	        		courses: {
	        			name: '',
	        		},
	        		discount: 0,
	        		total: 0,
	        		method: {
	        			nm_method: '',
	        		},
					user: {
						name: '',
					},
	        	},
	        }
	    },
	    methods: {
	    	getData(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/usercourses/${ uuid }/getdata`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.formData = res.data.data;
	    			vm.select2();
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		})
	    	},

	    	select2(){
	    		var vm = this;

	    		$(".status-select").val(vm.formData.status).trigger("change");
	    		$(".status-select").select2({
                    placeholder: "Pilih",
                    width: '100%'
                }).val(vm.formData.status).on('change', function(val) {
                    vm.formData.status = $(this).val();
                    vm.simpanStatus();
                });
	    	},
	    	simpanStatus(){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/payment/${ vm.formData.uuid }/status`,
	    			data: vm.formData,
	    			method: 'POST',
	    		}).then((res)=>{
	    			vm.$parent.setShowList();
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		})
	    	},

	    	redirect(url){
	    		var vm = this;

	    		window.location.href = `http://localhost:8000/${ url }`;
	    	},
	    },
	    mounted(){
	    	var vm = this;

    		vm.formData.uuid = vm.$parent.thisUuid;
    		vm.getData(vm.formData.uuid);
	    }
    }
</script>