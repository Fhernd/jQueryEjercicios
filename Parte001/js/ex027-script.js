// Ejercicio 27: Obtener el código HTML de un elemento con el método html().

$(document).ready(() => {
    let codigoHtml = $('#contenido').html();

    $('#resultado').text(codigoHtml);
});
