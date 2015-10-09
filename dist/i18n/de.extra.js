/*!
* Parsleyjs
* Guillaume Potier - <guillaume@wisembly.com>
* Version 2.2.0-rc2 - built Fri Oct 09 2015 18:04:09
* MIT Licensed
*
*/
!(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module depending on jQuery.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Register plugin with global jQuery object.
    factory(jQuery);
  }
}(function ($) {
  // small hack for requirejs if jquery is loaded through map and not path
  // see http://requirejs.org/docs/jquery.html
  if ('undefined' === typeof $ && 'undefined' !== typeof window.jQuery)
    $ = window.jQuery;
window.ParsleyConfig = window.ParsleyConfig || {};
window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {};
window.ParsleyConfig.i18n.de = $.extend(window.ParsleyConfig.i18n.de || {}, {
  dateiso:  "Die Eingabe muss ein gültiges Datum sein (YYYY-MM-DD).",
  minwords: "Die Eingabe ist zu kurz. Sie muss aus %s oder mehr Wörtern bestehen.",
  maxwords: "Die Eingabe ist zu lang. Sie muss aus %s oder weniger Wörtern bestehen.",
  words:    "Die Länge der Eingabe ist ungültig. Sie muss zwischen %s und %s Wörter enthalten.",
  gt:       "Die Eingabe muss größer sein.",
  gte:      "Die Eingabe muss größer oder gleich sein.",
  lt:       "Die Eingabe muss kleiner sein.",
  lte:      "Die Eingabe muss kleiner oder gleich sein."
});
}));