webpackJsonp([12],{

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Home/Home.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'Flexible',
  data: function data() {
    return {
      menuVisible: false
    };
  }
};

/***/ }),

/***/ "./node_modules/_css-loader@0.28.11@css-loader/index.js!./node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1840ed16\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/Home/Home.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.md-app[data-v-1840ed16] {\n  min-height: 100%;\n  max-width: 100%;\n  height: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n}\n.md-app-toolbar[data-v-1840ed16] {\n  height: 196px;\n}\n.md-drawer[data-v-1840ed16] {\n  width: 230px;\n  max-width: calc(100vw - 125px);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/_extract-text-webpack-plugin@3.0.2@extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/_vue-style-loader@3.1.2@vue-style-loader/index.js!./node_modules/_css-loader@0.28.11@css-loader/index.js!./node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1840ed16\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/Home/Home.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/index.js!./node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1840ed16\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/Home/Home.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/_vue-style-loader@3.1.2@vue-style-loader/lib/addStylesClient.js")("e87e90ca", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1840ed16\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!../../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1840ed16\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!../../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/_vue-loader@13.7.2@vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1840ed16\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Home/Home.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-app",
    { attrs: { "md-waterfall": "", "md-mode": "flexible" } },
    [
      _c("md-app-toolbar", { staticClass: "md-large md-primary" }, [
        _c("div", { staticClass: "md-toolbar-row" }, [
          _c(
            "div",
            { staticClass: "md-toolbar-section-start" },
            [
              _c(
                "md-button",
                {
                  staticClass: "md-icon-button",
                  on: {
                    click: function($event) {
                      _vm.menuVisible = !_vm.menuVisible
                    }
                  }
                },
                [_c("md-icon", [_vm._v("menu")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "flex" }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "md-toolbar-section-end" },
            [
              _c(
                "md-button",
                { staticClass: "md-icon-button" },
                [_c("md-icon", [_vm._v("more_vert")])],
                1
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "md-toolbar-row md-toolbar-offset" }, [
          _c("span", { staticClass: "md-display-1" }, [_vm._v("My Title")])
        ])
      ]),
      _vm._v(" "),
      _c(
        "md-app-drawer",
        {
          attrs: { "md-active": _vm.menuVisible },
          on: {
            "update:mdActive": function($event) {
              _vm.menuVisible = $event
            }
          }
        },
        [
          _c(
            "md-toolbar",
            { staticClass: "md-transparent", attrs: { "md-elevation": "0" } },
            [_vm._v("Navigation")]
          ),
          _vm._v(" "),
          _c(
            "md-list",
            [
              _c(
                "md-list-item",
                [
                  _c("md-icon", [_vm._v("move_to_inbox")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "md-list-item-text" }, [
                    _vm._v("Inbox")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "md-list-item",
                [
                  _c("md-icon", [_vm._v("send")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "md-list-item-text" }, [
                    _vm._v("Sent Mail")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "md-list-item",
                [
                  _c("md-icon", [_vm._v("delete")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "md-list-item-text" }, [
                    _vm._v("Trash")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "md-list-item",
                [
                  _c("md-icon", [_vm._v("error")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "md-list-item-text" }, [
                    _vm._v("Spam")
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "md-app-content",
        _vm._l(50, function(i) {
          return _c("p", { key: i }, [_vm._v("Lorem ipsum dolor sit amet,")])
        })
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-1840ed16", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/pages/Home/Home.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/_extract-text-webpack-plugin@3.0.2@extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/_vue-style-loader@3.1.2@vue-style-loader/index.js!./node_modules/_css-loader@0.28.11@css-loader/index.js!./node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1840ed16\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/Home/Home.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/_vue-loader@13.7.2@vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Home/Home.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/_vue-loader@13.7.2@vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1840ed16\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Home/Home.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1840ed16"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\pages\\Home\\Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1840ed16", Component.options)
  } else {
    hotAPI.reload("data-v-1840ed16", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});