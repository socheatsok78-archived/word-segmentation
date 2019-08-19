import jQuery from 'jquery';
import Popper from 'popper.js';

try {
  window.$ = jQuery;
  window.jQuery = jQuery;

  window.Popper = Popper;

  // eslint-disable-next-line
  require('bootstrap');
} catch (error) {
  //
}
