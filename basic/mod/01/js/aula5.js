$(function () {

	/*
	*=> Evento de erro na imagem

	$('img').error(function () {
		let imagem = $(this).attr('src');
		alert(``);

		$('img').attr('src', 'img/error.png');
	});
	*/

	/*
	*->> Evento de resize 
	* Irá redimensionar a imagem referente a largura e espesura da janela 
	* ¬ quando o evento resize da janela for acionado
	
	let widthWindow  = $(window).width();
	let heightWindow = $(window).height();

	$('img')
		.width(widthWindow)
		.height(heightWindow);

	$(window).resize(function () {
		$('img')
			.width(widthWindow)
			.height(heightWindow);
	});
	*/

	/*
	*->> Evento de scroll

	# Rotina simples	
	$(window).scroll(function () {
		$('img').fadeOut('1000');
	});
	
	$('body').css("height", "7000px");

	# Rotina setando a imagem conforme o valor do scrollTop pelo evento de scroll
	$(window).scroll(function () {
		let top = $(window).scrollTop();
		console.log(top);

		if (top > 400) {
			$('img').fadeOut('1000');
		} else {
			$('img').fadeIn('1000');
		}
	});
	*/
});