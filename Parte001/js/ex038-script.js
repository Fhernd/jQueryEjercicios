// Ejercicio 38: Agregar elementos de un arreglo en una lista no-ordenada con $.each().

$(document).ready(() => {
    let listaNoOrdenada = $('#lenguajes');

    let lenguajes = ['JavaScript', 'Python', 'C++', 'Java', 'PHP', 'C'];

    $.each(lenguajes, (indice, valor) => {
        listaNoOrdenada.append(`<li>${valor}</li>`);
    });
});
