let diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

function mostrarDias() {
  document.getElementById('dias').textContent = 'Dias de la semana: ' + diasSemana.join(', ');
}

function agregarDia() {
    diasSemana.push('Domingo');
    mostrarDias();
  }

function eliminarDia() {
  diasSemana.pop();
  mostrarDias();
}

function sumar() {
    let suma = 0;
    let i = 1;
    while (i <= 5) {
      suma += i;
      i++;
    }
    document.getElementById('resulSum').textContent = 'La suma es: ' + suma;
  }
  
function factorial() {
    let factorial = 1;
    let i = 5;
    do {
      factorial *= i;
      i--;
    } while (i > 0);
    document.getElementById('resulFact').textContent = 'El factorial de 5 es: ' + factorial;
}

function saludo() {
    let saludos = '';
    for (let i = 1; i <= 7; i++) {
      if (i === 4) {
        saludos += '¡Soy el 4to!<br>';
      } else {
        saludos += 'Hola<br>';
      }
    }
    saludos += 'Acabamos de saludar';
    document.getElementById('saludos').innerHTML = saludos;
}

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'];

/*console.log('Iterando con for in:');
for (let index in meses) {
    console.log(index + ': ' + meses[index]);
}

console.log('Iterando con forEach:');
meses.forEach((mes, index) => {
    console.log(index + ': ' + mes);
});

console.log('Iterando con for of:');
for (let mes of meses) {
    console.log(mes);
}*/

function mostrarMeses() {
    let contenido = '';
    for (let mes of meses) {
        if (mes === 'Julio') {
            continue;
        }
        contenido += mes + '<br>';
    }
    contenido += 'Diciembre';
    document.getElementById('Meses').innerHTML = contenido;
}