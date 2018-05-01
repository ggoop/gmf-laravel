import config from 'gmf/config';
import routesAuth from 'gmf/routes/auth';

import components from './components';
import routesWeb from './routes/web';

import './themes/theme';

const options = {
  components,
};

options.install = (Vue) => {
  if (options.installed) {
    console.warn('Vue components is already installed.');
    return;
  }
  for (let component in options) {
    const componentInstaller = options[component];

    if (componentInstaller && component !== 'install') {
      Vue.use(componentInstaller);
    }
  }

  config.route(routesAuth);
  config.route(routesWeb);

  options.installed = true;
};
export default options;