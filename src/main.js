import Vue from 'vue';
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

// Initialize Vue
const app = new Vue({
  render: h => h(App),
}).$mount('#app');


window.$app = app;
