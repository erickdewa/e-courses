<template>
	<div>
		<form class="form" id="FormTambah" enctype="multipart/form-data" @submit.prevent="simpanData(formData.uuid)" autocomplete="off">
			<div class="form-body">
				<div class="row">
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
							<input type="text" class="form-control" name="diskon" required disabled v-model="formData.diskon" placeholder="Diskon">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Total</label>
							<input type="text" class="form-control" name="total" required disabled v-model="formData.total" placeholder="Total">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Payment Time</label>
							<input type="text" class="form-control" name="payment_time" required disabled v-model="formData.payment_time" placeholder="Payment Time">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Payment Expired</label>
							<input type="text" class="form-control" name="payment_expired" required disabled v-model="formData.payment_expired" placeholder="Payment Expired">
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
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		})
	    	},
	    },
	    mounted(){
	    	var vm = this;

    		vm.formData.uuid = vm.$parent.thisUuid;
    		vm.getData(vm.formData.uuid);
	    }
    }
</script>