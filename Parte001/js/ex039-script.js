// Ejercicio 39: Uso del método $.map() para crear una lista de cadenas enumeradas.

$(document).ready(() => {
    let lenguajes = ['JavaScript', 'Python', 'C++', 'Java', 'PHP', 'C'];

    // 1. JavaScript
    // 2. Python
    // 3. C++
    // ...

    lenguajes = $.map(lenguajes, (valor, indice) => {
        return `${indice + 1}. ${valor}`;
    });

    $('#lenguajes').html(lenguajes.join('<br/>'));
});
