<template>
	<div>
		<form class="form" id="FormTambah" enctype="multipart/form-data" @submit.prevent="simpanData()" autocomplete="off">
			<div class="form-body">
				<div class="row">
					<div class="col-md-4 col-12">
						<select class="form-control star-select" name="rate" required v-model="formData.rate" placeholder="Rating">
							<option value="1">Star 1 </option>
							<option value="2">Star 2</option>
							<option value="3">Star 3</option>
							<option value="4">Star 4</option>
							<option value="5">Star 5</option>
						</select>
					</div>
					<div class="col-md-3 col-6">
						<input type="text" readonly class="form-control datepickers tgl_mulai" placeholder="Pilih Tanggal" name="tanggal" v-model="formData.tanggal" data-date-format="yyyy-mm-dd">
					</div>
					<div class="col-md-3 col-6">
						<input type="text" readonly class="form-control datepickers tgl_akhir" placeholder="Pilih Tanggal" name="tanggal" v-model="formData.tanggal" data-date-format="yyyy-mm-dd">
					</div>
					<div class="col-md-2 col-12">
						<button type="submit" class="btn btn-success btn-submit" style="width: 100%">
							<i class="fa fa-search"></i> Search
						</button>
					</div>
				</div>
				<div class="row comment-list">
					<div class="comment-item">
						<div class="comment-head">
							<img src="/img/tool/default.png">
							<div class="comment-user">
								<div class="nama">Erick Pranata</div>
								<div class="tanggal">02 Januari 2021</div>
							</div>
							<div class="comment-rating">
								<div class="rating-group">
							        <input class="rating__input rating__input--none" checked name="rating2" id="rating2-0" value="0" type="radio" disabled>
							        <label aria-label="0.5 stars" class="rating__label rating__label--half" for="rating2-05"><i class="rating__icon rating__icon--star fa fa-star-half"></i></label>
							        <input class="rating__input" name="rating2" id="rating2-05" value="0.5" type="radio" disabled>
							        <label aria-label="1 star" class="rating__label" for="rating2-10"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
							        <input class="rating__input" name="rating2" id="rating2-10" value="1" type="radio" disabled>
							        <label aria-label="1.5 stars" class="rating__label rating__label--half" for="rating2-15"><i class="rating__icon rating__icon--star fa fa-star-half"></i></label>
							        <input class="rating__input" name="rating2" id="rating2-15" value="1.5" type="radio" disabled>
							        <label aria-label="2 stars" class="rating__label" for="rating2-20"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
							        <input class="rating__input" name="rating2" id="rating2-20" value="2" type="radio" disabled>
							        <label aria-label="2.5 stars" class="rating__label rating__label--half" for="rating2-25"><i class="rating__icon rating__icon--star fa fa-star-half"></i></label>
							        <input class="rating__input" name="rating2" id="rating2-25" value="2.5" type="radio" checked>
							        <label aria-label="3 stars" class="rating__label" for="rating2-30"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
							        <input class="rating__input" name="rating2" id="rating2-30" value="3" type="radio" disabled>
							        <label aria-label="3.5 stars" class="rating__label rating__label--half" for="rating2-35"><i class="rating__icon rating__icon--star fa fa-star-half"></i></label>
							        <input class="rating__input" name="rating2" id="rating2-35" value="3.5" type="radio" disabled>
							        <label aria-label="4 stars" class="rating__label" for="rating2-40"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
							        <input class="rating__input" name="rating2" id="rating2-40" value="4" type="radio" disabled>
							        <label aria-label="4.5 stars" class="rating__label rating__label--half" for="rating2-45"><i class="rating__icon rating__icon--star fa fa-star-half"></i></label>
							        <input class="rating__input" name="rating2" id="rating2-45" value="4.5" type="radio" disabled>
							        <label aria-label="5 stars" class="rating__label" for="rating2-50"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
							        <input class="rating__input" name="rating2" id="rating2-50" value="5" type="radio" disabled>
							    </div>
							</div>
						</div>
						<div class="comment-body">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
						</div>
					</div>
					<div class="comment-item">
						<div class="comment-head">
							<img src="/img/tool/default.png">
							<div class="comment-user">
								<div class="nama">Erick Pranata</div>
								<div class="tanggal">02 Januari 2021</div>
							</div>
						</div>
						<div class="comment-body">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
	        		rate: '',
	        		tanggal: '',
	        	},
	        	dataTools: []
	        }
	    },
	    methods: {
	    	getData(){

	    	},

	    	tanggal(){
	    		var vm = this;

	    		$(".datepickers").datepicker({
                    rtl: false,
                    todayHighlight: !0,
                    orientation: "bottom left",
                    format: 'yyyy-mm-dd',
                    templates: {
                        leftArrow: '<i class="la la-angle-left"></i>',
                        rightArrow: '<i class="la la-angle-right"></i>'
                    },
                })

                $(".tgl_mulai").on('changeDate', function(selected) {
			        var startDate = new Date(selected.date.valueOf());
			        $(".tgl_akhir").datepicker('setStartDate', startDate);
			        if($(".tgl_mulai").val() > $(".tgl_akhir").val()){
			          $(".tgl_akhir").val($(".tgl_mulai").val());
			        }
			    });
	    	},
	    	select2(){
	    		var vm = this;

	    		$(".star-select").select2({
                    placeholder: "Pilih",
                    width: '100%'
                }).val(vm.formData.rate).on('change', function(val) {
                    vm.formData.rate = $(this).val();
                });
	    	}
	    },
	    mounted(){
	    	var vm = this;

	    	vm.select2();
	    	vm.tanggal();
	    }
    }
</script>
<style type="text/css" scoped>
	.comment-list{
		margin-top: 25px;
		justify-content: center;
		vertical-align: top;
	}
	.comment-list .comment-item{
		background: #FFFFFF;
		border: 1px solid #F7F7F7;
		display: inline-block;
		margin: 5px;
		width: 48%;
		border-radius: 5px;
	}
	.comment-item .comment-head{
		background: #F7F7F7;
		padding: 10px;
		display: flex;
	}
	.comment-head img{
		width: 50px;
		height: 50px;
		border-radius: 25%;
	}
	.comment-user{
		display: inline-block;
		width: 70%;
		margin-left: 10px;
		margin-top: 5px;
	}
	.comment-user .nama{
		color: #5488A5;
		font-size: 15px;
		font-weight: 600;
	}
	.comment-user .tanggal{
		color: #5488A5;
		font-size: 13px;
		font-weight: 400;
	}
	.comment-item .comment-body{
		color: #5488A5;
		padding: 10px;
		font-weight: 13px;
		font-weight: 400;
	}

	.comment-rating{
		display: inline-block;
		text-align: right;
		padding-top: 10px;
		width: 30%;
	}
	.rating-group {
		display: inline-flex;
	}
	.rating__icon {
		pointer-events: none;
	}
	.rating__input {
		position: absolute !important;
		left: -9999px !important;
	}
	.rating__label {
		font-size: 18px!important;
		cursor: pointer;
		padding: 0 0.1em;
		font-size: 2rem;
	}
	.rating__label--half {
		padding-right: 0;
		margin-right: -0.6em;
		z-index: 1;
	}
	.rating__icon--star {
		color: orange;
	}
	.rating__icon--none {
		color: #eee;
	}
	.rating__input--none:checked + .rating__label .rating__icon--none {
		color: red;
	}
	.rating__input:checked ~ .rating__label .rating__icon--star {
		color: #ddd;
	}
	.rating-group.active:hover .rating__label .rating__icon--star,
	.rating-group.active:hover .rating__label--half .rating__icon--star {
		color: orange;
	}
	.rating__input:hover ~ .rating__label .rating__icon--star,
	.rating__input:hover ~ .rating__label--half .rating__icon--star {
		color: #ddd;
	}
	.rating-group:hover .rating__input--none:not(:hover) + .rating__label .rating__icon--none {
		color: #eee;
	}
	.rating__input--none:hover + .rating__label .rating__icon--none {
		color: red;
	}
	@media screen and (max-width: 720px) {
		.comment-list .comment-item{
			width: 100%;
		}
	}
</style>