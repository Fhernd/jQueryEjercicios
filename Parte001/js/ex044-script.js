// Ejercicio 44: Obtener los valores de un arreglo que terminen con un carácter dado.

$(document).ready(() => {
    let lenguajes = ['JavaScript', 'Perl', 'C++', 'Python', 'Java', 'Cobol', 'C', 'PHP'];

    let listaLenguajes = $('#listaLenguajes');

    $.each(lenguajes, (indice, valor) => {
        listaLenguajes.append(`<li>${valor}</li>`);
    });

    let listaLenguajesFiltrada = $('#listaLenguajesFiltrada');

    lenguajes = $.grep(lenguajes, (valor) => {
        return valor.match(/[l]$/);
    });

    $.each(lenguajes, (indice, valor) => {
        listaLenguajesFiltrada.append(`<li>${valor}</li>`);
    });
});
