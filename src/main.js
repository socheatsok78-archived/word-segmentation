import Vue from 'vue'
import App from '@/App.vue'

import SegmentorPlugin from "@/plugins/segmentor";

// Vue Config
Vue.config.productionTip = false

// Register Plugin
Vue.use(SegmentorPlugin);

// Initialize Vue
window.$app = new Vue({
  render: h => h(App),
}).$mount('#app');
