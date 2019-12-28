// Ejercicio 36: Agregar el contenido de un arreglo como texto por línea de un párrafo.

$(document).ready(()=>{
    let lenguajes = ['JavaScript', 'Python', 'C++', 'Java', 'PHP', 'C'];

    $('#lenguajes').html(lenguajes.join('<br/>'));
});
