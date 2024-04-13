function calcularPeso() {
    var peso = parseFloat(document.getElementById('peso').value);
    var opcion = parseInt(document.getElementById('opcion').value);
    var peso_tierra = 9.81; 
    var peso_marte = 3.711; 
    var peso_jupiter = 24.79;
    var resultado = 0;
    var mensaje = '';
  
    switch(opcion) {
      case 1:
        resultado = peso * peso_marte / peso_tierra;
        mensaje = "Su peso en Marte es: " + resultado + " kg";
        break;
      case 2:
        resultado = peso * peso_jupiter / peso_tierra;
        mensaje = "Su peso en Júpiter es: " + resultado + " kg";
        break;
      default:
        mensaje = "no existe esa opcion";
    }
  
    document.getElementById('resultado').textContent = mensaje;
  }