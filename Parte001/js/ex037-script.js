// Ejercicio 37: Agregar elementos de un arreglo en una lista ordenada con $.each().

$(document).ready(() => {
    let lenguajes = ['JavaScript', 'Python', 'C++', 'Java', 'PHP', 'C'];

    let listaLenguajes = $('#lenguajes');

    $.each(lenguajes, (indice, valor) => {
        listaLenguajes.append($(`<li>${valor}</li>`))
    });
});
