// Ejercicio 45: Uso de la función $.grep() para encontrar las palabras que contengan un carácter dado.

$(document).ready(() => {
    let lenguajes = ['JavaScript', 'C++', 'Python', 'Java', 'C', 'PHP', 'Perl', 'Cobol'];

    let listaLenguajes = $('#listaLenguajes');

    $.each(lenguajes, (indice, valor) => {
        listaLenguajes.append(`<li>${valor}</li>`);
    });

    lenguajes = $.grep(lenguajes, (valor) => {
        return valor.match(/[a].+/);
    });

    let listaLenguajesFiltrada = $('#listaLenguajesFiltrada');

    $.each(lenguajes, (indice, valor) => {
        listaLenguajesFiltrada.append(`<li>${valor}</li>`);
    });
});
