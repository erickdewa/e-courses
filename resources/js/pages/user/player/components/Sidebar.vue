<template>
	<div>
		<ul class="ul-parent">
			<li class="li-parent" v-for="(materigroup, i) in $parent.dataCourses.materigroup">
				<div class="item-materigroup">
					<div class="text-group">
						<div class="text">Bagian {{ i+=1 }}: {{ materigroup.nm_materi }}</div>
						<div class="subtext">5/10</div>
					</div>
					<div class="icon-drop">
						<i class="fa fa-angle-down"></i>
					</div>
				</div>
				<ul class="ul-child" v-bind:class="(($parent.materiGroupUuid==null)?((i==0)?'active':''):((materigroup.uuid==$parent.materiGroupUuid)?'active':''))">
					<template v-for="(materi, j) in materigroup.materi" v-if="materi.materigroup_id == materigroup.id">
						<li class="li-child active" @click="$parent.setCookie(materi.thumbnail, materigroup.uuid, materi.uuid)">
							<div class="item-materi">
								<div class="text-group">
									<div class="text">{{ j+=1 }}. {{ materi.nm_materi }}</div>
									<div class="subtext"><i class="fa fa-play-circle-o"></i> 15 minute</div>
								</div>
							</div>
						</li>
					</template>
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
	    	loadJsElement(){
	    		var vm = this;

	    		setTimeout(function(){
			    	$('.li-parent').on('click', function(){
			    		console.log(true);
						if(!$(this).children('.ul-child').hasClass('active')){
							if($('.ul-child').hasClass('active')){
								$('.ul-child').removeClass('active');

								if($(this).children('ul').length > 0){
									$(this).children('.ul-child').addClass('active');
								}
							}else{
								if($(this).children('ul').length > 0){
									$(this).children('.ul-child').addClass('active');
								}
							}
						}
					});
		    	}, 1000);
	    	},
	    },
	    mounted(){
	    	var vm = this;

	    	vm.loadJsElement();
	    }
	}
</script>