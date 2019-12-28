// Ejercicio 40: Uso del método $.map() para crear una lista de cadenas en mayúscula.

$(document).ready(() => {
    let lenguajes = ['JavaScript', 'Python', 'C++', 'Java', 'PHP', 'C'];

    lenguajes = $.map(lenguajes, (valor, indice) => {
        return `${indice + 1}. ${valor.toUpperCase()}`;
    });

    // 1. JAVASCRIPT
    // 2. PYTHON
    // 3. C++
    // ...

    $('#lenguajes').html(lenguajes.join('<br/>'));
});
