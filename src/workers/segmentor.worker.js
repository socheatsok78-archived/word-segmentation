import * as Comlink from 'comlink';

/**
 * Word Segment Worker
 */
class SegmentorWorker {
    logSomething() {
        // eslint-disable-next-line
        console.log('Segmentor::logSomething');
    }
}

Comlink.expose(SegmentorWorker);

