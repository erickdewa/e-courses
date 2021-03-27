<template>
	<div>
		<div class="aropex-teble">
			<div class="row">
				<div class="col-sm-12 col-md-4">
					<div class="form-group">
						<select class="form-control" placeholder="Pilih">
							<option>10</option>
							<option>25</option>
							<option>50</option>
						</select>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<div class="form-append">
							<input type="text" class="form-control" placeholder="Search ..." v-model="dataIndex.search" @change="dataSearch()">
							<div class="icon">
								<i class="fa fa-search"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="aro-table-responsive aro-scroll">
				<table :id="id" :class="classx">
					<thead>
						<tr>
							<th :class="((column.class) ? column.class : false)" :style="((column.style) ? column.style : '')" v-for="column in columns">{{ column.name }}</th>
						</tr>
					</thead>
					<tbody>
						<!-- <tr v-if="loading"><td :colspan='columns.length'>Proccessing...</td></tr> -->
						<tr v-if="notfound"><td :colspan='columns.length'>No result found</td></tr>
						<tr v-if="!notfound" v-for="(data, ind) in dataTable">
							<template v-for="(column, i) in columns">
								<td v-html="((column.data.indexOf('.') == -1) ? ((data[column.data]) ? data[column.data] : ((column.default) ? column.default : '-')) : getData(column, i, ind) )"></td>
							</template>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="aro-paginate">
				<div class="paginate-source paginate-info">
					<div class="paginate-info">
						<span>Showing</span>
						<span class="paginate-page-first">{{ paginate.from }}</span>
						<span>to</span>
						<span class="paginate-page-last">{{ paginate.to }}</span>
						<span>of</span>
						<span class="paginate-page-count">{{ paginate.total }}</span>
						<span>entries</span>
					</div>
				</div>
				<div class="paginate-source paginate-page">
					<ul class="paginate-ul">
						<li class="paginate-li" v-on:click="reload(paginate.prev_page_url)">
							<span><i class="fa fa-angle-left"></i></span>
						</li>
						<li class="paginate-li" v-for="nomor in nomors" v-bind:class="((nomor.page == paginate.current_page)?'active':'')" v-on:click="reload(nomor.path)">
							<span>{{ nomor.page }}</span>
						</li>
						<li class="paginate-li" v-on:click="reload(paginate.next_page_url)">
							<span><i class="fa fa-angle-right"></i></span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
    	props: ['urls', 'post', 'columns', 'callbacks', 'classx', 'id'],
    	data() {
	        return {
	        	dataIndex: {
	        		per: 10,
	        		search: '',
	        	},

	        	dataTable: {},
	        	nomors: [],
				paginate: {},
				notfound: false,
	        }
	    },
	    methods: {
	    	eval(data, column, eVal) {
				return eval(eVal);
			},
			getData(s, index, ind) {
				var app = this;
				s = s.data.split('.');
				var p = 'app.dataTable[ind]';
				for(var i = 0; i<s.length; i++){
					p = p+'["'+s[i]+'"]';
				}
				var d = "";
				try {
					d = eval(p);
				}catch(e) {
					d = '';
				}
				console.log(d);
				return d;
			},
	    	reload(url=null, search=false){
	    		var vm = this;

	    		if(url == null){
					url = vm.apiUrl+vm.urls;
				}

	    		vm.$http({
	    			url: url,
	    			data: vm.dataIndex,
	    			method: 'POST',
	    		}).then((res) => {
	    			vm.paginate = res.data;
	    			vm.dataTable = res.data.data;
	    			vm.nomorPage();
	    		}).catch((err) => {
	    			toastr.error("Terjadi kesalahan!", 'Error');
	    		});
	    	},

	    	nomorPage(){
            	var vm = this;
            	var lastPage = vm.paginate.last_page;
                var noPage = vm.paginate.current_page;
                var path = vm.paginate.path;
            	var i;

            	if(vm.dataTable.length == 0){
            		vm.notfound = true;
            	}

            	vm.nomors = [];
        		if(noPage < 5){
        			for(i = 1; i <= 5; i++){
        				if(i<=lastPage){
        					var a = {page: i, path: path+'?page='+i};
        					vm.nomors.push(a);
            			}
        			}
        		}else{
        			var from = noPage-2;
        			var to = noPage+2;
        			for(i = from; i <= to; i++){
        				if(i<=lastPage){
        					var a = {page: i, path: path+'?page='+i};
        					vm.nomors.push(a);
            			}
        			}
        		}
            },
            dataSearch() {
            	this.reload(null, true);
            },
	    },
	    mounted(){
	    	var vm = this;

	    	vm.reload();
			if(vm.callbacks){
				vm.callbacks();
			}
	    }
    }
</script>