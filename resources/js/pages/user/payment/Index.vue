<template>
	<div>
		<div class="payment-page">
			<div class="row">
				<div class="col-md-8">
					<div class="payment-box default-box">
						<div class="title">Metode Pembayaran</div>
						<div class="method-list mt-3">
							<div class="row">
								<template v-for="method in dataMethod">
									<div class="col-6">
										<div class="method-item d-flex p-0 cursor-pointer" v-bind:class="((method_id==method.id)?'active':'')" @click="methodSelected(method.id)">
											<div class="method-item_image">
												<img :src="method.image">
											</div>
											<div class="method-item_info ml-4 mt-2">
												<div class="nama">{{ method.nm_method }}</div>
												<div class="subname">Bayar Otomatis</div>
												<div class="price mt-2">Rp. {{ dataCourses.price.rupiah() }}</div>
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
									<img :src="dataCourses.thumbnile">
								</div>
								<div class="payment-item_info mt-2">
									<div class="nama">Laravel 8 For Beginer</div>
									<div class="subname">Lifetime</div>
									<div class="price" align="right">Rp. {{ dataCourses.price.rupiah() }}</div>
								</div>
							</div>
							<hr>
							<div class="payment-sum">
								<div class="d-flex justify-content-between my-2">
									<div class="note"></div>
									<div class="price" align="right">Rp. {{ dataCourses.price.rupiah() }}</div>
								</div>
								<div class="d-flex justify-content-between my-2">
									<div class="note">Diskon</div>
									<div class="price" align="right">Rp. 0</div>
								</div>
								<div class="d-flex justify-content-between my-2">
									<div class="note">Total</div>
									<div class="price" align="right">Rp. {{ dataCourses.price.rupiah() }}</div>
								</div>
							</div>
							<div class="payment-action mt-3">
								<button type="button" class="btn btn-success btn-sm btn-reload" style="width: 100%" @click="createOrder()" v-bind:disabled="((formData.method_id!='')?false:true)">
									<i class="fa fa-money"></i> Bayar Sekarang
								</button>
							</div>
						</template>
						<template v-if="showBayar">
							<div class="title">Bayar Sekarang</div>
							<div class="jumlah-bayar d-flex justify-content-between mt-3">
								<div class="nama">Total</div>
								<div class="price">Rp. {{ dataCourses.price.rupiah() }}</div>
							</div>
							<div class="order-id">Order ID #{{ formData.id }} ({{ formData.method.nm_method }})</div>
							<hr>
							<div class="account-bayar">
								<div class="nama">Account Number</div>
								<div class="nomor">{{ formData.method.nomor }}</div>
								<div class="account">{{ formData.method.nm_account }}</div>
							</div>
							<hr>
							<div style="display: flex; justify-content: space-between;">
								<div class="how-to-pay cursor-pointer">How to Pay?</div>
								<div v-if="!changeMethods" class="how-to-pay cursor-pointer" @click="change()">Change method?</div>
							</div>
							<div v-if="changeMethods" class="payment-action mt-3">
								<button type="button" class="btn btn-success btn-sm btn-simpan" style="width: 100%" @click="changeMethod()">
									<i class="fa fa-save"></i> Simpan Method Pembayaran
								</button>
							</div>
							<div v-if="!changeMethods" class="payment-action mt-3">
								<button type="button" class="btn btn-info btn-sm" style="width: 100%" @click="setShowBukti()">
									<i class="fa fa-money"></i> Next
								</button>
							</div>
						</template>
						<template v-if="showSuccess">
							<div align="center">
								<img width="100" height="100" src="/assets/images/icon/success.png">
							</div>
							<div class="mt-3">
								<div style="font-size: 16px; font-weight: 600; text-align: center;">Pembayaran Berhasil</div>
								<div style="font-size: 12px; text-align: center;">Pembayaran kursus "<span style="font-weight: 600">{{ formData.courses.name }}"</span> sedang ditinjau!</div>
							</div>
							<div class="payment-action mt-5">
								<button type="button" class="btn btn-info btn-sm" style="width: 100%" @click="$router.push('/')">
									<i class="fa fa-money"></i> Kembali
								</button>
							</div>
						</template>
						<template v-if="showBukti">
							<div class="title">Upload Bukti</div>
							<form id="form-bukti" class="form" @submit.prevent="buktiOrder()" autocomplete="off">
								<div class="form-group mt-3" align="center">
									<div class="image-upload-box images" style=" width: 250px; height: 150px; background-size: cover;">
										<input type="file" id="bukti" accept="image/png, image/jpeg" class="form-control" name="bukti" required v-on:change="changeImage" placeholder="Name">
										<label for="bukti"><i class=" fa fa-plus"></i></label>
									</div>
								</div>
								<div class="form-group">
									<textarea class="form-control" rows="2" name="note" placeholder="catatan"></textarea>
								</div>
								<hr>
								<div class="payment-action mt-3">
									<button type="submit" form="form-bukti" class="btn btn-success btn-submit btn-sm" style="width: 100%">
										<i class="fa fa-save"></i> Kirim Pembayaran
									</button>
								</div>
							</form>
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
	        	showBukti: false,
	        	showSuccess: false,

	        	bayar: false,
	        	dataMethod: [],

	        	changeMethods: false,
	        	method_id: '',

	        	dataCourses: {
	        		price: 0,
	        	},

	        	formData: {
	        		method: {},
	        		user: {},
	        		courses: {},
	        		user_id: '',
	        		method_id: '',
	        		courses_id: '',
	        		discount: '0',
	        		total: '0',
	        	},

	        	formBukti: {
	        		bukti: '',
	        		note: '',
	        	},
	        }
	    },
	    methods: {
	    	setShowMethod(){
	    		var vm = this;

	    		vm.showMethod = true;
	    		vm.showBayar = false;
	    		vm.showBukti = false;
	    		vm.showSuccess = false;
	    	},
			setShowBayar(){
				var vm = this;

				vm.showMethod = false;
				vm.showBayar = true;
				vm.showBukti = false;
				vm.bayar = true;
				vm.showSuccess = false;
			},
			setShowBukti(){
	    		var vm = this;

	    		vm.showMethod = false;
	    		vm.showBayar = false;
	    		vm.showBukti = true;
	    		vm.showSuccess = false;
	    	},
	    	setShowSuccess(){
	    		var vm = this;

	    		vm.showMethod = false;
	    		vm.showBayar = false;
	    		vm.showBukti = false;
	    		vm.showSuccess = true;
	    	},

			change(){
				var vm = this;

				vm.changeMethods = true;
				vm.method_id = '';
			},

			changeImage($event){
	    		var vm = this;

	    		vm.formBukti.bukti = $event.target.files[0];
                if(typeof vm.formBukti.bukti != 'undefined'){
                    var oFReader = new FileReader();
                    oFReader.readAsDataURL(vm.formBukti.bukti);
                 
                    oFReader.onload = function(oFREvent) {
                        $('.images').css('background-image', 'url(' + oFREvent.target.result + ')');
                    };
                }
	    	},

	    	methodSelected(id){
	    		var vm = this;

	    		if(!vm.bayar){
	    			vm.method_id = id;
	    			vm.formData = {
	    				method: {},
		        		user: {},
		        		courses: {},
		        		user_id: vm.$auth.user().id,
		        		method_id: id,
		        		courses_id: vm.dataCourses.id,
		        		discount: '0',
		        		total: vm.dataCourses.price,
		        	}
	    		}else{
	    			if(vm.changeMethods){
		    			vm.method_id = id;
	    			}
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

	    		var status = ['none', 'cancel', 'pending'];
	    		vm.$http({
	    			url: `${ vm.apiUrl }/courses/${ vm.$route.params.uuidCourses }/auth`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.dataCourses = res.data.data;
	    			vm.cekOrder(vm.dataCourses.uuid);
	    			if(!status.includes(res.data.payment)){
	    				vm.$router.push({ path: `/profile` });
	    			}
	    		}).catch((error)=>{
	    			// error
	    		});
	    	},

	    	cekOrder(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/payment/${ uuid }/cek`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			if(res.data.status){
	    				vm.formData = res.data.data;
	    				vm.method_id = vm.formData.method_id;
		    			vm.setShowBayar();
	    			}
	    		}).catch((err)=>{
	    			// error
	    		});
	    	},
	    	createOrder(){
	    		var vm = this;

	    		Aropex.btnLoad('.btn-reload', true);
	    		vm.$http({
	    			url: `${ vm.apiUrl }/payment/order`,
	    			method: 'POST',
	    			data: vm.formData,
	    		}).then((res)=>{
	    			vm.setShowBayar();
	    			Aropex.btnLoad('.btn-reload', false);
	    		}).catch((err)=>{
	    			Aropex.btnLoad('.btn-reload', false);
	    		});
	    	},
	    	changeMethod(){
	    		var vm = this;

	    		Aropex.btnLoad('.btn-simpan', true);
	    		vm.$http({
	    			url: `${ vm.apiUrl }/payment/${ vm.formData.uuid }/method`,
	    			method: 'POST',
	    			data: { method_id: vm.method_id },
	    		}).then((res)=>{
	    			vm.formData = res.data.data;
	    			vm.changeMethods = false;
	    			Aropex.btnLoad('.btn-simpan', false);
	    		}).catch((err)=>{
	    			Aropex.btnLoad('.btn-simpan', false);
	    		});
	    	},
	    	buktiOrder(){
	    		var vm = this;

	    		var urls = `${ vm.apiUrl }/payment/${ vm.formData.uuid }/bukti`;

	    		Aropex.btnLoad('.btn-submit', true);
	    		let formData = new FormData($("#form-bukti")[0]);
                vm.axios.post(urls, formData, {headers: {'content-type': 'multipart/form-data'}}).then((res) => {
	    			Aropex.btnLoad('.btn-submit', false);
	    			vm.setShowSuccess();
	    		}).catch((err)=>{
	    			Aropex.btnLoad('.btn-submit', false);
	    		});
	    	},
	    },
	    mounted(){
	    	var vm = this;

	    	vm.getMethod();
	    	vm.getCourses();
	    }
	}
</script>