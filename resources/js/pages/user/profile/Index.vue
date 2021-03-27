<template>
	<div>
		<div class="profile-page">
			<div class="profile-image">
				<div class="profile-image-shedow"></div>
				<img :src="$parent.profile.image">
			</div>
			<div class="profile-infomation">
				<div class="profile-nama">{{ $parent.profile.nm_full }}</div>
				<div class="profile-alamat">{{ $parent.profile.address }}</div>
				<div class="profile-bio">{{ $parent.profile.bio }}</div>
			</div>
			<div class="profile-button">
				<div class="profile-social">
					<div class="profile-socialmedia">
						<div class="social-item" @click="socialMedia($parent.profile.twitter)">
							<i class="fa fa-twitter"></i>
						</div>
						<div class="social-item" @click="socialMedia($parent.profile.facebook)">
							<i class="fa fa-facebook"></i>
						</div>
						<div class="social-item" @click="socialMedia($parent.profile.instagram)">
							<i class="fa fa-instagram"></i>
						</div>
						<div class="social-item" @click="socialMedia($parent.profile.github)">
							<i class="fa fa-github"></i>
						</div>
					</div>
				</div>
				<div class="button-edit">
					<button type="button" class="btn btn-sm btn-warning" @click="$router.push({ path: '/profile/edit' })">
						<i class="fa fa-edit"></i> Edit
					</button>
					<button type="button" class="btn btn-sm btn-info">
						<i class="fa fa-sign-out"></i> Logout
					</button>
				</div>
			</div>
		</div>
		<div class="courses-page">
			<div class="courses-profile-title">
				<span>Kursus yang anda ikuti :</span>
			</div>
			<div class="courses-profile-list">
				<div class="courses-list my-3" align="center">
					<div v-for="data in dataCourses" class="courses-item-shedow cursor-pointer d-inline-block m-3">
						<router-link :to="`/courses/play/${ data.uuid }`">
							<div class="courses-item card" :style="`background-image: url(${ data.thumbnile })`">
								<div class="courses-item-information">
									<div class="title">{{ data.name }}</div>
									<div class="desc">{{ data.subname }}</div>
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
							</div>
						</router-link>
					</div>
					<div v-if="dataCourses.length == 0" class="notfound">
						<span>Coursus tidak ditemukan</span>
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
	        	dataCourses: [],
	        }
	    },
	    methods: {
	    	socialMedia(url){
	    		var vm = this;

	    		window.open(url, '_blank');
	    	},

	    	getMyCourses(){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/courses/my/getcourses`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.dataCourses = res.data.data;
	    		}).catch((error)=>{
	    			// error
	    		})
	    	},
	    },
	    mounted(){
	    	var vm = this;
	    	vm.getMyCourses();
	    },
    }
</script>