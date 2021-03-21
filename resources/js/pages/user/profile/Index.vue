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
					<div class="courses-item-shedow d-inline-block m-3">
						<div class="courses-item card" style="background-image: url(/assets/images/bg/single1.jpg)">
							<div class="courses-item-information">
								<div class="title">Single Room</div>
								<div class="desc">Enjoy Our Single Room</div>
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
					</div>
					<div class="courses-item-shedow d-inline-block m-3">
						<div class="courses-item card" style="background-image: url(/assets/images/bg/single1.jpg)">
							<div class="courses-item-information">
								<div class="title">Single Room</div>
								<div class="desc">Enjoy Our Single Room</div>
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
					</div>
					<div class="courses-item-shedow d-inline-block m-3">
						<div class="courses-item card" style="background-image: url(/assets/images/bg/single1.jpg)">
							<div class="courses-item-information">
								<div class="title">Single Room</div>
								<div class="desc">Enjoy Our Single Room</div>
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

	        }
	    },
	    methods: {
	    	socialMedia(url){
	    		var vm = this;

	    		window.open(url, '_blank');
	    	},
	    },
	    mounted(){
	    	var vm = this;
	    },
    }
</script>