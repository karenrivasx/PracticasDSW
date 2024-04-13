function compararNumeros() {
    var num1 = 5;
    var num2 = 8;
    
    if( num1 < num2 ) { 
        alert("num1 no es mayor que num2");
    }  else {
        if( num2 >= 0 ) { 
            alert("num2 es positivo");
        }  else {
            num1++;
            if( num1 < num2 ) { 
                alert("Incrementar en 1 unidad el valor de num1 lo hace mayor que num2");
            }
        }
    }
}