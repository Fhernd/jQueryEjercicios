// Ejercicio 42: Mostrar datos filtrados de un arreglo con la función $.grep().

$(document).ready(() => {
    let lenguajes = ['JavaScript', 'Python', 'C++', 'Java', 'PHP', 'C'];

    let listaLenguajes = $('#listaLenguajes');

    $.each(lenguajes, (indice, valor)=> {
        listaLenguajes.append(`<li>${valor}</li>`);
    });

    let listaLenguajesFiltrada = $('#listaLenguajesFiltrada');

    lenguajes = $.grep(lenguajes, (valor) => {
        return valor.length > 5;
    });

    $.each(lenguajes, (indice, valor)=> {
        listaLenguajesFiltrada.append(`<li>${valor}</li>`);
    });
});
