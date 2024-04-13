//Arreglo con los nombres de las imagenes de las 7 maravillas
let maravillas = ["chichen_itza.svg", "coliseo.svg", "cristo_redentor.svg", "machu_picchu.svg", "muralla_china.svg","petra.svg","taj_mahal.svg"];
//Arreglo con el índice de la respuesta correcta
let correcta = [1,0,2,1,2,0,1];

//Arreglo vacío que se llenará con las opciones de respuesta para cada maravilla
let opciones = [];
//Líneas con arreglos de opciones de respuesta al arreglo opciones
opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);
//Declaramos variable y se inicializa en 0, llevará la cuenta de la posición actual en el juego
let posActual = 0;
////Declaramos variable y se inicializa en 0, contará la cantidad de respuestas acertadas
let cantidadAcertadas = 0;

//Reinicia el juego, oculta la pantalla inicial, muestra la pantalla de juego y carga la primera maravilla
function comenzarJuego(){
     //Establece la posición actual a 0
    posActual = 0;
    //Reinicia el contador de respuestas acertadas a 0
    cantidadAcertadas = 0;
    //Obtiene el elemento con el ID y cambia su estilo para que no se muestre
    document.getElementById("pantalla-inicial").style.display = "none";
    //Obtiene el elemento con el ID y cambia su estilo para que se muestre en la página
    document.getElementById("pantalla-juego").style.display = "block";
    //Llama a la función para cargar la primera maravilla en la pantalla de juego
    cargarMaravilla();
}

//Verifica si se han mostrado todas las maravillas
//Si es así, llama a terminarJuego, de lo contrario, limpia las opciones y carga la maravilla actual
function cargarMaravilla(){
    //Comprueba si ya se han mostrado todas las maravillas
    if(maravillas.length <= posActual){
        //Si se han mostrado todas, termina el juego
        terminarJuego();
    }
    else{
        //Si aún hay maravillas por mostrar, primero limpia las opciones previas
        limpiarOpciones();
        //Establece la fuente de la imagen para la maravilla actual
        //Concatena la ruta 'img/' con el nombre del archivo de la maravilla actual
        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];
        //Actualiza el contenido de texto de los elementos con ID 'n0', 'n1', y 'n2' con las opciones de respuesta para la maravilla actual.
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

//Restablece las clases de los elementos de opción a su estado original
function limpiarOpciones(){
    //Selecciona el elemento con ID 'n#' y establece su clase a 'nombre'
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    // Selecciona el elemento con ID 'l#' y establece su clase a 'letra'
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

//Toma la opción elegida, verifica si es correcta y actualiza la interfaz de usuario, incrementa posActual y se establece un temporizador para cargar la siguiente maravilla
function comprobarRespuesta(opElegida){
    //Compara la opción elegida con la respuesta correcta del arreglo 'correcta' en la posición actual
    if(opElegida==correcta[posActual]){//acertó
        //Cambia la clase del elemento seleccionado para reflejar una respuesta correcta
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        //Incrementa el contador de respuestas correctas
        cantidadAcertadas++;
    }else{// no acertó
        //Cambia la clase del elemento seleccionado para reflejar una respuesta incorrecta
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
         //Resalta la respuesta correcta para el usuario.
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    //Avanza a la siguiente pregunta
    posActual++;
    //Establece un temporizador para cargar la siguiente maravilla después de 1 segundo
    setTimeout(cargarMaravilla,1000);
}

//Oculta la pantalla de juego, muestra la pantalla final y actualiza el número de respuestas correctas e incorrectas
function terminarJuego(){
    //Oculta la pantalla de juego cambiando su estilo de visualización a 'none'
    document.getElementById("pantalla-juego").style.display = "none";
    //Muestra la pantalla final cambiando su estilo de visualización a 'block'
    document.getElementById("pantalla-final").style.display = "block";
    //Actualiza el contenido 'numCorrectas' para mostrar la cantidad de aciertos
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    //Calcula y muestra el número de respuestas incorrectas
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}

//Oculta la pantalla final y muestra la pantalla inicial, permitiendo jugar de nuevo
function volverAlInicio(){
    //Oculta la pantalla final cambiando su estilo de visualización a 'none'
    document.getElementById("pantalla-final").style.display = "none";
    //Muestra la pantalla inicial cambiando su estilo de visualización a 'block'
    document.getElementById("pantalla-inicial").style.display = "block";
    //Asegura que la pantalla de juego también esté oculta
    document.getElementById("pantalla-juego").style.display = "none";
}