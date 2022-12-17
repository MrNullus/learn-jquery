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

	$('.ev1')
		.focus(function () {
			ex.text($(this).attr('title'));
		})
		.keyup(function () {
			if ($(this).val() == 'pontocom') {
				$('.ev2').focus();
			}
		});

	$('.ev2').blur(function () {
		ex.text(`Saída do campo: ${$(this).attr('name')}`)
	});

});
