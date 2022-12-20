$(function () {

	$('#slide img:eq(0)').addClass('ativo').show('slow');
	let texto = $(".ativo").attr('alt');
	$('#slide').prepend("<p>"+texto+"</p>");

	setInterval(slide, 3000);
	console.log("hola datevid");

	function slide() {
		if ($('.ativo').next().length) {
			$('.ativo').fadeOut('slow').removeClass('ativo').next().fadeIn('slow').addClass('.ativo');
			console.log($('.ativo').next().length);
		} else {
			$('.ativo').fadeOut().removeClass('ativo');
			$('#slide img:eq(0)').fadeIn().addClass('ativo').show('slow');
		}

		let texto = $(".ativo").attr('alt');
		$('#slide p').hide().html(texto).delay(500).fadeIn(500);
	}

});