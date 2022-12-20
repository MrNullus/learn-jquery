$(function () {

	let ex = $('.ex1');

    $('ev1').click(function () {
        // ex.hide('fast');
        // ex.hide('slow');
        // ex.hide(1500);
        ex.hide();
    });

    $('ev2').click(function () {
        // ex.show('slow');
        // ex.show('fast');
        // ex.show('2000');
        ex.show();
    });

    $('ev3').click(function () {
        ex.toggle();
    });

    $('ev4').keyup(function () {
        let texto = $(this).val();

        if (texto === "hide") {
            ex.hide('slow');
        }

        if (texo  === "show") {
            ex.show('slow');
        }

        if (texto === "toggle") {
            ex.toggle();
        }
    });

});
