<template>
	<div>
		<div id="modal-review" class="modal" tabindex="-1" role="dialog">
			<div class="modal-dialog modal-md" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Review Kursus</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<form id="FormTambah" class="form" @submit.prevent="simpanData()" autocomplete="off">
							<div class="form-group">
								<label>Rate</label>
								<div>
									<div class="rating-group">
								        <input class="rating__input rating__input--none" checked name="rate" required id="rating2-0" value="0" type="radio">
								        <label aria-label="1 star" class="rating__label" for="rating2-10"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
								        <input class="rating__input" name="rate" required id="rating2-10" value="1" type="radio">
								        <label aria-label="2 stars" class="rating__label" for="rating2-20"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
								        <input class="rating__input" name="rate" required id="rating2-20" value="2" type="radio">
								        <label aria-label="3 stars" class="rating__label" for="rating2-30"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
								        <input class="rating__input" name="rate" required id="rating2-30" value="3" type="radio">
								        <label aria-label="4 stars" class="rating__label" for="rating2-40"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
								        <input class="rating__input" name="rate" required id="rating2-40" value="4" type="radio">
								        <label aria-label="5 stars" class="rating__label" for="rating2-50"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
								        <input class="rating__input" name="rate" required id="rating2-50" value="5" type="radio">
								    </div>
								</div>
							</div>
							<div class="form-group">
								<textarea class="form-control" rows="5" required name="description" v-modal="formData.description" placeholder="Comment"></textarea>
							</div>
							<div class="mt-5" align="right">
								<button type="submit" form="FormTambah" class="btn btn-success btn-sm btn-submit">
									<i class="fa fa-save"></i> Simpan
								</button>
							</div>
						</form>
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
	        		courses_id: '',
	        		rate: '5',
	        		description: '',
	        	},

	        	courses_id: '',
	        }
	    },
	    methods: {
	    	showReview(id){
	    		var vm = this;

	    		$('#modal-review').modal('show');
	    		vm.courses_id = id;
	    	},
	    	hideReview(){
	    		var vm = this;

	    		$('#modal-review').modal('hide');
	    	},

	    	simpanData(){
	    		var vm = this;

	    		var urls = `${ vm.apiUrl }/courses/review/create`;

	    		Aropex.btnLoad('.btn-submit', true);
	    		let formData = new FormData($("#FormTambah")[0]);
	    		formData.append('courses_id', vm.courses_id);
                vm.axios.post(urls, formData, {headers: {'content-type': 'multipart/form-data'}}).then((res) => {
                	vm.hideReview();
                	Aropex.btnLoad('.btn-submit', false);
		    	}).catch((error) => {
		    		Aropex.btnLoad('.btn-submit', false);
		    	});
	    	},
	    },
	    mounted(){
	    	var vm = this;
	    }
	}
</script>