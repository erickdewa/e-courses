<template>
	<div>
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

	    	Aropex.video('aro-video', '/assets/images/bg/bg-01.jpg');
	    }
	}
</script>