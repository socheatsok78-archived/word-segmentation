import * as Comlink from 'comlink';

// eslint-disable-next-line
import { VueConstructor} from 'vue';

// Segmentor Worker Process
import SegmentorWorker from '@/workers/segmentor.worker';

class SegmentorPlugin {
  /**
    * 
    * @param {VueConstructor} Vue
    */
  static install(Vue) {
    const Segmentor = Comlink.wrap(new SegmentorWorker);

    Vue.prototype.segmentor = new Segmentor;
  }
}

export default SegmentorPlugin;
