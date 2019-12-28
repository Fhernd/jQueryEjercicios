// Ejercicio 22: Seleccionar elemento que contenga un texto específico y aplicar un estilo.

$(document).ready(() => {
    $('p:contains(jQuery)').addClass('highlight');
});
