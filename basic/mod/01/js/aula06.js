$(function () {

	let ex = $('.ex1');

	$('.ev1').click(function () {
		$(this).css("background", "#ccc");
		ex.text("Você clicou!");
	});

	$('.ev2').dbClick(function () {
		$(this).css("background", "#ccc");
		ex.text("Você clicou duas vezes");
	});

	$('.ev3')
		.focusin(function () {
			$(this).css("background", "#ccc");
			ex.text("Você deu o focus");
		})
		.focusout(function () {
			$(this).css("background", "#000");
			ex.text("Você tirou o focus");
		});

	$('.ev4').hover(function () {
		$(this).css("background", "#ccc");
		ex.text("Passou o mouse");
	});

	$('.ev5')
		.mousedown(function () {
			$(this).css("background", "#ccc");s
			ex.text("Você apertou o botão do mouse");	
		}).mouseup(function () {
			$(this).css("background", "#000");
			ex.text("Você soltou o botão do mouse");
		});

	let qtdeEntradasMouse = 0;
	$('.ev6')
		.mouseenter(function () {
			qtdeEntradasMouse++;
			ex.text(`$Entradas do Mouse: ${qtdeEntradasMouse}`);
		})
		.mouseout(function () {
			ex.text("Saída do Mouse");
		});

	let qtdeEntradasMouseEv7 = 0;
	$('.ev7')
		.mouseover(function () {
			qtdeEntradasMouseEv7++;
			ex.text(`Mouse Over: ${qtdeEntradasMouseEv7}`);
		})
		.mouseleave(function () {
			ex.text("Mouse Leave");
		});

	$('.ev8').mousemove(function (move) {
		let localX = move.pageX();
		let localY = move.pageY();

		ex.text(`Movimento X: ${localX}px | Movimento Y: ${localY}px` );
	});
});