import '@/bootstrap';

import Vue, { VueConstructor } from 'vue';
import VueRouter from 'vue-router';

// Vue Plugins
import SegmentorPlugin from '@/plugins/segmentor';

// Components
import App from '@/App.vue';

// Vue Config
Vue.config.productionTip = false;

// Register Plugin
Vue.use(VueRouter);

// Customer Plugins
Vue.use(SegmentorPlugin);

/**
 * Vue Constructor
 * @type {VueConstructor}
 */
const vueConstructor = {
  mounted() {
    console.log('vueConstructor');
  },
  render: h => h(App),
};

// Initialize Vue
const app = new Vue(vueConstructor).$mount('#app');

window.$app = app;
