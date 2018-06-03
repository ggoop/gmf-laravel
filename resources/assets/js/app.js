window.Vue = window.Vue || require('vue');

import gapp from 'gmf/app';
import http from 'gmf/core/utils/http';
import bootstart from './bootstart';

gapp.use(bootstart);

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
gapp.config(function(){
  return new Promise(function(resolve, reject) {
  const vcode = getQueryString('vcode');
  if (vcode) {
    http.post('/api/sys/auth/login-vcode/' + vcode).then(res => {
      getConfigs();
    });
  } else {
    getConfigs();
  }

  function getConfigs() {
    http.get('/site/configs', { params: GetRequestParams() }).then(res => {
      resolve(res.data.data);
    });
  }
})
});
gapp.run({});
