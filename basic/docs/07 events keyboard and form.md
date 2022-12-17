# Learn JQuery


## Eventos de Teclado e Fórmulario


### Teclado 
**Exemplos: **

- **Primeiro exemplo:**
	```js
	$('.key').keypress(function () {
		let text = $(this).val();
		ex.text(text);
	});
	```

- **Segundo exemplo:**
	```js
	$('.key').keydown(function () {
		let text = $(this).val();
		ex.text(text);
	});
	```

- **Terceiro exemplo:**
	```js
	$('.key').keyup(function () {
		let text = $(this).val();
		ex.text(text);
	});
	```

- **Fazendou um placeholder com JQuery:**
	```html
	[index.html]
	<form action="">
		<label>
			<input type="text"  class="place" title="Digite seu nome" />
		</label>
		<label>
			<input type="text"  class="place" title="Digite seu nome" />
		</label>
		<label>
			<input type="text"  class="place" title="Digite seu nome" />
		</label>

		<label>
			<textarea rows="10" class="place key" title="Digite seu nome" />
			</textarea>
		</label>

		<label>
			<button>Botão</button>
			<button>Enviar</button>
		</label>
	</form>
	```

	```js
	[script.js]
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
	```


### Fórmulario
**Exemplos: **


