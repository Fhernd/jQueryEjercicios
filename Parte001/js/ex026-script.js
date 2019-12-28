// Ejercicio 26: Capturar el texto de los elementos que formen parte de otro elemento.

$(document).ready(() => {
    let parrafos = $('#contenido').children();
    let texto = '';

    parrafos.each(function(){
        texto += $(this).text() + '<br/>';
    });

    $('#resultado').html(texto);
});
