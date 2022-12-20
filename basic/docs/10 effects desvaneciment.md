# Learn JQuery


## Efeitos de Desvanecimento

### Efeito de entrada
Setar o aparecimento do elemento
- Sintaxe:
	```js
	let btn = $('button[type=button]');

	btn
    .dbclick(function () {
      ex.fadeIn('slow');
    });
	```

### Efeito de saida
Setar o desaparecimento do elemento
- Sintaxe: 
	```js
	let btn = $('button[type=button]');

	btn
    .click(function () {
      ex.fadeOut('slow');
    });
	```

### Efeito de opacidade
Setar a opacidade do elemento
- Sintaxe: 
```js
btn.mouseover(function () {
  // -> o segundo parametro é a opacidade que o elemento receberá
  ex.fadeTo('show', 0.8);
})
```
- Usando o callback dele para encadear efeitos de desvanecimento:
```js
btn.mouseover(function () {
  // -> o segundo parametro é a opacidade que o elemento receberá
  // -> o terceiro é um callback
  ex.fadeTo(3000, 0.8, function () {
    ex2.fadeTo('show', 0.2);
  });
});
```