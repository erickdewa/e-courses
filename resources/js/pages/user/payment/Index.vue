<template>
	<div>
		<div class="payment-page">
			<div class="row">
				<div class="col-md-8">
					<div class="payment-box default-box">
						<div class="title">Payment Method</div>
						<div class="method-list mt-3">
							<div class="row">
								<template v-for="method in dataMethod">
									<div class="col-6">
										<div class="method-item d-flex p-0 cursor-pointer" v-bind:class="((formData.method_id==method.id)?'active':'')" @click="methodSelected(method.id)">
											<div class="method-item_image">
												<img src="/assets/images/avatar-1.png">
											</div>
											<div class="method-item_info ml-4 mt-2">
												<div class="nama">{{ method.nm_method }}</div>
												<div class="subname">Bayar Otomatis</div>
												<div class="price mt-2">Rp. 200.000</div>
											</div>
										</div>
									</div>
								</template>						
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="default-box">
						<template v-if="showMethod">
							<div class="title">Checkout</div>
							<div class="payment-item mt-3">
								<div class="payment-item_image" align="center">
									<img src="/assets/images/avatar-1.png">
								</div>
								<div class="payment-item_info mt-2">
									<div class="nama">Laravel 8 For Beginer</div>
									<div class="subname">Lifetime</div>
									<div class="price" align="right">Rp. 200.000</div>
								</div>
							</div>
							<hr>
							<div class="payment-sum">
								<div class="d-flex justify-content-between my-2">
									<div class="note"></div>
									<div class="price" align="right">Rp. 200.000</div>
								</div>
								<div class="d-flex justify-content-between my-2">
									<div class="note">Diskon</div>
									<div class="price" align="right">Rp. 0</div>
								</div>
								<div class="d-flex justify-content-between my-2">
									<div class="note">Total</div>
									<div class="price" align="right">Rp. 200.000</div>
								</div>
							</div>
							<div class="payment-action mt-3">
								<button type="button" class="btn btn-success btn-sm" style="width: 100%" @click="setShowBayar()" v-bind:disabled="((formData.method_id!='')?false:true)">
									<i class="fa fa-money"></i> Bayar Sekarang
								</button>
							</div>
						</template>
						<template v-if="showBayar">
							<div class="title">Bayar Sekarang</div>
							<div class="jumlah-bayar d-flex justify-content-between mt-3">
								<div class="nama">Total</div>
								<div class="price">Rp. 200.000</div>
							</div>
							<div class="order-id">Order ID #1 (Gopay)</div>
							<div class="expired-date">Expired 28 Mei 21:07 WIB</div>
							<hr>
							<div class="account-bayar">
								<div class="nama">Account Number</div>
								<div class="nomor">26303847172</div>
							</div>
							<hr>
							<div class="how-to-pay cursor-pointer">How to Pay?</div>
							<div class="payment-action mt-3">
								<button type="button" class="btn btn-success btn-sm" style="width: 100%">
									<i class="fa fa-money"></i> Cek Pembayaran
								</button>
							</div>
						</template>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
    	data() {
	        return {
	        	showMethod: true,
	        	showBayar: false,

	        	bayar: false,
	        	dataMethod: [],

	        	dataCourses: {},

	        	formData: {
	        		user_id: '',
	        		method_id: '',
	        		courses_id: '',
	        	},
	        }
	    },
	    methods: {
	    	setShowMethod(){
	    		var vm = this;

	    		vm.showMethod = true;
	    		vm.showBayar = false;
	    	},
			setShowBayar(){
				var vm = this;

				vm.showMethod = false;
				vm.showBayar = true;
				vm.bayar = true;
			},

	    	methodSelected(id){
	    		var vm = this;

	    		if(!vm.bayar){
	    			vm.formData.method_id = id;
	    		}
	    	},
	    	getMethod(){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/payment/getdatas`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.dataMethod = res.data.data;
	    		}).catch((error)=>{
	    			// error
	    		});
	    	},
	    	getCourses(){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/courses/${ vm.$route.params.uuidCourses }/getdata`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.dataCourses = res.data.data;
	    		}).catch((error)=>{
	    			// error
	    		});
	    	}
	    },
	    mounted(){
	    	var vm = this;

	    	vm.getMethod();
	    	vm.getCourses();
	    }
	}
</script>