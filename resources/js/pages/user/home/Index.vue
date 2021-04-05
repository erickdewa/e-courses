<template>
	<div>
		<div class="page-one">
			<div class="main-page">
				<div class="body-text">
					<div class="body-text-title">
						<div>Kursus Video Online</div>
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
					<img style="padding: 60px 0px" width="350" :src="dataWeb.ilustration">
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
		</div>
		<div class="page-two">
			<div class="courses-filter">
				<div class="filter-search">
					<div class="form-group">
						<div class="input-group">
							<span class="input-icon">
								<i class="fa fa-search"></i>
							</span>
							<input type="text" name="search" v-model="coursesFilter.search" @input="getCourses()" placeholder="Search">
						</div>
					</div>
				</div>
				<div class="filter-category">
					<div class="title">
						By Kategori : 
					</div>
					<div class="category-group">
						<div class="category-item" @click="clickSkill('')">All</div>
						<template v-for="(skill, index) in dataSkill" v-if="index < 10">
							<div class="category-item" @click="clickSkill(skill.id)">{{ skill.nm_skill }}</div>
						</template>
					</div>
				</div>
			</div>
			<div class="courses-list my-3" align="center">
				<div v-for="courses in dataCourses" class="courses-item-shedow d-inline-block m-3">
					<router-link :to="`/courses/${ courses.uuid }`">
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
					</router-link>
				</div>
				<div v-if="dataCourses.length == 0" class="notfound">
						<span>Coursus tidak ditemukan</span>
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

	        	dataWeb: {},
	        	coursesFilter: {
	        		search: '',
	        		skill_id: '',
	        	},

	        	dataCourses: [],
	        }
	    },
	    methods: {
	    	clickSkill(id){
	    		var vm = this;

	    		vm.coursesFilter.skill_id = id;
	    		vm.getCourses();
	    	},

	    	getCourses: _.debounce(function(page=null){
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
	    	}, 500),

	    	getSkill(){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.baseUrl }/skill/getdatas`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.dataSkill = res.data.data;
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		});
	    	},
	    	getWeb(){
				var vm = this;

				vm.$http({
	    			url: `${ vm.baseUrl }/webconfig/getdata`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.dataWeb = res.data.data;
	    		}).catch((err)=>{
	    			toastr.error(err.response.data.message, 'Error');
	    		});
			},
	    },
	    mounted(){
	    	var vm = this;

	    	vm.getWeb();
	    	vm.getSkill();
	    	vm.getCourses();
	    }
	}
</script>