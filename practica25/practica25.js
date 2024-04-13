function OperacionesMatematicas(operacion, a, b) {
    switch (operacion) {
      case 'sumar':
        return a + b;
      case 'restar':
        return a - b;
      case 'multiplicar':
        return a * b;
      case 'dividir':
        return b !== 0 ? a / b : 'No se puede dividir por cero';
      case 'residuo':
        return a % b;
      default:
        return 0;
    }
}

function ejecutarOperacion() {
    var operacion = document.getElementById('operacion').value;
    var a = parseInt(document.getElementById('primero').value);
    var b = parseInt(document.getElementById('segundo').value);
    var resultado = OperacionesMatematicas(operacion, a, b);
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
  }