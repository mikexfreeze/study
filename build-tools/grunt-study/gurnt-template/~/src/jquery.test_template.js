/*
 * test_template
 * https://github.com/XIAO034/~
 *
 * Copyright (c) 2016 Micheal
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.test_template = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.test_template = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.test_template.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.test_template.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].test_template = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
