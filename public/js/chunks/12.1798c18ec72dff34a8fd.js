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

/***/ "./node_modules/_vue-style-loader@3.1.2@vue-style-loader/lib/addStylesClient.js":
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__("./node_modules/_vue-style-loader@3.1.2@vue-style-loader/lib/listToStyles.js")

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/_vue-style-loader@3.1.2@vue-style-loader/lib/listToStyles.js":
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
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