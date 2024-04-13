function determinarParidad() {
    // Capturar número utilizando prompt
    var numero = prompt("Por favor ingresa un número:");

    // Convertir el número capturado a entero
    numero = parseInt(numero);

    // Verificar si el número es par o impar
    if (numero % 2 === 0) {
        return "El número " + numero + " es par.";
    } else {
        return "El número " + numero + " es impar.";
    }
}

// Ejecutar la función y mostrar el resultado
alert(determinarParidad());