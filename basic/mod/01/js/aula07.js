$(function () {

	let ex = $('.ex1');

	$('.place').each(function () {

  	let input = $(this);
		let place = $(this).attr("title");

		input
			.val(place)
			.css("color", "#ccc")
			.focusin(function () {
				input.css("color", "#000");

				if (input.val() == place) {
					input.val('');
				}
			})
			.focusout(function () {
				if (input.val() == '') {
					input.css("color", "#ccc");
					input.val(place);
				}
			});

	});


	let ex = $('.ex1');
	// # Primeiro exemplo
	// $('.key').keypress(function () {
	// 	let text = $(this).val();
	// 	ex.text(text);
	// });

	// # Segundo exemplo
	$('.key').keydown(function () {
		let text = $(this).val();
		ex.text(text);
	});

	// # Terceiro exemplo
	$('.key').keyup(function () {
		let text = $(this).val();
		ex.text(text);
	});

});
