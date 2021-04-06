<template>
	<div>
		<div class="space"></div>
		<div class="courses-page">
			<div class="fly">
				<div class="courses-information-box">
					<div class="courses-thumbnail">
						<img :src="dataCourses.thumbnile">
					</div>
					<div class="courses-price">Rp. {{ dataCourses.price.rupiah() }}</div>
					<div class="courses-materi">
						<div class="title">Kursus Materi :</div>
						<ul class="materi-group">
							<template v-for="materigroup in dataCourses.materigroup">
								<li v-for="materi in materigroup.materi" class="materi-item">
									<span>{{ materi.nm_materi }}</span>
									<i class="fa fa-check"></i>
								</li>
							</template>
							<li v-if="dataCourses.count_materi != 0" class="materi-item">
								<span>{{ dataCourses.count_materi }} Kursus {{ ((isPay)?'Lainnya':'Terkunci') }}</span>
								<i class="fa" v-bind:class="((isPay))?'fa-check':'fa-lock'"></i>
							</li>
						</ul>
					</div>
					<div class="courses-action">
						<template v-if="!isPay">
							<template v-if="payment">
								<div class="btn-join" @click="$router.push('/profile')">
									Proses Pembayaran
								</div>
							</template>
							<template v-if="!payment">
								<div class="btn-join" @click="ceked(dataCourses.uuid)">
									Ikut Kelas
								</div>
							</template>
						</template>
						<template v-if="isPay">
							<div class="btn-join" @click="ceked(dataCourses.uuid)">
								Tonton Sekarang
							</div>
						</template>
					</div>
				</div>
				<div class="courses-tool-box d-none d-md-block">
					<div class="title">
						Tools
					</div>
					<div v-for="coursesTool in dataCourses.coursestool" class="box-tool">
						<div class="tool-image">
							<img :src="coursesTool.tool.image">
						</div>
						<div class="tool-info">
							<div class="tool-nama">{{ coursesTool.tool.nm_tool }}</div>
							<div class="tool-download" @click="window.open(coursesTool.tool.link, '_blank');">Download</div>
						</div>
					</div>
				</div>
			</div>
			<div class="courses-information">
				<div class="courses-title">{{ dataCourses.name }}</div>
				<div class="courses-subtitle">{{ dataCourses.subname }}</div>
				<div class="courses-rating-star">
				    <div class="rating-group">
				        <input v-bind:checked="((dataCourses.rating==0)?true:false)" class="rating__input rating__input--none" checked name="5" id="5-0" value="0" type="radio" disabled>
				        <label aria-label="1 star" class="rating__label" for="5-10"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
				        <input v-bind:checked="((dataCourses.rating==1)?true:false)" class="rating__input" name="5" id="5-10" value="1" type="radio" disabled>
				        <label aria-label="2 stars" class="rating__label" for="5-20"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
				        <input v-bind:checked="((dataCourses.rating==2)?true:false)" class="rating__input" name="5" id="5-20" value="2" type="radio" disabled>
				        <label aria-label="3 stars" class="rating__label" for="5-30"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
				        <input v-bind:checked="((dataCourses.rating==3)?true:false)" class="rating__input" name="5" id="5-30" value="3" type="radio" disabled>
				        <label aria-label="4 stars" class="rating__label" for="5-40"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
				        <input v-bind:checked="((dataCourses.rating==4)?true:false)" class="rating__input" name="5" id="5-40" value="4" type="radio" disabled>
				        <label aria-label="5 stars" class="rating__label" for="5-50"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
				        <input v-bind:checked="((dataCourses.rating==5)?true:false)" class="rating__input" name="5" id="5-50" value="5" type="radio" disabled>
				    </div>
					<div class="courses-rating-label">
						<span>{{ `${ dataCourses.rating }.0` }}/5.0</span>
					</div>
				</div>
				<div class="courses-description">
					<div v-html="dataCourses.description"></div>
				</div>
				<div class="courses-learn">
					<div class="learn-title">
						Apa saja yang dipelajari?
					</div>
					<div class="row learn-items">
						<div v-for="learn in dataCourses.courseslearn" class="col-md-6 col-sm-12">
							<div class="learn-item">
								<i class="fa fa-lightbulb-o"></i>
								<div class="learn-text text-justify">{{ learn.text }}</div>
							</div>
						</div>
					</div>
				</div>
				<div class="courses-tool d-block d-md-none">
					<div class="title">
						Tools
					</div>
					<div v-for="coursesTool in dataCourses.coursestool" class="box-tool">
						<div class="tool-image">
							<img :src="coursesTool.tool.image">
						</div>
						<div class="tool-info">
							<div class="tool-nama">{{ coursesTool.tool.nm_tool }}</div>
							<div class="tool-download" @click="window.open(coursesTool.tool.link, '_blank');">Download</div>
						</div>
					</div>
				</div>
				<div class="courses-teacher">
					<div class="teacher-image">
						<img src="/assets/images/avatar-1.png">
					</div>
					<div class="teacher-info">
						<div class="teacher-head">
							<div class="teacher-name">{{ dataCourses.user.name }}</div>
							<div class="teacher-profesi">Web Proggramer</div>
						</div>
						<div class="teacher-desc">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.
						</div>
					</div>
				</div>
				<div class="courses-comment" v-if="dataCourses.coursesreview.length > 0">
					<div class="title">Everyone's reviews</div>
					<div class="carousel slide" data-ride="carousel">
						<div class="carousel-inner">
							<template v-for="review in dataCourses.coursesreview">
								<div class="comment-item carousel-item active">
									<div class="comment-box">
										<div class="comment-info">
											<div class="comment-image">
												<img :src="review.user.profile.image">
											</div>
											<div class="comment-nama">{{ review.user.name }}</div>
											<div class="comment-date">{{ review.tanggal }}</div>
										</div>
										<div class="comment-side">
											<div class="side-top">
												<div class="comment-rating">
													<div class="rating-group">
														<input v-bind:checked="((review.rate==0)?true:false)" class="rating__input rating__input--none" checked name="rating2" id="rating2-0" value="0" type="radio" disabled>
												        <label aria-label="1 star" class="rating__label" for="rating2-10"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
												        <input v-bind:checked="((review.rate==1)?true:false)" class="rating__input" name="rating2" id="rating2-10" value="1" type="radio" disabled>
												        <label aria-label="2 stars" class="rating__label" for="rating2-20"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
												        <input v-bind:checked="((review.rate==2)?true:false)" class="rating__input" name="rating2" id="rating2-20" value="2" type="radio" disabled>
												        <label aria-label="3 stars" class="rating__label" for="rating2-30"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
												        <input v-bind:checked="((review.rate==3)?true:false)" class="rating__input" name="rating2" id="rating2-30" value="3" type="radio" disabled>
												        <label aria-label="4 stars" class="rating__label" for="rating2-40"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
												        <input v-bind:checked="((review.rate==4)?true:false)" class="rating__input" name="rating2" id="rating2-40" value="4" type="radio" disabled>
												        <label aria-label="5 stars" class="rating__label" for="rating2-50"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
												        <input v-bind:checked="((review.rate==5)?true:false)" class="rating__input" name="rating2" id="rating2-50" value="5" type="radio" disabled>
												    </div>
												    <div class="comment-verifed" title="Verifed User">
												    	<i class="fa fa-check-circle-o"></i>
												    </div>
												</div>
											</div>
											<div class="side-bottom">
												{{ review.description }}
											</div>
										</div>
									</div>
								</div>
							</template>
						</div>
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
	        	dataCourses: {
	        		coursesreview: [],
	        		courseslearn: [],
	        		coursestool: [],
	        		price: '0',
	        		user: {
	        			name: '',
	        		},
	        	},

	        	isPay: false,
	        	payment: '',
	        }
	    },
	    methods: {
	    	ceked(uuid){
	    		var vm = this;

	    		if(localStorage.getItem("level_id") != null){
	    			if(!vm.isPay){
		    			vm.$router.push({ path: `/payment/${ uuid }`});
	    			}else{
	    				vm.$router.push({ path: `/courses/play/${ uuid }`});
	    			}
	    		}else{
	    			$('#modal-login').modal('show');
	    		}
	    	},
	    	getDataCourses(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.baseUrl }/courses/${ uuid }/getdata`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.dataCourses = res.data.data;
	    			vm.isPay = ((res.data.payment=='success')?true:false);
	    		}).catch((error)=>{
	    			// error
	    		});
	    	},
	    	getDataCoursesAuth(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/courses/${ uuid }/auth`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.dataCourses = res.data.data;
	    			vm.isPay = ((res.data.payment=='success')?true:false);
	    			vm.payment = ((res.data.payment=='procces')?true:false);
	    		}).catch((error)=>{
	    			// error
	    		});
	    	}
	    },
	    mounted(){
	    	var vm = this;

    		vm.isPay = false;
    		vm.payment = false;
	    	if(localStorage.getItem("level_id") != null){
	    		vm.getDataCoursesAuth(vm.$route.params.uuidCourses);
	    	}else{
		    	vm.getDataCourses(vm.$route.params.uuidCourses);
	    	}
	    }
	}
</script>

<style type="text/css">
	.custom-star{
		color: #FFA500;
		font-size: 18px;
		margin: 0px 2px;
	}
</style>