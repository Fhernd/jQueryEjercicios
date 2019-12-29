// Ejercicio 48: Ordenar un grupo de números y mostrarlos en una lista tipo <ol>.

$(document).ready(() => {
    let numeros = [13, 19, 2, 1, 29, 7, 5, 31];

    let listaNumeros = $('#listaNumeros');

    $.each(numeros, (indice, valor) => {
        listaNumeros.append(`<li>${valor}</li>`);
    });

    let listaNumerosOrdenados = $('#listaNumerosOrdenados');

    numeros.sort((a, b) => {
        return a - b;
    });

    $.each(numeros, (indice, valor) => {
        listaNumerosOrdenados.append(`<li>${valor}</li>`);
    });
});
