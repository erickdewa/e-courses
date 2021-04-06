<template>
	<div>
		<div class="row" style="padding: 25px 10px;">
			<div class="col-md-4">
				<div class="box-dashboard bg-dash-one">
					<div class="box-info">
						<div class="box-info-number">{{ formData.user }}</div>
						<div class="box-info-text">Total User</div>
					</div>
					<div class="box-icon">
						<i class="fa fa-user-o"></i>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="box-dashboard bg-dash-two">
					<div class="box-info">
						<div class="box-info-number">{{ formData.courses }}</div>
						<div class="box-info-text">Total Kursus</div>
					</div>
					<div class="box-icon">
						<i class="fa fa-play"></i>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="box-dashboard bg-dash-three">
					<div class="box-info">
						<div class="box-info-number">{{ formData.transaction }}</div>
						<div class="box-info-text">Total Transaksi</div>
					</div>
					<div class="box-icon">
						<i class="fa fa-credit-card"></i>
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
	        	formData: {
	        		user: 0,
					courses: 0,
					transaction: 0,
	        	},
	        }
	    },
	    methods: {
	    	getData(){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/dashboard/getdata`,
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

	    	vm.getData();
	    }
    }
</script>
<style type="text/css" scoped>
	.bg-dash-one{
		background: rgb(25,227,216);
		background: linear-gradient(90deg, rgba(25,227,216,1) 25%, rgba(70,156,228,1) 75%);
	}
	.bg-dash-two{
		background: rgb(245,78,160);
		background: linear-gradient(90deg, rgba(245,78,160,1) 25%, rgba(254,115,118,1) 75%);
	}
	.bg-dash-three{
		background: rgb(65,225,150);
		background: linear-gradient(90deg, rgba(65,225,150,1) 25%, rgba(59,179,181,1) 75%);
	}

	.box-dashboard{
		color: #FFFFFF;
		display: grid;
		grid-template-columns: 60% 40%;
		width: 100%;
		border-radius: 5px;
	}
	.box-dashboard .box-info{
		padding: 25px;
	}
	.box-dashboard .box-info .box-info-number{
		font-size: 25px;
		font-weight: 600;
	}
	.box-dashboard .box-info .box-info-text{
		font-size: 17px;
	}
	.box-dashboard .box-icon{
		margin-top: 25px;
		text-align: center;
		font-size: 40px;
	}
</style>