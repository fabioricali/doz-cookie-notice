import {define, defineWebComponent} from 'doz'
import cmp from './src'

// expose component to global scope
function register() {
    if (typeof window !== 'undefined') {
        define(cmp.tag || 'doz-cookie-notice', cmp);
        // Keep in mind to add a prefix like this: 'dwc-' to the name of the component you are going to define, 
        // this to prevent Doz from processing possible Web Components that have the same name as the Doz Components.
        defineWebComponent('dwc-doz-cookie-notice', cmp, [
            'storage-key',
            'position',
            'message',
            'more-info-text',
            'more-info-link',
            'privacy-link',
            'ok-button-text',
            'theme'
        ]);
    }
}

register();

export default cmp

if (module.hot) {
    module.hot.dispose(function () {
        register();
    })
}
