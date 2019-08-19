import * as Comlink from 'comlink';

/**
 * Word Segment Worker
 */
class SegmentorWorker {
  logSomething() {
    console.log('Segmentor::logSomething');
  }
}

Comlink.expose(SegmentorWorker);
