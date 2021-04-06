<template>
	<div>
		<div id="courses-video-box" class="courses-video-box">
			<div class="video-player">
				<div id="aro-video" :data-video="videoId"></div>
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
	</div>
</template>

<script>
    export default {
    	props: ['videoId', 'change'],
    	data() {
	        return {
	        	thumbnail: '/assets/images/bg/bg-01.jpg',
	        	player: '',
	        }
	    },
	    methods: {
	    	StopVideo(){
	    		var vm = this;

	    		if(vm.player != ''){
	        		if(typeof vm.player != 'undefined'){
			    		vm.player.stopVideo();
			    	}
	    		}
	    	},
	    	reloadPlayer(){
	    		var vm = this;

		    	setTimeout(function(){
			    	vm.thumbnail = vm.$parent.thumbnail;
			    	vm.player = Aropex.video('aro-video', vm.thumbnail);
			    	if(vm.change){
			    		vm.player.loadVideoById(vm.videoId);
			    	}
		    	}, 1000);
	    	},
	    },
	    mounted(){
	    	var vm = this;

	    	if(vm.change){
	    		vm.StopVideo();
	    	}
	    	vm.reloadPlayer();
	    }
	}
</script>