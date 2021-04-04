(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin.setting.webconfig"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/setting/webconfig/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/setting/webconfig/Index.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      formData: {
        uuid: ''
      }
    };
  },
  methods: {
    changeImage: function changeImage($event) {
      var vm = this;
      vm.formData.ilustration = $event.target.files[0];

      if (typeof vm.formData.ilustration != 'undefined') {
        var oFReader = new FileReader();
        oFReader.readAsDataURL(vm.formData.ilustration);

        oFReader.onload = function (oFREvent) {
          $('.images').css('background-image', 'url(' + oFREvent.target.result + ')');
        };
      }
    },
    simpanData: function simpanData() {
      var vm = this;
      var urls = "".concat(vm.apiUrl, "/webconfig/").concat(vm.formData.uuid, "/update");
      $('.btn-submit').prop('disabled', true);
      var formData = new FormData($("#FormTambah")[0]);
      vm.axios.post(urls, formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }).then(function (res) {
        $('.btn-submit').prop('disabled', false);
        toastr.success(res.data.message, 'Success');
      })["catch"](function (err) {
        $('.btn-submit').prop('disabled', false);
        toastr.error(err.response.data.message, 'Error');
      });
    },
    getData: function getData() {
      var vm = this;
      vm.$http({
        url: "".concat(vm.apiUrl, "/webconfig/getdata"),
        method: 'GET'
      }).then(function (res) {
        vm.formData = res.data.data;
      })["catch"](function (err) {
        toastr.error(err.response.data.message, 'Error');
      });
    }
  },
  mounted: function mounted() {
    var vm = this;
    vm.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/setting/webconfig/Index.vue?vue&type=template&id=cc81823e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/setting/webconfig/Index.vue?vue&type=template&id=cc81823e& ***!
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
  return _c(
    "div",
    [
      _c("transition", { attrs: { "enter-active-class": "animated fadeIn" } }, [
        _c("div", { staticClass: "aro-restraint" }, [
          _c("div", { staticClass: "aro-restraint_title" }, [
            _c("span", [_vm._v("Web Config")]),
            _vm._v(" "),
            _c("div", { staticClass: "button-table" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "aro-restraint_body" }, [
            _c(
              "form",
              {
                staticClass: "form",
                attrs: { id: "FormTambah", autocomplete: "off" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.simpanData()
                  }
                }
              },
              [
                _c("div", { staticClass: "form-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          attrs: { align: "center" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "image-upload-box images",
                              style:
                                "background-image: url(" +
                                _vm.formData.ilustration +
                                "); width: 300px; height: 200px; background-size: cover;"
                            },
                            [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: {
                                  type: "file",
                                  id: "ilustration",
                                  accept: "image/png, image/jpeg",
                                  name: "ilustration",
                                  placeholder: "Name"
                                },
                                on: { change: _vm.changeImage }
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "ilustration" } }, [
                                _c("i", { staticClass: " fa fa-plus" })
                              ])
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formData.name,
                              expression: "formData.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "name",
                            required: "",
                            placeholder: "Name"
                          },
                          domProps: { value: _vm.formData.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formData,
                                "name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Description")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formData.description,
                              expression: "formData.description"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "description",
                            required: "",
                            placeholder: "Description"
                          },
                          domProps: { value: _vm.formData.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formData,
                                "description",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Facebook")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formData.facebook,
                              expression: "formData.facebook"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "facebook",
                            required: "",
                            placeholder: "Facebook"
                          },
                          domProps: { value: _vm.formData.facebook },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formData,
                                "facebook",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Instagram")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formData.instagram,
                              expression: "formData.instagram"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "instagram",
                            required: "",
                            placeholder: "Instagram"
                          },
                          domProps: { value: _vm.formData.instagram },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formData,
                                "instagram",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Twitter")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formData.twitter,
                              expression: "formData.twitter"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "twitter",
                            required: "",
                            placeholder: "Twitter"
                          },
                          domProps: { value: _vm.formData.twitter },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formData,
                                "twitter",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Github")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formData.github,
                              expression: "formData.github"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "github",
                            required: "",
                            placeholder: "Github"
                          },
                          domProps: { value: _vm.formData.github },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formData,
                                "github",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Telegram")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formData.telegram,
                              expression: "formData.telegram"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "telegram",
                            required: "",
                            placeholder: "Telegram"
                          },
                          domProps: { value: _vm.formData.telegram },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formData,
                                "telegram",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Youtube")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formData.youtube,
                              expression: "formData.youtube"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "youtube",
                            required: "",
                            placeholder: "Youtube"
                          },
                          domProps: { value: _vm.formData.youtube },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formData,
                                "youtube",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-action", attrs: { align: "right" } },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-success btn-submit",
                        attrs: { type: "submit", form: "FormTambah" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-save" }),
                        _vm._v(" Simpan\n\t\t\t\t\t\t")
                      ]
                    )
                  ]
                )
              ]
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/admin/setting/webconfig/Index.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/admin/setting/webconfig/Index.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_cc81823e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=cc81823e& */ "./resources/js/pages/admin/setting/webconfig/Index.vue?vue&type=template&id=cc81823e&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/setting/webconfig/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_cc81823e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_cc81823e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/setting/webconfig/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/setting/webconfig/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/admin/setting/webconfig/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/setting/webconfig/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/setting/webconfig/Index.vue?vue&type=template&id=cc81823e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/admin/setting/webconfig/Index.vue?vue&type=template&id=cc81823e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_cc81823e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=cc81823e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/setting/webconfig/Index.vue?vue&type=template&id=cc81823e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_cc81823e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_cc81823e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);