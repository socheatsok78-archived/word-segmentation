import jQuery from 'jquery';
import Popper from 'popper.js';

try {
  window.$ = jQuery;
  window.jQuery = jQuery;

  window.Popper = Popper;

  require('bootstrap');
} catch (error) {
  //
}
