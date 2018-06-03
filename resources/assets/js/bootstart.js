import gapp from 'gmf/app';
import routesAuth from 'gmf/routes/auth';
import gmfComponent from 'gmf/component'
import components from './components';
import routesWeb from './routes/web';

import './themes/theme';

const options = {
  components,
};
gapp.use(gmfComponent);
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

  gapp.route(routesAuth);
  gapp.route(routesWeb);

  options.installed = true;
};
export default options;