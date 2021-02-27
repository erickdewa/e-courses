/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/assets/js/index.js":
/*!***********************************!*\
  !*** ./public/assets/js/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function (e) {
  function aropex() {
    this.video = function (el, thumbnile) {
      function showThumbnail(status, thumb) {
        var t = $('.video-player');
        var c = '.video-thumb';

        if (status == 'show') {
          if (t.children(c).length == 0) {
            t.append('<div class="video-thumb"></div>');
            $(c).css({
              'background-image': 'url(' + thumb + ')'
            });
          }
        } else if (status == 'hide') {
          t.children(c).remove();
        }
      }

      function popUpDisabled() {
        var t = $('.video-player');

        if (t.children('.video-disabled').length == 0) {
          t.append('<div class="video-disabled"></div>');
        }
      }

      function loadVideo(id, thumb, status) {
        var url = $("#" + el).data('video');
        var player;
        var interval;
        var playVideo = false;
        var durate = 0;
        var durateMax = 1000;
        var durateText = '00:00';
        window.YT.ready(function () {
          player = new YT.Player(el, {
            playerVars: {
              controls: 0,
              rel: 0,
              showsearch: 0,
              modestbranding: 1,
              iv_load_policy: 3
            },
            height: "390",
            width: "640",
            videoId: url,
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });
        });
        $('.video-player').on('click', '.video-disabled', function () {
          if (!playVideo) {
            playVideo = true;
            playVideos();
          } else {
            playVideo = false;
            pauseVideos();
          }
        });

        function onPlayerReady(event) {
          showThumbnail('show', thumb);
          popUpDisabled(true);
          initialize();
        }

        function playVideos() {
          player.playVideo();
          $('.btn-play').css('display', 'none');
          $('.btn-pause').css('display', 'block');
        }

        function pauseVideos() {
          player.pauseVideo();
          $('.btn-play').css('display', 'block');
          $('.btn-pause').css('display', 'none');
        }

        function onPlayerStateChange(event) {
          var statusVideo = event.data;
          showThumbnail('hide');

          if (statusVideo == -1) {
            // unstarted
            showThumbnail('show', thumb);
          } else if (statusVideo == 0) {
            // ended
            showThumbnail('show', thumb);
          } else if (statusVideo == 1) {
            // playing
            showThumbnail('hide');
          } else if (statusVideo == 2) {
            // paused
            showThumbnail('show', thumb);
          } else if (statusVideo == 3) {
            // buffering
            showThumbnail('show', thumb);
          } else if (statusVideo == 5) {
            // video cued
            showThumbnail('show', thumb);
          }
        }

        function initialize() {
          updateTimerDisplay();
          updateProgressBar();
          clearInterval(timeInterval);
          var timeInterval = setInterval(function () {
            updateTimerDisplay();
            updateProgressBar();
          }, 1000);
        }

        $('.duration').on('mouseup touchend', function (e) {
          var newTime = player.getDuration() * (e.target.value / 100);
          player.seekTo(newTime);
        });

        function updateTimerDisplay() {
          $('.current-time').text(formatTime(player.getCurrentTime()));
          $('.duration-time').text(formatTime(player.getDuration()));
        }

        function formatTime(time) {
          time = Math.round(time);
          var minutes = Math.floor(time / 60),
              seconds = time - minutes * 60;
          seconds = seconds < 10 ? '0' + seconds : seconds;
          return minutes + ":" + seconds;
        }

        function updateProgressBar() {
          var slideWidth = player.getCurrentTime() / player.getDuration() * 100;
          $('.duration').val(slideWidth);
        }

        return player;
      }

      $.getScript("https://www.youtube.com/iframe_api", function () {
        var id = $("#" + el).data('video');
        var thumb = thumbnile;
        showThumbnail('show', thumb);
        loadVideo(id, thumb);
      });
    };

    this.btnLoad = function (el, s) {
      var i = $(el).children('i');
      var c = i.attr('class');

      if (s) {
        i.removeClass(c).addClass('fa fa-spinner fa-spin').attr('data-classx', c);
        $(el).prop('disabled', true);
      } else {
        i.removeClass('fa fa-spinner fa-spin').addClass(i.data('classx'));
        $(el).prop('disabled', false);
      }
    };

    this.outside = function (el, tg, c) {
      $(document).mouseup(function (e) {
        if ($(el).hasClass(c)) {
          if (!$(el).is(e.target) && $(el).has(e.target).length < 1) {
            if (!$(tg).is(e.target) && $(tg).has(e.target).length < 1) {
              $(el).removeClass(c);
            }
          }
        }
      });
    };

    this.event = function (el, outside) {
      var event = $(el).data('event');

      if (event == 'dropdown') {
        var target = $(el).data('target');

        if (!$(target).hasClass('active')) {
          $(target).addClass('active');

          if (outside) {
            this.outside(target, el, 'active');
          }
        } else {
          $(target).removeClass('active');
        }
      }
    };
  }

  window.Aropex = new aropex();
  $('.aro-menu').on('click', function () {
    if ($(window).width() <= 980) {
      Aropex.event(this, true);
    } else {
      Aropex.event(this, false);
    }
  });

  function showSubMenu(el) {
    if ($(el).children('ul').length > 0) {
      $(el).children().first().addClass('active');
      $('.active').children('.icon-submenu').css({
        'transform': 'rotate(90deg)'
      });
    }
  }

  ;

  function hideSubMenu(el) {
    $('.active').children('.icon-submenu').css({
      'transform': 'rotate(0deg)'
    });
    $('.aro-sidebar--menu_item').removeClass('active');
  }

  ;
  $('.aro-sidebar--menu_li').on('click', function () {
    if (!$(this).children('.aro-sidebar--menu_item').hasClass('active')) {
      if ($('div').hasClass('active')) {
        hideSubMenu(this);
        showSubMenu(this);
      } else {
        showSubMenu(this);
      }
    } else {
      hideSubMenu(this);
    }
  });
  $('.clicked').on('click', function () {
    if ($(this).hasClass('aro-alert')) {
      $(this).css('display', 'none');
    }
  });
  $('.dropdown').on('click', function () {
    Aropex.event(this, true);
  });
});

/***/ }),

/***/ 2:
/*!*****************************************!*\
  !*** multi ./public/assets/js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\e-courses\public\assets\js\index.js */"./public/assets/js/index.js");


/***/ })

/******/ });