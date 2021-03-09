<template>
	<div>
		<div class="page-one">
			<div class="main-page">
				<div class="body-text">
					<div class="body-text-title">
						<div>Automated Online Purchases</div>
					</div>
					<div class="body-text-category">
						TRUSTED | EASY | CHEAP
					</div>
					<div class="body-text-subtitle">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</div>
				</div>
				<div class="body-ilustration" align="center">
					<img style="padding: 60px 0px" width="350" src="/assets/images/ilustration/coding.png">
					<div class="sub-ilustration" style="left: -50px; top: -50px">
						<i class="fa fa-play-circle-o"></i>
						<span>Video</span>
					</div>
					<div class="sub-ilustration" style="right: -120px; top: 100px">
						<i class="fa fa-paint-brush"></i>
						<span>Soal</span>
					</div>
					<div class="sub-ilustration" style="left: -120px; bottom: 0px">
						<i class="fa fa-comments-o"></i>
						<span>Chat</span>
					</div>
				</div>
			</div>

			<div class="modal" id="modal-login" tabindex="-1" role="dialog">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="login-modal">
							<div class="login-header">
								<div class="title">Login</div>
								<div class="subtitle">Masuk untuk melanjutkan belajar</div>
							</div>
							<div class="login-body">
								<form class="form">
									<div class="form-head">
										<div class="form-group">
											<div class="input-group">
												<span class="input-icon">
													<i class="fa fa-user"></i>
												</span>
												<input type="text" name="email" placeholder="Email">
											</div>
										</div>
										<div class="form-group">
											<div class="input-group">
												<span class="input-icon">
													<i class="fa fa-key"></i>
												</span>
												<input type="text" name="password" placeholder="Password">
											</div>
										</div>
										<div class="forgot">Lupa Password?</div>
									</div>
									<div class="form-footer" align="right">
										<button class="btn btn-md bg-default">
											Masuk Akun Saya
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="page-two">
			<div class="courses-filter">
				<div class="filter-search">
					<div class="form-group">
						<div class="input-group">
							<span class="input-icon">
								<i class="fa fa-search"></i>
							</span>
							<input type="text" name="search" placeholder="Search">
						</div>
					</div>
				</div>
				<div class="filter-category">
					<div class="title">
						By Kategori : 
					</div>
					<div class="category-group">
						<div class="category-item">Masak</div>
						<div class="category-item">Akutansi</div>
						<div class="category-item">Mentoring</div>
						<div class="category-item">Back-end</div>
						<div class="category-item">Cyber Scurity</div>
						<div class="category-item">Cryptocurrency</div>
					</div>
				</div>
			</div>
			<div class="courses-list my-3" align="center">
				<div v-for="courses in dataCourses" class="courses-item-shedow d-inline-block m-3">
					<div class="courses-shedow"></div>
					<div class="courses-item card" :style="`background-image: url(${ courses.thumbnile })`">
						<div class="courses-item-information">
							<div class="title">{{ courses.name }}</div>
							<div class="desc">{{ courses.user.name }}</div>
						</div>
						<div class="courses-item-fiture">
							<div class="fiture" title="Sertifikat">
								<i class="fa fa-book"></i>
							</div>
							<div class="fiture" title="Community">
								<i class="fa fa-comments-o"></i>
							</div>
							<div class="fiture" title="Top Courses">
								<i class="fa fa-fire"></i>
							</div>
						</div>
						<div class="courses-type">
							{{ ((courses.price!=0)?`Rp.${ courses.price.rupiah() }`:`FREE`) }}
						</div>
					</div>
				</div>
			</div>
			<div class="courses-more" v-show="showMore">
				<button type="button" class="btn btn-sm bg-default" @click="getCourses(thisPage+1)">
					<i class="fa fa-angle-double-right"></i> See More
				</button>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
    	data() {
	        return {
	        	showMore: false,
	        	thisPage: 0,

	        	coursesFilter: {},

	        	dataCourses: [],
	        }
	    },
	    methods: {
	    	getCourses(page=null){
	    		var vm = this;

	    		var urls = `${ vm.baseUrl }/courses/getdata`;
	    		if(page != null){
	    			urls = `${ vm.baseUrl }/courses/getdata?page=${ page }`;
	    		}

	    		vm.$http({
	    			url: urls,
	    			data: vm.coursesFilter,
	    			method: 'POST',
	    		}).then((res)=>{
	    			if(page == null){
		    			vm.dataCourses = res.data.data.data;
	    			}else{
	    				vm.dataCourses = [...vm.dataCourses, ...res.data.data.data];
	    			}
	    			vm.showMore = ((res.data.length>9)?true:false);
	    			vm.thisPage = res.data.data.current_page;
	    		}).catch((error)=>{

	    		});
	    	},
	    },
	    mounted(){
	    	var vm = this;

	    	vm.getCourses();
	    }
	}
</script>