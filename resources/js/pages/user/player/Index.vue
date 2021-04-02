<template>
	<div>
		<div class="courses-page">
			<div class="courses-play container">
				<template v-for="(materigroup, i) in dataCourses.materigroup">
					<template v-if="((materiGroupUuid==null)?(i==0):(materigroup.uuid==materiGroupUuid))" v-for="(materi, j) in materigroup.materi">
						<template v-if="((materiGroupUuid==null)?(j==0):(materi.uuid==materiUuid))">
							<div v-if="show" class="courses-player">
								<Player ref="player" :change="change" :videoId="materi.video"></Player>
								<div class="courses-play-header">
									<ul class="ul-header">
										<li class="li-header tabbed-head active" data-event="tabbed" data-target="#card-information">
											<div class="header-title">Information</div>
										</li>
										<li class="li-header tabbed-head" data-event="tabbed" data-target="#card-comment">
											<div class="header-title">Comment</div>
										</li>
									</ul>
								</div>
								<div class="courses-play-body">
									<div id="card-information" class="tabbed-card active">
										<div class="courses-title">
											Bagian {{ i+=1 }}: Intro - {{ materi.nm_materi }}
										</div>
										<div class="courses-description" v-html="dataCourses.description"></div>
										<div class="courses-created">
											<div class="label">
												<div class="title">Creator</div>: {{ dataCourses.user.name }}
											</div>
											<div class="label">
												<div class="title">Created At</div>: {{ dataCourses.tanggal }}
											</div>
										</div>
									</div>
									<div id="card-comment" class="tabbed-card">
										comment
									</div>
								</div>
							</div>
						</template>
					</template>
				</template>
				<div class="courses-player-list">
					<SideBar></SideBar>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import SideBar from './components/Sidebar'
	import Player from './components/Player'
    export default {
    	components: {
    		SideBar, Player
    	},
    	data() {
	        return {
	        	show: true,
	        	change: false,
	        	dataCourses: {},

	        	thumbnail: '',
	        	materiGroupUuid: '',
				materiUuid: '',
	        }
	    },
	    methods: {
	    	getDataCoursesAuth(uuid){
	    		var vm = this;

	    		vm.$http({
	    			url: `${ vm.apiUrl }/courses/${ uuid }/auth`,
	    			method: 'GET',
	    		}).then((res)=>{
	    			vm.dataCourses = res.data.data;

	    			vm.getCookie();
			    	if(vm.materigroup == null){
			    		vm.setCookie();
			    	}
	    		}).catch((error)=>{
	    			// error
	    		});
	    	},
	    	changeVideo(thumbnail, materiGroupUuid, materiUuid){
	    		var vm = this;

	    		vm.setCookie(thumbnail, materiGroupUuid, materiUuid);
	    		vm.getCookie();
	    		vm.change = true;
	    		vm.show = false;
	    		setTimeout(function(){
	    			vm.show = true;
	    		}, 100);
	    	},
	    	setCookie(thumbnail = null, materiGroupUuid = null, materiUuid = null){
	    		var vm = this;
	    		
	    		if(thumbnail == null && materiGroupUuid == null && materiUuid == null){
	    			localStorage.setItem("thumbnail", vm.dataCourses.materigroup[0].materi[0].thumbnail);
		    		localStorage.setItem("materiGroupUuid", vm.dataCourses.materigroup[0].uuid);
		    		localStorage.setItem("materiUuid", vm.dataCourses.materigroup[0].materi[0].uuid);
	    		}else{
	    			localStorage.setItem("thumbnail", thumbnail);
	    			localStorage.setItem("materiGroupUuid", materiGroupUuid);
		    		localStorage.setItem("materiUuid", materiUuid);
	    		}
	    	},
	    	getCookie(){
	    		var vm = this;

	    		vm.materiGroupUuid = localStorage.getItem("materiGroupUuid");
	    		vm.materiUuid = localStorage.getItem("materiUuid");
	    		vm.thumbnail = localStorage.getItem("thumbnail");
	    	},
	    },
	    mounted(){
	    	var vm = this;

	    	$('.tabbed-head').on('click', function(){
				Aropex.event(this, false);
			})

	    	vm.getDataCoursesAuth(vm.$route.params.uuidCourses);
	    }
	}
</script>