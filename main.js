$(function() {
  $(window).load(function() {
    $(this).scrollTop(0);
    $(".se-pre-con").fadeOut(4000);
  });
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };
});

        var app = document.getElementById('appapp');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('by trollface security')
    .pauseFor(2500)
    .deleteAll()
    .typeString('in popbob we trust')
    .pauseFor(2500)
    .deleteAll()
    .typeString('"k-klep-klepto-kle-k-k-k-k-kleptocracy -boe jiden"')
    .pauseFor(2500)
    .start();