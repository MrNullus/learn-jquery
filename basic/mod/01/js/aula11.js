$(function () {

	let nav = $('.menu');

	$(window).scroll(function () {
		if ($(this).scrollTop > 173) {
			nav.fadeIn('slow');
			nav.addClass('fixed-menu');
			nav.fadeTo('slow', 0.6);
		} else {
			nav.fadeOut('slow');
			nav.removeClass('fixed-menu');
			nav.fadeTo('slow', 1);
		}
	});

});
