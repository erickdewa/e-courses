(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin.master.level"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/master/level/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/master/level/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FormTambah__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/FormTambah */ "./resources/js/pages/admin/master/level/components/FormTambah.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FormTambah: _components_FormTambah__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      showList: true,
      showForm: false,
      columns: [{
        name: 'Nama',
        data: 'name'
      }, {
        name: 'Aksi',
        data: 'action'
      }],
      thisUuid: '',
      isEdit: false
    };
  },
  methods: {
    setShowList: function setShowList() {
      var vm = this;
      vm.showList = true;
      vm.showForm = false;
      vm.isEdit = false;
      vm.thisUuid = '';
    },
    setShowForm: function setShowForm() {
      var vm = this;
      vm.showList = false;
      vm.showForm = true;
    },
    callback: function callback() {
      var vm = this;
      setTimeout(function () {
        $('#table').on('click', '.edit', function (e) {
          var uuid = $(this).data('uuid');
          vm.thisUuid = uuid;
          vm.isEdit = true;
          vm.setShowForm();
        });
        $('#table').on('click', '.hapus', function (e) {
          var uuid = $(this).data('uuid');
          vm.deleteData(uuid);
        });
      }, 200);
    },
    deleteData: function deleteData(uuid) {
      var vm = this;
      swal({
        title: "Apakah anda yakin?",
        text: "Data yang dihapus tidak dapat dikembalikan.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes!",
        cancelButtonText: "No",
        closeOnConfirm: false,
        closeOnCancel: false
      }).then(function (isConfirm) {
        if (isConfirm) {
          vm.$http({
            url: "".concat(vm.apiUrl, "/level/").concat(uuid, "/delete"),
            method: 'DELETE'
          }).then(function (res) {
            vm.$refs.table.reload();
            toastr.success(res.data.message, 'Success');
          })["catch"](function (err) {
            toastr.error(err.response.data.message, 'Error');
          });
        }
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/master/level/components/FormTambah.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/master/level/components/FormTambah.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['uuid', 'isEdit'],
  data: function data() {
    return {
      formData: {
        uuid: '',
        name: '',
        username: '',
        email: '',
        level_id: '',
        password: ''
      }
    };
  },
  methods: {
    simpanData: function simpanData(uuid) {
      var vm = this;
      var urls = "".concat(vm.apiUrl, "/level/create");

      if (uuid != '') {
        urls = "".concat(vm.apiUrl, "/level/").concat(uuid, "/update");
      }

      Aropex.btnLoad('.btn-submit', true);
      vm.$http({
        url: urls,
        data: vm.formData,
        method: 'POST'
      }).then(function (res) {
        vm.$parent.setShowList();
        Aropex.btnLoad('.btn-submit', false);
        toastr.success(res.data.message, 'Success');
      })["catch"](function (err) {
        Aropex.btnLoad('.btn-submit', false);
        toastr.error(err.response.data.message, 'Error');
      });
    },
    getData: function getData(uuid) {
      var vm = this;
      vm.$http({
        url: "".concat(vm.apiUrl, "/level/").concat(uuid, "/getdata"),
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

    if (vm.isEdit) {
      vm.formData.uuid = vm.uuid;
      vm.getData(vm.formData.uuid);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/master/level/Index.vue?vue&type=template&id=212a0863&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/master/level/Index.vue?vue&type=template&id=212a0863& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
        _vm.showList
          ? _c("div", { staticClass: "aro-restraint" }, [
              _c("div", { staticClass: "aro-restraint_title" }, [
                _c("span", [_vm._v("Tambah Level")]),
                _vm._v(" "),
                _c("div", { staticClass: "button-table" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success btn-sm",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.setShowForm()
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-plus" }),
                      _vm._v(" Tambah\n\t\t\t\t\t")
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "aro-restraint_body" },
                [
                  _c("AdminTable", {
                    ref: "table",
                    attrs: {
                      id: "table",
                      classx: "table table-rowed",
                      urls: "/level/index",
                      callbacks: _vm.callback(),
                      columns: _vm.columns
                    }
                  })
                ],
                1
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { "enter-active-class": "animated fadeIn" } }, [
        _vm.showForm
          ? _c("div", { staticClass: "aro-restraint" }, [
              _c("div", { staticClass: "aro-restraint_title" }, [
                _c("span", [_vm._v("Level")]),
                _vm._v(" "),
                _c("div", { staticClass: "button-table" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-info btn-sm",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.setShowList()
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-reply-all" }),
                      _vm._v(" Kembali\n\t\t\t\t\t")
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "aro-restraint_body" },
                [
                  _c("FormTambah", {
                    attrs: { uuid: _vm.thisUuid, isEdit: _vm.isEdit }
                  })
                ],
                1
              )
            ])
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/master/level/components/FormTambah.vue?vue&type=template&id=530d22b7&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/master/level/components/FormTambah.vue?vue&type=template&id=530d22b7& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      "form",
      {
        staticClass: "form",
        attrs: { id: "formUser", autocomplete: "off" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.simpanData(_vm.formData.uuid)
          }
        }
      },
      [
        _c("div", { staticClass: "form-body" }, [
          _c("div", { staticClass: "row" }, [
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
                      _vm.$set(_vm.formData, "name", $event.target.value)
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
    return _c(
      "div",
      { staticClass: "form-action", attrs: { align: "right" } },
      [
        _c(
          "button",
          {
            staticClass: "btn btn-sm btn-success btn-submit",
            attrs: { type: "submit", form: "formUser" }
          },
          [_c("i", { staticClass: "fa fa-save" }), _vm._v(" Simpan\n\t\t\t")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/admin/master/level/Index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/admin/master/level/Index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_212a0863___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=212a0863& */ "./resources/js/pages/admin/master/level/Index.vue?vue&type=template&id=212a0863&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/master/level/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_212a0863___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_212a0863___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/master/level/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/master/level/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/admin/master/level/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/master/level/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/master/level/Index.vue?vue&type=template&id=212a0863&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/admin/master/level/Index.vue?vue&type=template&id=212a0863& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_212a0863___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=212a0863& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/master/level/Index.vue?vue&type=template&id=212a0863&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_212a0863___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_212a0863___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/admin/master/level/components/FormTambah.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/admin/master/level/components/FormTambah.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormTambah_vue_vue_type_template_id_530d22b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormTambah.vue?vue&type=template&id=530d22b7& */ "./resources/js/pages/admin/master/level/components/FormTambah.vue?vue&type=template&id=530d22b7&");
/* harmony import */ var _FormTambah_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormTambah.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/master/level/components/FormTambah.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormTambah_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormTambah_vue_vue_type_template_id_530d22b7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormTambah_vue_vue_type_template_id_530d22b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/master/level/components/FormTambah.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/master/level/components/FormTambah.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/admin/master/level/components/FormTambah.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTambah_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTambah.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/master/level/components/FormTambah.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTambah_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/master/level/components/FormTambah.vue?vue&type=template&id=530d22b7&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/admin/master/level/components/FormTambah.vue?vue&type=template&id=530d22b7& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTambah_vue_vue_type_template_id_530d22b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTambah.vue?vue&type=template&id=530d22b7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/master/level/components/FormTambah.vue?vue&type=template&id=530d22b7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTambah_vue_vue_type_template_id_530d22b7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTambah_vue_vue_type_template_id_530d22b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);