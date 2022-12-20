$(function () {

	let ex  = $('.ex1');
  let e2  = $('.ex2');
  let btn = $('button[type=button]');

  btn
    .click(function () {
      ex.fadeOut('slow');
    })
    .dbclick(function () {
      ex.fadeIn('slow');
    });

  btn.mouseover(function () {
    // -> o segundo parametro é a opacidade que o elemento receberá
    // -> o terceiro é um callback
    ex.fadeTo(3000, 0.8, function () {
      ex2.fadeTo('show', 0.2);
    });
  });

});
