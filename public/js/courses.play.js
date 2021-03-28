(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courses.play"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/player/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/player/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
  data: function data() {
    return {};
  },
  methods: {
    getDataCoursesAuth: function getDataCoursesAuth(uuid) {
      var vm = this;
      vm.$http({
        url: "".concat(vm.apiUrl, "/courses/").concat(uuid, "/auth"),
        method: 'GET'
      }).then(function (res) {
        vm.dataCourses = res.data.data;
      })["catch"](function (error) {// error
      });
    }
  },
  mounted: function mounted() {
    var vm = this;
    vm.getDataCoursesAuth(vm.$route.params.uuidCourses);
    Aropex.video('aro-video', '/assets/images/bg/bg-01.jpg');
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "courses-page" }, [
        _c("div", { staticClass: "courses-play container" }, [
          _c("div", { staticClass: "courses-player" }, [
            _c("div", { attrs: { id: "courses-status" } }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "courses-video-box",
                attrs: { id: "courses-video-box" }
              },
              [
                _c("div", { staticClass: "video-player" }, [
                  _c("div", {
                    attrs: { id: "aro-video", "data-video": "M7lc1UVf-VE" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "video-control" }, [
                  _c(
                    "div",
                    {
                      staticClass: "btn-control-left",
                      attrs: { align: "center" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "btn btn-circle btn-info btn-play" },
                        [_c("i", { staticClass: "fa fa-play" })]
                      ),
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
                    _c("span", { staticClass: "current-time" }, [
                      _vm._v("00:00")
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("/")]),
                    _vm._v(" "),
                    _c("span", { staticClass: "duration-time" }, [
                      _vm._v("00:00")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "btn-control-right",
                      attrs: { align: "center" }
                    },
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
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "courses-play-header" }, [
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
                  [
                    _c("div", { staticClass: "header-title" }, [
                      _vm._v("Information")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "li-header tabbed-head",
                    attrs: {
                      "data-event": "tabbed",
                      "data-target": "#card-comment"
                    }
                  },
                  [
                    _c("div", { staticClass: "header-title" }, [
                      _vm._v("Comment")
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "courses-play-body" }, [
              _c(
                "div",
                {
                  staticClass: "tabbed-card active",
                  attrs: { id: "card-information" }
                },
                [
                  _c("div", { staticClass: "courses-title" }, [
                    _vm._v(
                      "\n\t\t\t\t\t\t\tBagian 1: Intro - Laravel For Beginer\n\t\t\t\t\t\t"
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "courses-description" }, [
                    _vm._v(
                      "\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\t\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\t\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\t\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t\t\t\t\t\t"
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "courses-created" }, [
                    _c("div", { staticClass: "label" }, [
                      _c("div", { staticClass: "title" }, [_vm._v("Creator")]),
                      _vm._v(": Erick Dewa\n\t\t\t\t\t\t\t")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "label" }, [
                      _c("div", { staticClass: "title" }, [
                        _vm._v("Created At")
                      ]),
                      _vm._v(": 18 Maret 2021\n\t\t\t\t\t\t\t")
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "tabbed-card", attrs: { id: "card-comment" } },
                [_vm._v("\n\t\t\t\t\t\tcomment\n\t\t\t\t\t")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "courses-player-list" }, [
            _c("ul", { staticClass: "ul-parent" }, [
              _c("li", { staticClass: "li-parent" }, [
                _c("div", { staticClass: "item-materigroup" }, [
                  _c("div", { staticClass: "text-group" }, [
                    _c("div", { staticClass: "text" }, [
                      _vm._v("Bagian 1: Introduction")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "subtext" }, [_vm._v("5/10")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "icon-drop" }, [
                    _c("i", { staticClass: "fa fa-angle-down" })
                  ])
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "ul-child" }, [
                  _c("li", { staticClass: "li-child" }, [
                    _c("div", { staticClass: "item-materi" }, [
                      _c("div", { staticClass: "text-group" }, [
                        _c("div", { staticClass: "text" }, [
                          _vm._v("1. What is laravel?")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "subtext" }, [
                          _c("i", { staticClass: "fa fa-play-circle-o" }),
                          _vm._v(" 15 minute")
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "li-child" }, [
                    _c("div", { staticClass: "item-materi" }, [
                      _c("div", { staticClass: "text-group" }, [
                        _c("div", { staticClass: "text" }, [
                          _vm._v("2. What is VueJs?")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "subtext" }, [
                          _c("i", { staticClass: "fa fa-play-circle-o" }),
                          _vm._v(" 5 minute")
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "li-parent" }, [
                _c("div", { staticClass: "item-materigroup" }, [
                  _c("div", { staticClass: "text-group" }, [
                    _c("div", { staticClass: "text" }, [
                      _vm._v("Bagian 2: Instalation")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "subtext" }, [_vm._v("5/10")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "icon-drop" }, [
                    _c("i", { staticClass: "fa fa-angle-down" })
                  ])
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "ul-child active" }, [
                  _c("li", { staticClass: "li-child" }, [
                    _c("div", { staticClass: "item-materi" }, [
                      _c("div", { staticClass: "text-group" }, [
                        _c("div", { staticClass: "text" }, [
                          _vm._v("1. What is laravel?")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "subtext" }, [
                          _c("i", { staticClass: "fa fa-play-circle-o" }),
                          _vm._v(" 15 minute")
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "li-child" }, [
                    _c("div", { staticClass: "item-materi" }, [
                      _c("div", { staticClass: "text-group" }, [
                        _c("div", { staticClass: "text" }, [
                          _vm._v("2. What is VueJs?")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "subtext" }, [
                          _c("i", { staticClass: "fa fa-play-circle-o" }),
                          _vm._v(" 5 minute")
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
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



/***/ })

}]);