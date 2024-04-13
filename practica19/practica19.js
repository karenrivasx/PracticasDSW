var valores = [true, 10, false, "codigo", "herramientas", 7];

    var textoMayor = valores[3] > valores[4] ? valores[3] : valores[4];
    alert("El texto mayor es: " + textoMayor);

    var nu1 = 8;
    var nu2 = 4;
    var rT = nu2 > nu1;
    var rT;
    var rF = nu2 < nu1;
    var rT;
    alert("Resultado con booleanos\n"+nu2+">"+nu1+" : " + rT +"\n"+nu2+"<"+nu1+ " : " + rF);

    // 3. Operaciones matemáticas 
    var suma = valores[1] + valores[5];
    var resta = valores[1] - valores[5];
    var multiplicacion = valores[1] * valores[5];
    var division = valores[1] / valores[5];
    alert("Operaciones matematicas - suma: " + suma + ", resta: " + resta + ", multiplicacion: " + multiplicacion + ", division: " + division.toFixed(2));