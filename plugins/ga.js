// Google Analytics

import Vue from 'vue';
import VueGtag from 'vue-gtag';

// Ref: https://github.com/nuxt-community/gtm-module/issues/82#issuecomment-762153556
export default ({ isDev, app }) => {
  Vue.use(VueGtag, {
    config: { id: 'G-3S7N4YTZ03' },
    enabled: !isDev
  },
    app.router
  );
}