'use strict';

/* PAGETOP */
$(function(){
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').anitime({ scrollTop: 0}, 500);
    return false;
  });
});