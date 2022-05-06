$(function() {
    $(window).load(function() {
      $(this).scrollTop(0);
      $(".se-pre-con").fadeOut(4000);
    });
    window.onbeforeunload = function() {
      window.scrollTo(0, 0);
    };
  });