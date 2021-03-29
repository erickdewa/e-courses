$(document).ready(function(e){
	function aropex(){
		this.video = function(el, thumbnile){
			function showThumbnail(status, thumb){
				var t = $('.video-player');
				var c = '.video-thumb';

				if(status == 'show'){
					if(t.children(c).length == 0){
						t.append('<div class="video-thumb"></div>');
						$(c).css({'background-image': 'url('+thumb+')'})
					}
				}else if(status == 'hide'){
					t.children(c).remove();
				}
			}

			function popUpDisabled(){
				var t = $('.video-player');

				if(t.children('.video-disabled').length == 0){
					t.append('<div class="video-disabled"></div>');
				}
			}

			function loadVideo(id, thumb, status) {
				var url = $("#"+el).data('video');
				var player;
				var interval;
				var playVideo = false;
				var durate = 0;
				var durateMax = 1000;
				var durateText = '00:00';

				width = $('.courses-player').width();
				height = ((width/2));

				window.YT.ready(function() {
					player = new YT.Player(el, {
						playerVars: {
							controls: 0,
							rel: 0,
							showsearch: 0,
							modestbranding: 1,
							iv_load_policy: 3,
						},
						height: height,
						width: width,
						videoId: url,
						events: {
				            'onReady': onPlayerReady,
				            'onStateChange': onPlayerStateChange
				        }
					});
				});

				$('.video-player').on('click', '.video-disabled', function(){
					if(!playVideo){
						playVideo = true;
						playVideos();
					}else{
						playVideo = false;
						pauseVideos();
					}
				})

				function onPlayerReady(event) {
					showThumbnail('show', thumb);
					popUpDisabled(true);
					initialize();
				}

				function playVideos(){
					player.playVideo();
					$('.btn-play').css('display', 'none');
					$('.btn-pause').css('display', 'block');
				}

				function pauseVideos(){
					player.pauseVideo();
					$('.btn-play').css('display', 'block');
					$('.btn-pause').css('display', 'none');
				}

				function onPlayerStateChange(event) {
					var statusVideo = event.data;
					showThumbnail('hide');
					if(statusVideo == -1){ // unstarted
						showThumbnail('show', thumb);
					}else if(statusVideo == 0){ // ended
						showThumbnail('show', thumb);
					}else if(statusVideo == 1){ // playing
						showThumbnail('hide');
					}else if(statusVideo == 2){ // paused
						showThumbnail('show', thumb);
					}else if(statusVideo == 3){ // buffering
						showThumbnail('show', thumb);
					}else if(statusVideo == 5){ // video cued
						showThumbnail('show', thumb);
					}
				}

				function initialize(){
				    updateTimerDisplay();
				    updateProgressBar();

				    clearInterval(timeInterval);
				    var timeInterval = setInterval(function () {
				        updateTimerDisplay();
				        updateProgressBar();
				    }, 1000)

				}

				$('.duration').on('mouseup touchend', function (e) {
				    var newTime = player.getDuration() * (e.target.value / 100);
				    player.seekTo(newTime);
				});

				(function() {
					var 
						fullScreenApi = { 
							supportsFullScreen: false,
							isFullScreen: function() { return false; }, 
							requestFullScreen: function() {}, 
							cancelFullScreen: function() {},
							fullScreenEventName: '',
							prefix: ''
						},
						browserPrefixes = 'webkit moz o ms khtml'.split(' ');
					
					// check for native support
					if (typeof document.cancelFullScreen != 'undefined') {
						fullScreenApi.supportsFullScreen = true;
					} else {	 
						// check for fullscreen support by vendor prefix
						for (var i = 0, il = browserPrefixes.length; i < il; i++ ) {
							fullScreenApi.prefix = browserPrefixes[i];
							
							if (typeof document[fullScreenApi.prefix + 'CancelFullScreen' ] != 'undefined' ) {
								fullScreenApi.supportsFullScreen = true;
								
								break;
							}
						}
					}
					
					// update methods to do something useful
					if (fullScreenApi.supportsFullScreen) {
						fullScreenApi.fullScreenEventName = fullScreenApi.prefix + 'fullscreenchange';
						
						fullScreenApi.isFullScreen = function() {
							switch (this.prefix) {	
								case '':
									return document.fullScreen;
								case 'webkit':
									return document.webkitIsFullScreen;
								default:
									return document[this.prefix + 'FullScreen'];
							}
						}
						fullScreenApi.requestFullScreen = function(el) {
							return (this.prefix === '') ? el.requestFullScreen() : el[this.prefix + 'RequestFullScreen']();
						}
						fullScreenApi.cancelFullScreen = function(el) {
							return (this.prefix === '') ? document.cancelFullScreen() : document[this.prefix + 'CancelFullScreen']();
						}		
					}

					// jQuery plugin
					if (typeof jQuery != 'undefined') {
						jQuery.fn.requestFullScreen = function() {
					
							return this.each(function() {
								var el = jQuery(this);
								if (fullScreenApi.supportsFullScreen) {
									fullScreenApi.requestFullScreen(el);
								}
							});
						};
					}

					// export api
					window.fullScreenApi = fullScreenApi;	
				})();

				// do something interesting with fullscreen support
				var fsButton = document.getElementById('btn-fullscreen'),
					fsElement = document.getElementById('courses-video-box'),
					fsStatus = document.getElementById('courses-status');


				if (window.fullScreenApi.supportsFullScreen) {
					// fsStatus.innerHTML = 'YES: Your browser supports FullScreen';
					// fsStatus.className = 'fullScreenSupported';
					
					// handle button click
					fsButton.addEventListener('click', function() {
						window.fullScreenApi.requestFullScreen(fsElement);
					}, true);
					
					fsElement.addEventListener(fullScreenApi.fullScreenEventName, function() {
						if (fullScreenApi.isFullScreen()) {
							var width = $('#courses-video-box').width();
							var height = ((width/2)+30);
							$('#aro-video').prop('width', width);
							$('#aro-video').prop('height', height);
							$('#courses-video-box').addClass('fullscreen');
							// fsStatus.innerHTML = 'Whoa, you went fullscreen';
						} else {
							var width = $('#courses-video-box').width();
							var height = ((width/2));
							$('#aro-video').prop('width', width);
							$('#aro-video').prop('height', height);
							$('#courses-video-box').removeClass('fullscreen');
							// fsStatus.innerHTML = 'Back to normal';
						}
					}, true);
					
				} else {
					// fsStatus.innerHTML = 'SORRY: Your browser does not support FullScreen';
				}

				function updateTimerDisplay(){
				    $('.current-time').text(formatTime( player.getCurrentTime() ));
				    $('.duration-time').text(formatTime( player.getDuration() ));
				}

				function formatTime(time){
				    time = Math.round(time);
				    var minutes = Math.floor(time / 60),
				    seconds = time - minutes * 60;
				    seconds = seconds < 10 ? '0' + seconds : seconds;
				    return minutes + ":" + seconds;
				}

				function updateProgressBar(){
				    var slideWidth = (player.getCurrentTime() / player.getDuration()) * 100;
				    $('.duration').val(slideWidth);
				}

				return player;
			}

			$.getScript("https://www.youtube.com/iframe_api", function() {
				var id = $("#"+el).data('video');
				var thumb = thumbnile;
				showThumbnail('show', thumb);
			    loadVideo(id, thumb);
			});
		}
		this.btnLoad = function(el, s){
			var i = $(el).children('i');
			var c = i.attr('class');
			if(s){
				i.removeClass(c).addClass('fa fa-spinner fa-spin').attr('data-classx', c);
				$(el).prop('disabled', true);
			}else{
				i.removeClass('fa fa-spinner fa-spin').addClass(i.data('classx'));
				$(el).prop('disabled', false);
			}
		};
		this.outside = function(el, tg, c){
			$(document).mouseup(function(e){
			    if($(el).hasClass(c)){
				    if(!$(el).is(e.target) && $(el).has(e.target).length < 1){
				    	if(!$(tg).is(e.target) && $(tg).has(e.target).length < 1){
					        $(el).removeClass(c);
					    }
				    }
			    }
			});
		};
		this.event = function(el, outside){
			var event = $(el).data('event');
			if(event == 'dropdown'){
				var target = $(el).data('target');
				if(!$(target).hasClass('active')){
					$(target).addClass('active');
					if(outside){
						this.outside(target, el, 'active');
					}
				}else{
					$(target).removeClass('active');
				}
			}else if(event == 'modal'){
				var ms = $(el).data('modal');
				var target = $(el).data('target');
				if(ms){
					$(target).modal('show');
				}else{
					$(target).modal('hide');
				}
			}else if(event == 'tabbed'){
				var target = $(el).data('target');
				if(!$(el).hasClass('active')){
					$('.tabbed-head').removeClass('active');
					$('.tabbed-card').removeClass('active');
					$(el).addClass('active');
					$(target).addClass('active');
				}
			}
		};
	}

	window.Aropex = new aropex();
	$('.aro-menu').on('click', function(){
		if($(window).width() <= 980){
			Aropex.event(this, true);
		}else{
			Aropex.event(this, false);
		}
	});

	function showSubMenu(el) {
		if($(el).children('ul').length > 0){
			$(el).children().first().addClass('active');
			$('.active').children('.icon-submenu').css({'transform': 'rotate(90deg)'});
		}
	};

	function hideSubMenu(el) {
		$('.active').children('.icon-submenu').css({'transform': 'rotate(0deg)'});
		$('.aro-sidebar--menu_item').removeClass('active');
	};

	$('.aro-sidebar--menu_li').on('click', function(){
		if(!$(this).children('.aro-sidebar--menu_item').hasClass('active')){
			if($('div').hasClass('active')){
				hideSubMenu(this);

				showSubMenu(this);
			}else{
				showSubMenu(this);
			}
		}else{
			hideSubMenu(this);
		}
	});

	$('.clicked').on('click',  function(){
		if($(this).hasClass('aro-alert')){
			$(this).css('display', 'none');
		}
	});

	$('.dropdown').on('click', function(){
		Aropex.event(this, true);
	});

	$('.tabbed-head').on('click', function(){
		Aropex.event(this, false);
		console.log(this);
	})

	$(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 90) {
            $('.navbar').addClass('stycky-active');
            $('.space').css('margin-top', '100px');
            $('.page-one').css('margin-top', '100px');
        } else {
            $('.navbar').removeClass("stycky-active");
            $('.space').css('margin-top', '0px');
            $('.page-one').css('margin-top', '0px');
        }
    });
})