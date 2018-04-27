window.Vue = window.Vue || require('vue');

// import "babel-polyfill";
import { start } from './vendor/gmf-sys';
//import stage from './vendor/ghub-stage';
import http from 'gmf/core/utils/http';
//Vue.use(stage);
const appMixin = {
  methods: {
    async loadConfigs() {
      try {
        const response = await this.$http.get('/site/configs');
        this.$setConfigs(response.data.data);
      } catch (err) {
        return false;
      }
      return false;
    },
    async beforeCreated() {
      this.appName = 'gmf';
      if (window.gmfConfig) {
        this.$setConfigs(window.gmfConfig);
      }
      await this.loadConfigs();
    }
  }
};

function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
var promise = new Promise(function(resolve, reject) {
  const vcode = getQueryString('vcode');
  if (vcode) {
    http.post('/api/sys/auth/login-vcode/' + vcode).then(res => {
      getConfigs();
    });
  } else {
    getConfigs();
  }
  function getConfigs() {
    http.get('/site/configs').then(res => {
      window.gmfConfig = res.data.data;
      resolve();
    });
  }
});

start.run({ promise }, appMixin);
