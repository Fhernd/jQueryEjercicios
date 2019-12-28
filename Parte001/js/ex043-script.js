// Ejercicio 43: Filtrar el contenido de un arreglo utilizando una expresión regular.

$(document).ready(() => {
    let lenguajes = ['JavaScript', 'Python', 'C++', 'Java', 'PHP', 'C'];

    let listaLenguajes = $('#listaLenguajes');

    $.each(lenguajes, (indice, valor) => {
        listaLenguajes.append(`<li>${valor}</li>`);
    });

    let listaLenguajesFiltrada = $('#listaLenguajesFiltrada');

    lenguajes = $.grep(lenguajes, (valor) => {
        return valor.match(/^[A-J]/);
    });

    $.each(lenguajes, (indice, valor) => {
        listaLenguajesFiltrada.append(`<li>${valor}</li>`);
    });
});
