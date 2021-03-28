<template>
	<div>
		<div class="courses-page">
			<div class="courses-play container">
				<div class="courses-player">
					<div id="courses-status"></div>
					<div id="courses-video-box" class="courses-video-box">
						<div class="video-player">
							<div id="aro-video" data-video="M7lc1UVf-VE"></div>
						</div>
						<div class="video-control">
							<div class="btn-control-left" align="center">
								<div class="btn btn-circle btn-info btn-play">
									<i class="fa fa-play"></i>
								</div>
								<div class="btn btn-circle btn-info btn-pause" style="display: none;">
									<i class="fa fa-pause"></i>
								</div>
							</div>
							<div class="range-duration">
								<input type="range" class="duration" value="0">
							</div>
							<div class="number-duration">
								<span class="current-time">00:00</span>
								<span>/</span>
								<span class="duration-time">00:00</span>
							</div>
							<div class="btn-control-right" align="center">
								<div id="btn-fullscreen" class="btn btn-sm btn-info btn-fullscreen">
									<i class="fa fa-arrows-alt"></i>
								</div>
							</div>
						</div>
					</div>
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
					<ul class="ul-parent">
						<li class="li-parent">
							<div class="item-materigroup">
								<div class="text-group">
									<div class="text">Bagian 1: Introduction</div>
									<div class="subtext">5/10</div>
								</div>
								<div class="icon-drop">
									<i class="fa fa-angle-down"></i>
								</div>
							</div>
							<ul class="ul-child">
								<li class="li-child">
									<div class="item-materi">
										<div class="text-group">
											<div class="text">1. What is laravel?</div>
											<div class="subtext"><i class="fa fa-play-circle-o"></i> 15 minute</div>
										</div>
									</div>
								</li>
								<li class="li-child">
									<div class="item-materi">
										<div class="text-group">
											<div class="text">2. What is VueJs?</div>
											<div class="subtext"><i class="fa fa-play-circle-o"></i> 5 minute</div>
										</div>
									</div>
								</li>
							</ul>
						</li>
						<li class="li-parent">
							<div class="item-materigroup">
								<div class="text-group">
									<div class="text">Bagian 2: Instalation</div>
									<div class="subtext">5/10</div>
								</div>
								<div class="icon-drop">
									<i class="fa fa-angle-down"></i>
								</div>
							</div>
							<ul class="ul-child active">
								<li class="li-child">
									<div class="item-materi">
										<div class="text-group">
											<div class="text">1. What is laravel?</div>
											<div class="subtext"><i class="fa fa-play-circle-o"></i> 15 minute</div>
										</div>
									</div>
								</li>
								<li class="li-child">
									<div class="item-materi">
										<div class="text-group">
											<div class="text">2. What is VueJs?</div>
											<div class="subtext"><i class="fa fa-play-circle-o"></i> 5 minute</div>
										</div>
									</div>
								</li>
							</ul>
						</li>
					</ul>
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
	    	Aropex.video('aro-video', '/assets/images/bg/bg-01.jpg');
	    }
	}
</script>