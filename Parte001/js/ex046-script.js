// Ejercicio 46: Encontrar las palabras de una longitud arbitraria con $.grep().

$(document).ready(() => {
    let lenguajes = ['JavaScript', 'PHP', 'Python', 'C++', 'C', 'Perl', 'Julia', 'Java', 'Scala'];

    let listaLenguajes = $('#listaLenguajes');

    $.each(lenguajes, (indice, valor)=> {
        listaLenguajes.append(`<li>${valor}</li>`);
    });

    lenguajes = $.grep(lenguajes, (valor) => {
        return valor.match(/\b.{5}\b/);
    });

    let listaLenguajesFiltrada = $('#listaLenguajesFiltrada');

    $.each(lenguajes, (indice, valor)=> {
        listaLenguajesFiltrada.append(`<li>${valor}</li>`);
    });
});
