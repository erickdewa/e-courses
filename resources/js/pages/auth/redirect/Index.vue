<template>
	<div>
		Redirect {{ type }} ...
	</div>
</template>

<script>
    export default {
    	data() {
	        return {
	        	type: '',
	        }
	    },
	    mounted(){
	    	var vm = this;

	    	vm.type = vm.$route.params.type;
	    	if(localStorage.getItem("level_id") != null){
	    		if(vm.type == 'login'){
	                if(localStorage.getItem("level_id") == 1){
	                    vm.$router.push({ path: '/admin/dashboard' });
	                }else{
	                	vm.$router.push({ path: '/'});
	                }
	    		}else if(vm.type == 'logout'){
	    			if(localStorage.getItem("level_id") == 1){
	                    vm.$router.push({ path: '/admin/login' });
	                }else{
	                	vm.$router.push({ path: '/'});
	                }
	                localStorage.removeItem("level_id");
	    		}
            }
	    },
    }
</script>