import Vue from 'vue'

// Vue Plugins
import SegmentorPlugin from "@/plugins/segmentor";

// Components
import App from '@/App.vue'

// Vue Config
Vue.config.productionTip = false

// Register Plugin
Vue.use(SegmentorPlugin);

// Initialize Vue
window.$app = new Vue({
  render: h => h(App),
}).$mount('#app');
