<template>
	<div>
		<div class="courses-page">
			<div class="courses-play container">
				<div class="courses-player">
					<div id="courses-status"></div>
					<Player></Player>
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
								Bagian 1: Intro - Laravel For Beginer
							</div>
							<div class="courses-description">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</div>
							<div class="courses-created">
								<div class="label">
									<div class="title">Creator</div>: Erick Dewa
								</div>
								<div class="label">
									<div class="title">Created At</div>: 18 Maret 2021
								</div>
							</div>
						</div>
						<div id="card-comment" class="tabbed-card">
							comment
						</div>
					</div>
				</div>
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
	    		}).catch((error)=>{
	    			// error
	    		});
	    	}
	    },
	    mounted(){
	    	var vm = this;

	    	vm.getDataCoursesAuth(vm.$route.params.uuidCourses);
	    }
	}
</script>