let palavra = 'André';

(function () {
    document.write(`essa palavra tem ${palavra.length} caracteres <br>`);
    document.write(`a palavra ${palavra} ficou ${palavra.toUpperCase()} <br>`);
    document.write(`a letra ${palavra[2]} é o terceiro carácter <br>`);
    document.write(`a palavra ${palavra} ficou ${palavra.replace(palavra[2], 'x')} <br>`);
})(palavra)

