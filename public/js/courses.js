(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courses"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/kursus/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/kursus/Index.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      dataCourses: {
        price: '0',
        user: {
          name: ''
        }
      }
    };
  },
  methods: {
    getDataCourses: function getDataCourses(uuid) {
      var vm = this;
      vm.$http({
        url: "".concat(vm.baseUrl, "/courses/").concat(uuid, "/getdata"),
        method: 'GET'
      }).then(function (res) {
        vm.dataCourses = res.data.data;
      })["catch"](function (error) {// error
      });
    }
  },
  mounted: function mounted() {
    var vm = this;
    vm.getDataCourses(vm.$route.params.uuidCourses);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/kursus/Index.vue?vue&type=template&id=b49fb452&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/kursus/Index.vue?vue&type=template&id=b49fb452& ***!
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
    _c("div", { staticClass: "space" }),
    _vm._v(" "),
    _c("div", { staticClass: "courses-page" }, [
      _c("div", { staticClass: "courses-information-fly" }, [
        _c("div", { staticClass: "courses-thumbnail" }, [
          _c("img", { attrs: { src: _vm.dataCourses.thumbnile } })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "courses-price" }, [
          _vm._v("Rp. " + _vm._s(_vm.dataCourses.price.rupiah()))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "courses-materi" }, [
          _c("div", { staticClass: "title" }, [_vm._v("Kursus Materi :")]),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "materi-group" },
            [
              _vm._l(_vm.dataCourses.materigroup, function(materigroup) {
                return _vm._l(materigroup.materi, function(materi) {
                  return _c("li", { staticClass: "materi-item" }, [
                    _c("span", [_vm._v(_vm._s(materi.nm_materi))]),
                    _vm._v(" "),
                    _c("i", { staticClass: "fa fa-check" })
                  ])
                })
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _vm._m(0)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "courses-information" }, [
        _c("div", { staticClass: "courses-title" }, [
          _vm._v(_vm._s(_vm.dataCourses.name))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "courses-subtitle" }, [
          _vm._v(_vm._s(_vm.dataCourses.subname))
        ]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "courses-description" }, [
          _c("div", {
            domProps: { innerHTML: _vm._s(_vm.dataCourses.description) }
          })
        ]),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "courses-tool" },
          [
            _c("div", { staticClass: "title" }, [
              _vm._v("\n\t\t\t\t\tTools\n\t\t\t\t")
            ]),
            _vm._v(" "),
            _vm._l(_vm.dataCourses.coursestool, function(coursesTool) {
              return _c("div", { staticClass: "box-tool" }, [
                _c("div", { staticClass: "tool-image" }, [
                  _c("img", { attrs: { src: coursesTool.tool.image } })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "tool-info" }, [
                  _c("div", { staticClass: "tool-nama" }, [
                    _vm._v(_vm._s(coursesTool.tool.nm_tool))
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "tool-download",
                      on: {
                        click: function($event) {
                          return _vm.window.open(
                            coursesTool.tool.link,
                            "_blank"
                          )
                        }
                      }
                    },
                    [_vm._v("Download")]
                  )
                ])
              ])
            })
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "courses-teacher" }, [
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "teacher-info" }, [
            _c("div", { staticClass: "teacher-head" }, [
              _c("div", { staticClass: "teacher-name" }, [
                _vm._v(_vm._s(_vm.dataCourses.user.name))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "teacher-profesi" }, [
                _vm._v("Web Proggramer")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "teacher-desc" }, [
              _vm._v(
                "\n\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\t\t\t\tconsequat.\n\t\t\t\t\t"
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _vm._m(4)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "courses-action" }, [
      _c("div", { staticClass: "btn-join" }, [
        _vm._v("\n\t\t\t\t\tIkut Kelas\n\t\t\t\t")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "courses-rating-star" }, [
      _c("div", { staticClass: "rating-group" }, [
        _c("input", {
          staticClass: "rating__input rating__input--none",
          attrs: {
            checked: "",
            name: "rating2",
            id: "rating2-0",
            value: "0",
            type: "radio",
            disabled: ""
          }
        }),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "rating__label rating__label--half",
            attrs: { "aria-label": "0.5 stars", for: "rating2-05" }
          },
          [
            _c("i", {
              staticClass: "rating__icon rating__icon--star fa fa-star-half"
            })
          ]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "rating__input",
          attrs: {
            name: "rating2",
            id: "rating2-05",
            value: "0.5",
            type: "radio",
            disabled: ""
          }
        }),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "rating__label",
            attrs: { "aria-label": "1 star", for: "rating2-10" }
          },
          [
            _c("i", {
              staticClass: "rating__icon rating__icon--star fa fa-star"
            })
          ]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "rating__input",
          attrs: {
            name: "rating2",
            id: "rating2-10",
            value: "1",
            type: "radio",
            disabled: ""
          }
        }),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "rating__label rating__label--half",
            attrs: { "aria-label": "1.5 stars", for: "rating2-15" }
          },
          [
            _c("i", {
              staticClass: "rating__icon rating__icon--star fa fa-star-half"
            })
          ]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "rating__input",
          attrs: {
            name: "rating2",
            id: "rating2-15",
            value: "1.5",
            type: "radio",
            disabled: ""
          }
        }),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "rating__label",
            attrs: { "aria-label": "2 stars", for: "rating2-20" }
          },
          [
            _c("i", {
              staticClass: "rating__icon rating__icon--star fa fa-star"
            })
          ]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "rating__input",
          attrs: {
            name: "rating2",
            id: "rating2-20",
            value: "2",
            type: "radio",
            disabled: ""
          }
        }),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "rating__label rating__label--half",
            attrs: { "aria-label": "2.5 stars", for: "rating2-25" }
          },
          [
            _c("i", {
              staticClass: "rating__icon rating__icon--star fa fa-star-half"
            })
          ]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "rating__input",
          attrs: {
            name: "rating2",
            id: "rating2-25",
            value: "2.5",
            type: "radio",
            checked: ""
          }
        }),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "rating__label",
            attrs: { "aria-label": "3 stars", for: "rating2-30" }
          },
          [
            _c("i", {
              staticClass: "rating__icon rating__icon--star fa fa-star"
            })
          ]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "rating__input",
          attrs: {
            name: "rating2",
            id: "rating2-30",
            value: "3",
            type: "radio",
            disabled: ""
          }
        }),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "rating__label rating__label--half",
            attrs: { "aria-label": "3.5 stars", for: "rating2-35" }
          },
          [
            _c("i", {
              staticClass: "rating__icon rating__icon--star fa fa-star-half"
            })
          ]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "rating__input",
          attrs: {
            name: "rating2",
            id: "rating2-35",
            value: "3.5",
            type: "radio",
            disabled: ""
          }
        }),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "rating__label",
            attrs: { "aria-label": "4 stars", for: "rating2-40" }
          },
          [
            _c("i", {
              staticClass: "rating__icon rating__icon--star fa fa-star"
            })
          ]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "rating__input",
          attrs: {
            name: "rating2",
            id: "rating2-40",
            value: "4",
            type: "radio",
            disabled: ""
          }
        }),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "rating__label rating__label--half",
            attrs: { "aria-label": "4.5 stars", for: "rating2-45" }
          },
          [
            _c("i", {
              staticClass: "rating__icon rating__icon--star fa fa-star-half"
            })
          ]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "rating__input",
          attrs: {
            name: "rating2",
            id: "rating2-45",
            value: "4.5",
            type: "radio",
            disabled: ""
          }
        }),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "rating__label",
            attrs: { "aria-label": "5 stars", for: "rating2-50" }
          },
          [
            _c("i", {
              staticClass: "rating__icon rating__icon--star fa fa-star"
            })
          ]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "rating__input",
          attrs: {
            name: "rating2",
            id: "rating2-50",
            value: "5",
            type: "radio",
            disabled: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "courses-rating-label" }, [
        _c("span", [_vm._v("4.5/5.0")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "courses-learn" }, [
      _c("div", { staticClass: "learn-title" }, [
        _vm._v("\n\t\t\t\t\tApa saja yang dipelajari?\n\t\t\t\t")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row learn-items" }, [
        _c("div", { staticClass: "col-md-6 col-sm-12" }, [
          _c("div", { staticClass: "learn-item" }, [
            _c("i", { staticClass: "fa fa-lightbulb-o" }),
            _vm._v(" "),
            _c("div", { staticClass: "learn-text" }, [
              _vm._v("Be able to build ANY website you want.")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "learn-item" }, [
            _c("i", { staticClass: "fa fa-lightbulb-o" }),
            _vm._v(" "),
            _c("div", { staticClass: "learn-text" }, [
              _vm._v("Be able to build ANY website you want.")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "learn-item" }, [
            _c("i", { staticClass: "fa fa-lightbulb-o" }),
            _vm._v(" "),
            _c("div", { staticClass: "learn-text" }, [
              _vm._v("Be able to build ANY website you want.")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 col-sm-12" }, [
          _c("div", { staticClass: "learn-item" }, [
            _c("i", { staticClass: "fa fa-lightbulb-o" }),
            _vm._v(" "),
            _c("div", { staticClass: "learn-text" }, [
              _vm._v("Be able to build ANY website you want.")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "learn-item" }, [
            _c("i", { staticClass: "fa fa-lightbulb-o" }),
            _vm._v(" "),
            _c("div", { staticClass: "learn-text" }, [
              _vm._v("Be able to build ANY website you want.")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "learn-item" }, [
            _c("i", { staticClass: "fa fa-lightbulb-o" }),
            _vm._v(" "),
            _c("div", { staticClass: "learn-text" }, [
              _vm._v("Be able to build ANY website you want.")
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "teacher-image" }, [
      _c("img", { attrs: { src: "/assets/images/avatar-1.png" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "courses-comment" }, [
      _c("div", { staticClass: "title" }, [_vm._v("Everyone's reviews")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "carousel slide", attrs: { "data-ride": "carousel" } },
        [
          _c("div", { staticClass: "carousel-inner" }, [
            _c("div", { staticClass: "comment-item carousel-item active" }, [
              _c("div", { staticClass: "comment-box" }, [
                _c("div", { staticClass: "comment-info" }, [
                  _c("div", { staticClass: "comment-image" }, [
                    _c("img", { attrs: { src: "/assets/images/avatar-1.png" } })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "comment-nama" }, [
                    _vm._v("Erick Dewa Pranata")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "comment-date" }, [
                    _vm._v("11 January 2020")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "comment-side" }, [
                  _c("div", { staticClass: "side-top" }, [
                    _c("div", { staticClass: "comment-rating" }, [
                      _c("div", { staticClass: "rating-group" }, [
                        _c("input", {
                          staticClass: "rating__input rating__input--none",
                          attrs: {
                            checked: "",
                            name: "rating2",
                            id: "rating2-0",
                            value: "0",
                            type: "radio",
                            disabled: ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "rating__label rating__label--half",
                            attrs: {
                              "aria-label": "0.5 stars",
                              for: "rating2-05"
                            }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "rating__icon rating__icon--star fa fa-star-half"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "rating__input",
                          attrs: {
                            name: "rating2",
                            id: "rating2-05",
                            value: "0.5",
                            type: "radio",
                            disabled: ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "rating__label",
                            attrs: { "aria-label": "1 star", for: "rating2-10" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "rating__icon rating__icon--star fa fa-star"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "rating__input",
                          attrs: {
                            name: "rating2",
                            id: "rating2-10",
                            value: "1",
                            type: "radio",
                            disabled: ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "rating__label rating__label--half",
                            attrs: {
                              "aria-label": "1.5 stars",
                              for: "rating2-15"
                            }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "rating__icon rating__icon--star fa fa-star-half"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "rating__input",
                          attrs: {
                            name: "rating2",
                            id: "rating2-15",
                            value: "1.5",
                            type: "radio",
                            disabled: ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "rating__label",
                            attrs: {
                              "aria-label": "2 stars",
                              for: "rating2-20"
                            }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "rating__icon rating__icon--star fa fa-star"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "rating__input",
                          attrs: {
                            name: "rating2",
                            id: "rating2-20",
                            value: "2",
                            type: "radio",
                            disabled: ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "rating__label rating__label--half",
                            attrs: {
                              "aria-label": "2.5 stars",
                              for: "rating2-25"
                            }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "rating__icon rating__icon--star fa fa-star-half"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "rating__input",
                          attrs: {
                            name: "rating2",
                            id: "rating2-25",
                            value: "2.5",
                            type: "radio",
                            checked: ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "rating__label",
                            attrs: {
                              "aria-label": "3 stars",
                              for: "rating2-30"
                            }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "rating__icon rating__icon--star fa fa-star"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "rating__input",
                          attrs: {
                            name: "rating2",
                            id: "rating2-30",
                            value: "3",
                            type: "radio",
                            disabled: ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "rating__label rating__label--half",
                            attrs: {
                              "aria-label": "3.5 stars",
                              for: "rating2-35"
                            }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "rating__icon rating__icon--star fa fa-star-half"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "rating__input",
                          attrs: {
                            name: "rating2",
                            id: "rating2-35",
                            value: "3.5",
                            type: "radio",
                            disabled: ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "rating__label",
                            attrs: {
                              "aria-label": "4 stars",
                              for: "rating2-40"
                            }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "rating__icon rating__icon--star fa fa-star"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "rating__input",
                          attrs: {
                            name: "rating2",
                            id: "rating2-40",
                            value: "4",
                            type: "radio",
                            disabled: ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "rating__label rating__label--half",
                            attrs: {
                              "aria-label": "4.5 stars",
                              for: "rating2-45"
                            }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "rating__icon rating__icon--star fa fa-star-half"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "rating__input",
                          attrs: {
                            name: "rating2",
                            id: "rating2-45",
                            value: "4.5",
                            type: "radio",
                            disabled: ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "rating__label",
                            attrs: {
                              "aria-label": "5 stars",
                              for: "rating2-50"
                            }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "rating__icon rating__icon--star fa fa-star"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "rating__input",
                          attrs: {
                            name: "rating2",
                            id: "rating2-50",
                            value: "5",
                            type: "radio",
                            disabled: ""
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "comment-verifed",
                          attrs: { title: "Verifed User" }
                        },
                        [_c("i", { staticClass: "fa fa-check-circle-o" })]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "comment-thumb" }, [
                      _c("span", { staticClass: "thumb-up" }, [
                        _c("i", { staticClass: "fa fa-thumbs-o-up" })
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "thumb-down" }, [
                        _c("i", { staticClass: "fa fa-thumbs-o-down" })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "side-bottom" }, [
                    _vm._v(
                      "\n\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\t\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\t\t\t\t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\t\t\t\t\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\t\t\t\t\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\t\t\t\t\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t\t\t\t\t\t\t\t\t"
                    )
                  ])
                ])
              ])
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/user/kursus/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/user/kursus/Index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_b49fb452___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=b49fb452& */ "./resources/js/pages/user/kursus/Index.vue?vue&type=template&id=b49fb452&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/kursus/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_b49fb452___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_b49fb452___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/kursus/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/kursus/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/user/kursus/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/kursus/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/kursus/Index.vue?vue&type=template&id=b49fb452&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/user/kursus/Index.vue?vue&type=template&id=b49fb452& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b49fb452___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=b49fb452& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/kursus/Index.vue?vue&type=template&id=b49fb452&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b49fb452___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b49fb452___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);