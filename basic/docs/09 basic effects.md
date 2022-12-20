# Learn JQuery


## Efeitos Básicos

### Efeito para esconder o elemento
- Para esconder o elemento podemos usar o método: `hide`

- Sintaxe:
```js
$('h1').hide();
```

- Podemos controlar como irá desaparecer passando parametros de default do JQuery ou mesmo passando um tempo (em milissegundos).
    - Parametros padrão: `fast` (rápido), `slow` (devagar);
    - Definindo por tempo: `1000`, `2000`;

    - **Exemplo de uso:**
        ```js
        $('h1').hide('slow')
        $('p').hide('fast')
        $('a').hide(1500)
        ```

### Efeito aparecer o elemento
- Para tal usa-se: `show`

- Sintaxe:
```js
$('header').show();
```

- Os argumentos aceitos para controle do aparecimento são os mesmo que o `hide()`:
    - Argumentos de default: `fast`, `slow`;
    - Controlando com tempo (em milissegundos): `1000`, `1500`

    - **Exemplos de uso:**
    ```js
    $('header').show();
    $('header').show('fast');
    $('header').show('slow');
    $('header').show(1505);
    ```

### Efeito de alternancia (desaparecer ou aparecer)
- O efeito para isso é o: `toggle` (traduzindo seria: _'alternar'_)

- Sintaxe:
```js
$('div').show();
$('div').toggle();
```
- Como a `div` está com show (aparecendo), ao colocar o comando `toggle` a `div` será escondida;

