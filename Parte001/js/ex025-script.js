// Ejercicio 25: Aplicar un estilo al n-ésimo elemento por medio de un selector personalizado.

$(document).ready(() => {
    $('p:eq(2)').addClass('highlight');
});
