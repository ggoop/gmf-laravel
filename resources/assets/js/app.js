window.Vue = window.Vue || require('vue');
import gmf from './vendor/gmf-sys';

import layouts from './layouts';

Vue.use(layouts);

gmf.run();