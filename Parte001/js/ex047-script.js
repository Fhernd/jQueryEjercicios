// Ejercicio 47: Ordenar los elementos de un arreglo y mostrarlos en una lista ordenada.

$(document).ready(() => {
    let lenguajes = ['Python', 'JavaScript', 'C', 'Java', 'C++', 'PHP', 'C#'];

    let listaLenguajes = $('#listaLenguajes');

    $.each(lenguajes, (indice, valor) => {
        listaLenguajes.append(`<li>${valor}</li>`);
    });

    let listaLenguajesOrdenados = $('#listaLenguajesOrdenados');

    lenguajes.sort();

    $.each(lenguajes, (indice, valor) => {
        listaLenguajesOrdenados.append(`<li>${valor}</li>`);
    });
});
