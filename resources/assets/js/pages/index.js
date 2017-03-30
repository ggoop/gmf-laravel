import sys from './sys';
import org from './org';
import cbo from './cbo';

const options = {
    sys,
    org,
    cbo,
};

export default function install(Vue) {
    if (install.installed) {
        console.warn('Vue pages is already installed.');
        return;
    }
    install.installed = true;

    for (let component in options) {
        const componentInstaller = options[component];

        if (componentInstaller && component !== 'install') {
            Vue.use(componentInstaller);
        }
    }
}
