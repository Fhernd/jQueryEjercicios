// Ejercicio 41: Usar el método $.each() para crear una lista desde un arreglo.

$(document).ready(() => {
    let lenguajes = ['JavaScript', 'Python', 'C++', 'Java', 'PHP', 'C'];
    let listaLenguajes = $('#listaLenguajes');

    lenguajes = $.map(lenguajes, (valor) => {
        return valor.toUpperCase();
    });

    $.each(lenguajes, (indice, valor) => {
        listaLenguajes.append(`<li>${valor}</li>`);
    });
});
