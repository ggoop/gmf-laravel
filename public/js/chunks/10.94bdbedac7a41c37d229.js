webpackJsonp([10],{"+mdw":function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.canSns?e("md-card-content",{staticClass:"login-sns"},[e("div",{staticClass:"md-subheading"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"layout-row layout-align-center-center"},[t.snsQQ?e("md-button",{staticClass:"md-icon-button md-raised md-primary",attrs:{href:t.snsQQ}},[e("md-icon",{attrs:{"md-src":"/assets/vendor/gmf-sys/svg/auth-qq.svg"}})],1):t._e(),t._v(" "),t.snsWeixin?e("md-button",{staticClass:"md-icon-button md-raised md-primary",attrs:{href:t.snsWeixin}},[e("md-icon",{attrs:{"md-src":"/assets/vendor/gmf-sys/svg/auth-weixin.svg"}})],1):t._e(),t._v(" "),t.snsWeibo?e("md-button",{staticClass:"md-icon-button md-raised md-primary",attrs:{href:t.snsWeibo}},[e("md-icon",{attrs:{"md-src":"/assets/vendor/gmf-sys/svg/auth-weibo.svg"}})],1):t._e()],1)]):t._e()},staticRenderFns:[]}},"5pOj":function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,".login-sns[data-v-4b400540]{text-align:center}.login-sns .md-icon-button[data-v-4b400540]{margin:20px 36px 0 0;min-width:auto;box-shadow:none;width:50px;height:50px}.login-sns .md-icon-button .md-icon[data-v-4b400540]{transition:all .345s;width:30px;height:30px;font-size:30px}.login-sns .md-icon-button:hover .md-icon[data-v-4b400540]{transform:scale(1.3)}",""])},"9dRT":function(t,n,e){var s=e("VU/8")(e("xt/T"),e("+mdw"),!1,function(t){e("zjPa")},"data-v-4b400540",null);t.exports=s.exports},"9w2o":function(t,n,e){var s=e("VU/8")(e("MsiW"),e("pZVp"),!1,null,null,null);t.exports=s.exports},MsiW:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=a(e("9dRT")),i=a(e("jFJc"));function a(t){return t&&t.__esModule?t:{default:t}}n.default={name:"AppAuthChooser",components:{AuthSns:s.default},data:function(){return{mainDatas:[],sending:!1}},computed:{},methods:{removeItem:function(t){},goItem:function(t){var n=this;this.sending=!0,this.$http.post("sys/auth/checker",t).then(function(t){n.sending=!1;var e=t.data.data;e&&n.$go({name:"auth.password",params:{id:e.id}})}).catch(function(t){n.sending=!1,n.$toast(t)})},fetchData:function(){this.mainDatas=i.default.get()||[]}},mounted:function(){this.fetchData()}}},jFJc:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function t(t,n){for(var e=0;e<n.length;e++){var s=n[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(n,e,s){return e&&t(n.prototype,e),s&&t(n,s),n}}();var i=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.storageKey="gmf.sys.auth."+window.location.host}return s(t,[{key:"get",value:function(){return JSON.parse(localStorage.getItem(this.storageKey))||[]}},{key:"has",value:function(t){return!1}},{key:"remove",value:function(t){if(t){for(var n=this.get(),e=0;e<n.length;e++)if(n[e].id==t.id){e;break}e>=0&&(n.splice(e,1),localStorage.setItem(this.storageKey,JSON.stringify(n)))}}},{key:"add",value:function(t){if(t){var n=this.get(),e=!1;n.forEach(function(n){n.id==t.id&&(e=!0)}),e||n.push(t),localStorage.setItem(this.storageKey,JSON.stringify(n))}}}]),t}();n.default=new i},pZVp:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("md-card",[e("md-card-header",[e("md-card-header-text",[e("div",{staticClass:"md-title"},[t._v("选择帐号")])])],1),t._v(" "),e("md-list",[t._l(t.mainDatas,function(n){return e("md-list-item",{key:n.id,on:{click:function(e){t.goItem(n)}}},[e("md-avatar",[e("md-image",{attrs:{"md-src":n.avatar}})],1),t._v(" "),e("div",{staticClass:"md-list-item-text"},[e("span",[t._v(t._s(n.name))]),t._v(" "),e("span",[t._v(t._s(n.account))])])],1)}),t._v(" "),e("md-list-item",{attrs:{to:{name:"auth.identifier"}}},[e("md-avatar",[e("md-icon",{staticClass:"md-size-2x"},[t._v("account_circle")])],1),t._v(" "),e("div",{staticClass:"md-list-item-text"},[e("span",[t._v("使用其他帐号")]),t._v(" "),e("span",[t._v("使用新的账号登录")])])],1)],2),t._v(" "),e("md-divider"),t._v(" "),e("auth-sns"),t._v(" "),t.mainDatas&&t.mainDatas.length?[e("md-divider"),t._v(" "),e("md-card-content",[e("md-button",{attrs:{to:{name:"auth.remove"}}},[t._v("\n        移除账号\n      ")])],1)]:t._e(),t._v(" "),t.sending?e("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):t._e()],2)},staticRenderFns:[]}},"xt/T":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"GmfPagesAuthSns",props:{title:{type:String,default:"使用合作账号登录"},type:{type:String,default:"login"}},data:function(){return{sending:!1}},computed:{canSns:function(){return!(!this.$root.configs.auth||!this.$root.configs.auth.sns)&&this.$root.configs.auth.sns},snsQQ:function(){return!!this.canSns&&this.makeUrl(this.$root.configs.auth.sns.qq)},snsWeixin:function(){return!!this.canSns&&this.makeUrl(this.$root.configs.auth.sns.weixin)},snsWeibo:function(){return!!this.canSns&&this.makeUrl(this.$root.configs.auth.sns.weibo)}},methods:{fetchData:function(){},makeUrl:function(t){return t&&this.type?t.indexOf("?")>0?t+"&type="+this.type:t+"?type="+this.type:t||!1}},mounted:function(){this.fetchData()}}},zjPa:function(t,n,e){var s=e("5pOj");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("e9e09b28",s,!0,{})}});