<template>
	<div>
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
	</div>
</template>

<script>
    export default {
    	data() {
	        return {

	        }
	    },
	    methods: {

	    },
	    mounted(){
	    	var vm = this;
	    }
	}
</script>