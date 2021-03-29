(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courses.play"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/player/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/player/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Sidebar */ "./resources/js/pages/user/player/components/Sidebar.vue");
/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Player */ "./resources/js/pages/user/player/components/Player.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SideBar: _components_Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    Player: _components_Player__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      dataCourses: {},
      materiGroupUuid: '',
      materiUuid: ''
    };
  },
  methods: {
    getDataCoursesAuth: function getDataCoursesAuth(uuid) {
      var vm = this;
      vm.$http({
        url: "".concat(vm.apiUrl, "/courses/").concat(uuid, "/auth"),
        method: 'GET'
      }).then(function (res) {
        vm.dataCourses = res.data.data;
        vm.getCookie();

        if (vm.materigroup == null) {
          vm.setCookie();
        }
      })["catch"](function (error) {// error
      });
    },
    setCookie: function setCookie() {
      var materiGroupUuid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var materiUuid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var vm = this;

      if (materiGroupUuid == null && materiUuid == null) {
        localStorage.setItem("materiGroupUuid", vm.dataCourses.materigroup[0].uuid);
        localStorage.setItem("materiUuid", vm.dataCourses.materigroup[0].materi[0].uuid);
      } else {
        localStorage.setItem("materiGroupUuid", materiGroupUuid);
        localStorage.setItem("materiUuid", materiUuid);
      }
    },
    getCookie: function getCookie() {
      var vm = this;
      vm.materiGroupUuid = localStorage.getItem("materiGroupUuid");
      vm.materiUuid = localStorage.getItem("materiUuid");
    }
  },
  mounted: function mounted() {
    var vm = this;
    $('.tabbed-head').on('click', function () {
      Aropex.event(this, false);
    });
    vm.getDataCoursesAuth(vm.$route.params.uuidCourses);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/player/components/Player.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/player/components/Player.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  methods: {},
  mounted: function mounted() {
    var vm = this;
    setTimeout(function () {
      Aropex.video('aro-video', '/assets/images/bg/bg-01.jpg');
    }, 1000);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/player/components/Sidebar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/player/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  methods: {
    loadJsElement: function loadJsElement() {
      var vm = this;
      setTimeout(function () {
        $('.li-parent').on('click', function () {
          if (!$(this).children('.ul-child').hasClass('active')) {
            if ($('.ul-child').hasClass('active')) {
              $('.ul-child').removeClass('active');

              if ($(this).children('ul').length > 0) {
                $(this).children('.ul-child').addClass('active');
              }
            } else {
              if ($(this).children('ul').length > 0) {
                $(this).children('.ul-child').addClass('active');
              }
            }
          } else {
            $('.ul-child').removeClass('active');
          }
        });
      }, 1000);
    }
  },
  mounted: function mounted() {
    var vm = this;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/player/Index.vue?vue&type=template&id=6c2b79af&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/player/Index.vue?vue&type=template&id=6c2b79af& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "courses-page" }, [
      _c("div", { staticClass: "courses-play container" }, [
        _c(
          "div",
          { staticClass: "courses-player" },
          [
            _c("Player"),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "courses-play-body" },
              [
                _vm._l(_vm.dataCourses.materigroup, function(materigroup, i) {
                  return [
                    _vm._l(materigroup.materi, function(materi, j) {
                      return (_vm.materiGroupUuid == null
                      ? i == 0
                      : materigroup.uuid == _vm.materiGroupUuid)
                        ? [
                            (_vm.materiGroupUuid == null
                            ? j == 0
                            : materi.uuid == _vm.materiUuid)
                              ? [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "tabbed-card active",
                                      attrs: { id: "card-information" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "courses-title" },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\tBagian " +
                                              _vm._s((i += 1)) +
                                              ": Intro - " +
                                              _vm._s(materi.nm_materi) +
                                              "\n\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", {
                                        staticClass: "courses-description",
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.dataCourses.description
                                          )
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "courses-created" },
                                        [
                                          _c("div", { staticClass: "label" }, [
                                            _c(
                                              "div",
                                              { staticClass: "title" },
                                              [_vm._v("Creator")]
                                            ),
                                            _vm._v(
                                              ": " +
                                                _vm._s(
                                                  _vm.dataCourses.user.name
                                                ) +
                                                "\n\t\t\t\t\t\t\t\t\t\t"
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "label" }, [
                                            _c(
                                              "div",
                                              { staticClass: "title" },
                                              [_vm._v("Created At")]
                                            ),
                                            _vm._v(
                                              ": " +
                                                _vm._s(
                                                  _vm.dataCourses.created_at
                                                ) +
                                                "\n\t\t\t\t\t\t\t\t\t\t"
                                            )
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              : _vm._e()
                          ]
                        : _vm._e()
                    })
                  ]
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tabbed-card", attrs: { id: "card-comment" } },
                  [_vm._v("\n\t\t\t\t\t\tcomment\n\t\t\t\t\t")]
                )
              ],
              2
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "courses-player-list" }, [_c("SideBar")], 1)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "courses-play-header" }, [
      _c("ul", { staticClass: "ul-header" }, [
        _c(
          "li",
          {
            staticClass: "li-header tabbed-head active",
            attrs: {
              "data-event": "tabbed",
              "data-target": "#card-information"
            }
          },
          [_c("div", { staticClass: "header-title" }, [_vm._v("Information")])]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "li-header tabbed-head",
            attrs: { "data-event": "tabbed", "data-target": "#card-comment" }
          },
          [_c("div", { staticClass: "header-title" }, [_vm._v("Comment")])]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/player/components/Player.vue?vue&type=template&id=7bbcbd97&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/player/components/Player.vue?vue&type=template&id=7bbcbd97& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "courses-video-box", attrs: { id: "courses-video-box" } },
      [
        _c(
          "div",
          { staticClass: "video-player" },
          [
            _vm._l(_vm.$parent.dataCourses.materigroup, function(
              materigroup,
              i
            ) {
              return [
                _vm._l(materigroup.materi, function(materi, j) {
                  return (_vm.$parent.materiGroupUuid == null
                  ? i == 0
                  : materigroup.uuid == _vm.$parent.materiGroupUuid)
                    ? [
                        (_vm.$parent.materiGroupUuid == null
                        ? j == 0
                        : materi.uuid == _vm.$parent.materiUuid)
                          ? [
                              _c("div", {
                                attrs: {
                                  id: "aro-video",
                                  "data-video": materi.video
                                }
                              })
                            ]
                          : _vm._e()
                      ]
                    : _vm._e()
                })
              ]
            })
          ],
          2
        ),
        _vm._v(" "),
        _vm._m(0)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "video-control" }, [
      _c(
        "div",
        { staticClass: "btn-control-left", attrs: { align: "center" } },
        [
          _c("div", { staticClass: "btn btn-circle btn-info btn-play" }, [
            _c("i", { staticClass: "fa fa-play" })
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "btn btn-circle btn-info btn-pause",
              staticStyle: { display: "none" }
            },
            [_c("i", { staticClass: "fa fa-pause" })]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "range-duration" }, [
        _c("input", {
          staticClass: "duration",
          attrs: { type: "range", value: "0" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "number-duration" }, [
        _c("span", { staticClass: "current-time" }, [_vm._v("00:00")]),
        _vm._v(" "),
        _c("span", [_vm._v("/")]),
        _vm._v(" "),
        _c("span", { staticClass: "duration-time" }, [_vm._v("00:00")])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "btn-control-right", attrs: { align: "center" } },
        [
          _c(
            "div",
            {
              staticClass: "btn btn-sm btn-info btn-fullscreen",
              attrs: { id: "btn-fullscreen" }
            },
            [_c("i", { staticClass: "fa fa-arrows-alt" })]
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/player/components/Sidebar.vue?vue&type=template&id=766a09d4&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/player/components/Sidebar.vue?vue&type=template&id=766a09d4& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "ul",
      { staticClass: "ul-parent" },
      _vm._l(_vm.$parent.dataCourses.materigroup, function(materigroup, i) {
        return _c("li", { staticClass: "li-parent" }, [
          _c("div", { staticClass: "item-materigroup" }, [
            _c("div", { staticClass: "text-group" }, [
              _c("div", { staticClass: "text" }, [
                _vm._v(
                  "Bagian " +
                    _vm._s((i += 1)) +
                    ": " +
                    _vm._s(materigroup.nm_materi)
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "subtext" }, [_vm._v("5/10")])
            ]),
            _vm._v(" "),
            _vm._m(0, true)
          ]),
          _vm._v(" "),
          _c(
            "ul",
            {
              staticClass: "ul-child",
              class:
                _vm.$parent.materiGroupUuid == null
                  ? i == 0
                    ? "active"
                    : ""
                  : materigroup.uuid == _vm.$parent.materiGroupUuid
                  ? "active"
                  : ""
            },
            _vm._l(materigroup.materi, function(materi, j) {
              return _c(
                "li",
                {
                  staticClass: "li-child active",
                  on: {
                    click: function($event) {
                      return _vm.$parent.setCookie(
                        materigroup.uuid,
                        materi.uuid
                      )
                    }
                  }
                },
                [
                  _c("div", { staticClass: "item-materi" }, [
                    _c("div", { staticClass: "text-group" }, [
                      _c("div", { staticClass: "text" }, [
                        _vm._v(
                          _vm._s((j += 1)) + ". " + _vm._s(materi.nm_materi)
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(1, true)
                    ])
                  ])
                ]
              )
            }),
            0
          )
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon-drop" }, [
      _c("i", { staticClass: "fa fa-angle-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "subtext" }, [
      _c("i", { staticClass: "fa fa-play-circle-o" }),
      _vm._v(" 15 minute")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/user/player/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/user/player/Index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_6c2b79af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=6c2b79af& */ "./resources/js/pages/user/player/Index.vue?vue&type=template&id=6c2b79af&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/player/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_6c2b79af___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_6c2b79af___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/player/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/player/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/user/player/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/player/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/player/Index.vue?vue&type=template&id=6c2b79af&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/user/player/Index.vue?vue&type=template&id=6c2b79af& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6c2b79af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=6c2b79af& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/player/Index.vue?vue&type=template&id=6c2b79af&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6c2b79af___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6c2b79af___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/user/player/components/Player.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/user/player/components/Player.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Player_vue_vue_type_template_id_7bbcbd97___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.vue?vue&type=template&id=7bbcbd97& */ "./resources/js/pages/user/player/components/Player.vue?vue&type=template&id=7bbcbd97&");
/* harmony import */ var _Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/player/components/Player.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Player_vue_vue_type_template_id_7bbcbd97___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Player_vue_vue_type_template_id_7bbcbd97___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/player/components/Player.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/player/components/Player.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/user/player/components/Player.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Player.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/player/components/Player.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/player/components/Player.vue?vue&type=template&id=7bbcbd97&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/user/player/components/Player.vue?vue&type=template&id=7bbcbd97& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_7bbcbd97___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Player.vue?vue&type=template&id=7bbcbd97& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/player/components/Player.vue?vue&type=template&id=7bbcbd97&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_7bbcbd97___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Player_vue_vue_type_template_id_7bbcbd97___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/user/player/components/Sidebar.vue":
/*!***************************************************************!*\
  !*** ./resources/js/pages/user/player/components/Sidebar.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_766a09d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=766a09d4& */ "./resources/js/pages/user/player/components/Sidebar.vue?vue&type=template&id=766a09d4&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/player/components/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_766a09d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_766a09d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/player/components/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/player/components/Sidebar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/user/player/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/player/components/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/player/components/Sidebar.vue?vue&type=template&id=766a09d4&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/user/player/components/Sidebar.vue?vue&type=template&id=766a09d4& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_766a09d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=766a09d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/player/components/Sidebar.vue?vue&type=template&id=766a09d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_766a09d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_766a09d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);