var diasSemana = [];
    
    for(var i = 0; i < 7; i++) {
        var dia = prompt("Ingrese el dia " + (i + 1) + " de la semana:");
        diasSemana.push(dia);
    }
    alert("Los dias capturados son: " + diasSemana.join(', '));