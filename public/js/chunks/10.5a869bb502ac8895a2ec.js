webpackJsonp([10],{

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Chooser.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sns = __webpack_require__("./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue");

var _Sns2 = _interopRequireDefault(_Sns);

var _AuthCache = __webpack_require__("./resources/assets/js/vendor/gmf-sys/pages/Auth/AuthCache.js");

var _AuthCache2 = _interopRequireDefault(_AuthCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AppAuthChooser',
  components: {
    AuthSns: _Sns2.default
  },
  data: function data() {
    return {
      mainDatas: [],
      sending: false
    };
  },

  computed: {
    routeQuery: function routeQuery() {
      var q = {};
      if (this.$route.query && this.$route.query.continue) q.continue = this.$route.query.continue;
      return q;
    }
  },
  methods: {
    removeItem: function removeItem(item) {},
    goItem: function goItem(item) {
      var _this = this;

      this.sending = true;
      this.$http.post('sys/auth/checker', item).then(function (response) {
        _this.sending = false;
        var u = response.data.data;
        if (u) {
          _this.$go({ name: 'auth.password', params: { id: u.id }, query: _this.routeQuery });
        }
      }).catch(function (err) {
        _this.sending = false;
        _this.$toast(err);
      });
    },
    fetchData: function fetchData() {
      this.mainDatas = _AuthCache2.default.get() || [];
    }
  },
  mounted: function mounted() {
    this.fetchData();
  }
};

/***/ }),

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue":
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

exports.default = {
  name: 'GmfPagesAuthSns',
  props: {
    title: {
      type: String,
      default: '使用合作账号登录'
    },
    type: {
      type: String,
      default: 'login'
    }
  },
  data: function data() {
    return {
      sending: false
    };
  },

  computed: {
    canSns: function canSns() {
      if (!this.$root.configs.auth || !this.$root.configs.auth.sns) return false;
      return this.$root.configs.auth.sns;
    },
    snsQQ: function snsQQ() {
      if (!this.canSns) return false;
      return this.makeUrl(this.$root.configs.auth.sns.qq);
    },
    snsWeixin: function snsWeixin() {
      if (!this.canSns) return false;
      return this.makeUrl(this.$root.configs.auth.sns.weixin);
    },
    snsWeibo: function snsWeibo() {
      if (!this.canSns) return false;
      return this.makeUrl(this.$root.configs.auth.sns.weibo);
    }
  },
  methods: {
    fetchData: function fetchData() {},
    makeUrl: function makeUrl(old) {
      var url = false;
      if (old && this.type) {
        url = old.indexOf('?') > 0 ? old + '&type=' + this.type : old + '?type=' + this.type;
      } else if (old) {
        url = old;
      }
      if (url && this.$route.query.continue) {
        url = url.indexOf('?') > 0 ? url + '&continue=' + this.$route.query.continue : url + '?continue=' + this.$route.query.continue;
      }
      return url;
    }
  },
  mounted: function mounted() {
    this.fetchData();
  }
};

/***/ }),

/***/ "./node_modules/_css-loader@0.28.11@css-loader/index.js!./node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d50a4dc6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * The default transition, used when the element is visible\r\n * since the beginning of the animation\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The enter transition, used when the element is not visible on the screen\r\n * since the beginning of the animation and become visible\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The leave transition, used when the element is visible on the screen\r\n * since the beginning of the animation and is removed\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The stand transition, used when the element is going to accelerate,\r\n * like movements from bottom to top\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The out transition, used when the element is going to deaccelerate,\r\n * like movements from top to bottom\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/* Transitions - Based on Angular Material */\n/**\r\n * The layout system breakpoints\r\n * ---\r\n * @access private\r\n * @type layout\r\n * @group layout\r\n */\n/**\r\n * The available gutter sizes\r\n * ---\r\n * @access private\r\n * @type layout\r\n * @group layout\r\n */\n/**\r\n * Breakpoint\r\n */\n/**\r\n * Base\r\n */\n/**\r\n * Layout Item\r\n */\n/**\r\n * Hide Element\r\n */\n.login-sns[data-v-d50a4dc6] {\n  text-align: center;\n}\n.login-sns .md-icon-button[data-v-d50a4dc6] {\n    margin: 20px 36px 0px 0px;\n    min-width: auto;\n    box-shadow: none;\n    width: 50px;\n    height: 50px;\n}\n.login-sns .md-icon-button .md-icon[data-v-d50a4dc6] {\n      transition: all .345s;\n      width: 30px;\n      height: 30px;\n      font-size: 30px;\n}\n.login-sns .md-icon-button:hover .md-icon[data-v-d50a4dc6] {\n      transform: scale(1.3);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/_extract-text-webpack-plugin@3.0.2@extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/_vue-style-loader@3.1.2@vue-style-loader/index.js!./node_modules/_css-loader@0.28.11@css-loader/index.js!./node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d50a4dc6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/_css-loader@0.28.11@css-loader/index.js!./node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d50a4dc6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/_vue-style-loader@3.1.2@vue-style-loader/lib/addStylesClient.js")("344a2088", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d50a4dc6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!../../../../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./Sns.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d50a4dc6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!../../../../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./Sns.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/_vue-loader@13.7.2@vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d50a4dc6\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.canSns
    ? _c("md-card-content", { staticClass: "login-sns" }, [
        _c("div", { staticClass: "md-subheading" }, [
          _vm._v(_vm._s(_vm.title))
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "layout-row layout-align-center-center" },
          [
            _vm.snsQQ
              ? _c(
                  "md-button",
                  {
                    staticClass: "md-icon-button md-raised md-primary",
                    attrs: { href: _vm.snsQQ }
                  },
                  [
                    _c("md-icon", {
                      attrs: {
                        "md-src": "/assets/vendor/gmf-sys/svg/auth-qq.svg"
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.snsWeixin
              ? _c(
                  "md-button",
                  {
                    staticClass: "md-icon-button md-raised md-primary",
                    attrs: { href: _vm.snsWeixin }
                  },
                  [
                    _c("md-icon", {
                      attrs: {
                        "md-src": "/assets/vendor/gmf-sys/svg/auth-weixin.svg"
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.snsWeibo
              ? _c(
                  "md-button",
                  {
                    staticClass: "md-icon-button md-raised md-primary",
                    attrs: { href: _vm.snsWeibo }
                  },
                  [
                    _c("md-icon", {
                      attrs: {
                        "md-src": "/assets/vendor/gmf-sys/svg/auth-weibo.svg"
                      }
                    })
                  ],
                  1
                )
              : _vm._e()
          ],
          1
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-d50a4dc6", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/_vue-loader@13.7.2@vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ec38fe40\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Chooser.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-card",
    [
      _c(
        "md-card-header",
        [
          _c("md-card-header-text", [
            _c("div", { staticClass: "md-title" }, [_vm._v("选择帐号")])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "md-list",
        [
          _vm._l(_vm.mainDatas, function(item) {
            return _c(
              "md-list-item",
              {
                key: item.id,
                on: {
                  click: function($event) {
                    _vm.goItem(item)
                  }
                }
              },
              [
                _c(
                  "md-avatar",
                  [_c("md-image", { attrs: { "md-src": item.avatar } })],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "md-list-item-text" }, [
                  _c("span", [_vm._v(_vm._s(item.name))]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(item.account))])
                ])
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "md-list-item",
            {
              attrs: {
                to: {
                  name: "auth.identifier",
                  query: { continue: _vm.$route.query.continue }
                }
              }
            },
            [
              _c(
                "md-avatar",
                [
                  _c("md-icon", { staticClass: "md-size-2x" }, [
                    _vm._v("account_circle")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "md-list-item-text" }, [
                _c("span", [_vm._v("使用其他帐号")]),
                _vm._v(" "),
                _c("span", [_vm._v("使用新的账号登录")])
              ])
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c("md-divider"),
      _vm._v(" "),
      _c("auth-sns"),
      _vm._v(" "),
      _vm.mainDatas && _vm.mainDatas.length
        ? [
            _c("md-divider"),
            _vm._v(" "),
            _c(
              "md-card-content",
              [
                _c(
                  "md-button",
                  {
                    attrs: {
                      to: {
                        name: "auth.remove",
                        query: { continue: _vm.$route.query.continue }
                      }
                    }
                  },
                  [_vm._v("\n        移除账号\n      ")]
                )
              ],
              1
            )
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.sending
        ? _c("md-progress-bar", { attrs: { "md-mode": "indeterminate" } })
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-ec38fe40", module.exports)
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

/***/ "./resources/assets/js/vendor/gmf-sys/pages/Auth/AuthCache.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthCache = function () {
  function AuthCache() {
    _classCallCheck(this, AuthCache);

    this.storageKey = "gmf.sys.auth." + window.location.host;
  }

  _createClass(AuthCache, [{
    key: "get",
    value: function get() {
      return JSON.parse(localStorage.getItem(this.storageKey)) || [];
    }
  }, {
    key: "has",
    value: function has(user) {
      return false;
    }
  }, {
    key: "remove",
    value: function remove(user) {
      if (!user) return;
      var users = this.get();
      var ind = -1;
      for (var i = 0; i < users.length; i++) {
        if (users[i].id == user.id) {
          ind = i;
          break;
        }
      }
      if (i >= 0) {
        users.splice(i, 1);
        localStorage.removeItem(this.storageKey);
        localStorage.setItem(this.storageKey, JSON.stringify(users));
      }
    }
  }, {
    key: "add",
    value: function add(user) {
      if (!user) return;
      var users = this.get();
      var isExists = false;
      users.forEach(function (item) {
        if (item.id == user.id) {
          isExists = true;
        }
      });
      if (!isExists) {
        users.push(user);
      }
      localStorage.removeItem(this.storageKey);
      localStorage.setItem(this.storageKey, JSON.stringify(users));
    }
  }]);

  return AuthCache;
}();

exports.default = new AuthCache();

/***/ }),

/***/ "./resources/assets/js/vendor/gmf-sys/pages/Auth/Chooser.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/_vue-loader@13.7.2@vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Chooser.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/_vue-loader@13.7.2@vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ec38fe40\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Chooser.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources\\assets\\js\\vendor\\gmf-sys\\pages\\Auth\\Chooser.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ec38fe40", Component.options)
  } else {
    hotAPI.reload("data-v-ec38fe40", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/_extract-text-webpack-plugin@3.0.2@extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/_vue-style-loader@3.1.2@vue-style-loader/index.js!./node_modules/_css-loader@0.28.11@css-loader/index.js!./node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d50a4dc6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/_vue-loader@13.7.2@vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/_vue-loader@13.7.2@vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d50a4dc6\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d50a4dc6"
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
Component.options.__file = "resources\\assets\\js\\vendor\\gmf-sys\\pages\\Auth\\Sns.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d50a4dc6", Component.options)
  } else {
    hotAPI.reload("data-v-d50a4dc6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});