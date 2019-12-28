// Ejercicio 35: Agregar el contenido de un arreglo como texto de un párrafo.

$(document).ready(() => {
    let lenguajes = ['JavaScript', 'Python', 'C++', 'Java', 'PHP', 'C'];

    $('#lenguajes').text(lenguajes.join(', '));
});
