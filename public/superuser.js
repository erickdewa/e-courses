(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["superuser"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var postscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! postscribe */ "./node_modules/postscribe/dist/postscribe.js");
/* harmony import */ var postscribe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(postscribe__WEBPACK_IMPORTED_MODULE_0__);
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
    return {
      dataMenu: [{
        title: 'Dashboard',
        icon: 'fa-th-large',
        name: 'admin.dashboard',
        path: '/admin/dashboard',
        haveChild: false
      }, {
        title: 'Master',
        icon: 'fa-th-large',
        name: 'admin.master',
        path: '',
        haveChild: true,
        child: [{
          title: 'Kategori',
          name: 'admin.master.kategori',
          path: '/admin/master/kategori'
        }, {
          title: 'Menu',
          name: 'admin.master.menu',
          path: '/admin/master/menu'
        }]
      }, {
        title: 'Setting',
        icon: 'fa-th-large',
        name: 'admin.setting',
        path: '',
        haveChild: true,
        child: [{
          title: 'Web Config',
          name: 'admin.setting.webconfig',
          path: '/admin/setting/webconfig'
        }, {
          title: 'User',
          name: 'admin.setting.user',
          path: '/admin/setting/user'
        }]
      }]
    };
  },
  methods: {},
  mounted: function mounted() {
    var vm = this;
    vm.$router.push({
      name: "admin.dashboard"
    })["catch"](function () {});
    ;
    setTimeout(function () {
      postscribe__WEBPACK_IMPORTED_MODULE_0___default()('#script', "<script src=\"".concat(process.env.MIX_APP_URL, "/assets/js/index.js\"></script>"));
      console.log('test');
    }, 1000);
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Index.vue?vue&type=template&id=308e9219&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/Index.vue?vue&type=template&id=308e9219& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "aro-sidebar", attrs: { id: "aro-sidebar" } }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "aro-sidebar--menu", attrs: { id: "scroll-sidebar" } },
        [
          _c(
            "ul",
            { staticClass: "aro-sidebar--menu_ul" },
            [
              _vm._l(_vm.dataMenu, function(menu) {
                return [
                  _c("li", { staticClass: "aro-sidebar--menu_li" }, [
                    _c(
                      "div",
                      { staticClass: "aro-sidebar--menu_item" },
                      [
                        _c("router-link", { attrs: { to: menu.path } }, [
                          _c("a", { attrs: { href: "javascript:void(0)" } }, [
                            _c("i", { staticClass: "fa", class: menu.icon }),
                            _c("span", { staticClass: "menu-text" }, [
                              _vm._v(_vm._s(menu.title))
                            ])
                          ]),
                          _vm._v(" "),
                          menu.haveChild
                            ? _c("i", {
                                staticClass: "icon-submenu fa fa-angle-right"
                              })
                            : _vm._e()
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    menu.haveChild
                      ? _c(
                          "ul",
                          { staticClass: "aro-sidebar--submenu_ul" },
                          [
                            _vm._l(menu.child, function(submenu) {
                              return [
                                _c(
                                  "li",
                                  { staticClass: "aro-sidebar--submenu_li" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "aro-sidebar--submenu_item"
                                      },
                                      [
                                        _c(
                                          "router-link",
                                          { attrs: { to: submenu.path } },
                                          [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "javascript:void(0)"
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fa fa-circle-thin"
                                                }),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass: "submenu-text"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(submenu.title)
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ]
                            })
                          ],
                          2
                        )
                      : _vm._e()
                  ])
                ]
              })
            ],
            2
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "aro-main" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "aro-content" }, [_c("router-view")], 1)
    ]),
    _vm._v(" "),
    _vm._m(2)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "aro-sidebar--brand" }, [
      _c("div", { staticClass: "aro-sidebar--brand_text" }, [_vm._v("AROPEX")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "aro-top-menu" }, [
      _c("div", { staticClass: "top-menu" }, [
        _c("div", { staticClass: "aro-top-menu_left" }, [
          _c(
            "div",
            {
              staticClass: "aro-menu",
              attrs: { "data-event": "dropdown", "data-target": "#aro-sidebar" }
            },
            [_c("i", { staticClass: "fa fa-bars" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "aro-top-menu_rigth" }, [
          _c("div", { staticClass: "aro-info-top" }, [
            _c("div", { staticClass: "top-icon" }, [
              _c("i", { staticClass: "fa fa-search" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "top-icon" }, [
              _c("i", { staticClass: "fa fa-snowflake-o" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "top-icon" }, [
              _c("span", [_vm._v("12")]),
              _vm._v(" "),
              _c("i", { staticClass: "fa fa-commenting-o" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "top-icon" }, [
              _c("span", [_vm._v("1")]),
              _vm._v(" "),
              _c("i", { staticClass: "fa fa-bell-o" })
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "aro-profile-top dropdown",
              attrs: {
                "data-event": "dropdown",
                "data-target": "#profile-top-dropdown"
              }
            },
            [
              _c("img", {
                staticClass: "aro-profile-top-img",
                attrs: { src: "/assets/images/avatar-1.png" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "aro-profile-top-dropdown",
              attrs: { id: "profile-top-dropdown" }
            },
            [
              _c("div", { staticClass: "aro-profile-information" }, [
                _c("div", { staticClass: "profile-dropdown-name" }, [
                  _vm._v("Erick Dewa Pranata")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "aro-profile-button" }, [
                _c("div", { staticClass: "btn btn-warning btn-sm" }, [
                  _c("i", { staticClass: "fa fa-sign-out" }),
                  _vm._v(" Logout")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "btn btn-info btn-sm" }, [
                  _c("i", { staticClass: "fa fa-user" }),
                  _vm._v(" Profile")
                ])
              ])
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "aro-footer" }, [
      _c("div", { staticClass: "aro-footer_text" }, [
        _vm._v("\n\t\t\t© Aropex\n\t\t")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "aro-footer_social" }, [
        _c("div", { staticClass: "aro-footer_social_btn" }, [
          _c("i", { staticClass: "fa fa-facebook" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "aro-footer_social_btn" }, [
          _c("i", { staticClass: "fa fa-instagram" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "aro-footer_social_btn" }, [
          _c("i", { staticClass: "fa fa-twitter" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "aro-footer_social_btn" }, [
          _c("i", { staticClass: "fa fa-linkedin" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "aro-footer_social_btn" }, [
          _c("i", { staticClass: "fa fa-github" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "aro-footer_social_btn" }, [
          _c("i", { staticClass: "fa fa-feed" })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/admin/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/admin/Index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_308e9219___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=308e9219& */ "./resources/js/pages/admin/Index.vue?vue&type=template&id=308e9219&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_308e9219___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_308e9219___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/admin/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/Index.vue?vue&type=template&id=308e9219&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/admin/Index.vue?vue&type=template&id=308e9219& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_308e9219___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=308e9219& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Index.vue?vue&type=template&id=308e9219&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_308e9219___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_308e9219___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);