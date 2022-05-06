//SELECCIONAR PALABRA
var bancoDePalabras = ["FRUTILLA", "COMPUTADORA", "TABLERO", "PLANETA", "RUIDO", "LAPICERA", "COCODRILO"];
var palabraAleatoria = bancoDePalabras[Math.floor(Math.random() * bancoDePalabras.length)]
  

function validarDatos(texto) {
  var buscar = /[^A-ZÑ\s]/g;
  var result = buscar.test(texto);

  if (result) {
      alert("No se permiten vocales con tilde ni caracteres especiales");
      return false;
  }
  else {
      return true;
  }
}

//AGREGAR NUEVA PALABRA
var nuevaPalabra = document.querySelector("#nueva-palabra");

function agregarPalabra() {
    var capturarPalabra = document.querySelector("#input-nueva-palabra");
    var palabraCapturada = capturarPalabra.value.toUpperCase(); 

    if (capturarPalabra.value != "") {    
        if (validarDatos(palabraCapturada)) {
            if (!bancoDePalabras.includes(palabraCapturada)) {
                bancoDePalabras.push(palabraCapturada);
                console.log(bancoDePalabras);
            }
            else {
                alert("Esta palabra YA está ingresada");    
            }
        }

        capturarPalabra.value = "";
    }

    else {
        alert("Recuerda ingresar una nueva palabra en el recuadro");
    }
}

nuevaPalabra.onclick = agregarPalabra;

// JUEGO DEL AHORCADO
var numNoAgrup;
var agrupados;
var numAgrup;


btnIniciarJuego = document.querySelector("#iniciar-juego");
btnIniciarJuego.addEventListener("click", function(){

  numNoAgrup = 0;
  agrupados = [];
  numAgrup = 0;

  dibujarTablero();
  dibujarHorca();
  dibujarGuiones(palabraAleatoria);

    document.addEventListener('keydown',function(event){
        const keyName = event.key;
        var patron = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        var letra = keyName.toUpperCase();
        var palabraAhorcadoString = palabraAleatoria.split("");
           
        if (patron.includes(letra)){

          if (!agrupados.includes(letra)){

                // ACIERTOS
                for (var i = 0; i < palabraAhorcadoString.length; i++) {
                    if (letra == palabraAhorcadoString[i]) {
                        pincel.fillStyle = "#169d8d";
                        pincel.fillText(letra,(505+50*i),495);
                        numAgrup = numAgrup + 1;
                    }
                }
                
                if (numAgrup == palabraAhorcadoString.length) {
                    pincel.fillStyle = "#169d8d";
                    pincel.fillText("Ganaste, felicidades!",650,200);
                    pincel.clearRect(0,0,450,pantalla.height);
                    pincel.strokeStyle = "#169d8d";
                    ;
                }
                
                // ERRORES
                if (!palabraAhorcadoString.includes(letra)) {
                    if (numNoAgrup == 0) {
                        dibujarCabeza();
                        pincel.fillStyle = "#dd297a";
                        pincel.fillText(letra,(550+50*numNoAgrup),400);
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 1) {
                        pincel.fillStyle = "#dd297a";
                        pincel.fillText(letra,(550+50*numNoAgrup),400);
                        dibujarCuerpo();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 2) {
                        pincel.fillStyle = "#dd297a";
                        pincel.fillText(letra,(550+50*numNoAgrup),400);
                        dibujarPiernaIzq();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 3) {
                        pincel.fillStyle = "#dd297a";
                        pincel.fillText(letra,(550+50*numNoAgrup),400);
                        dibujarPiernaDer();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 4) {
                        pincel.fillStyle = "#dd297a";
                        pincel.fillText(letra,(550+50*numNoAgrup),400);
                        dibujarBrazoIzq();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 5) {
                        pincel.fillStyle = "#dd297a";
                        pincel.fillText(letra,(550+50*numNoAgrup),400);
                        dibujarBrazoDer();
                        numNoAgrup = numNoAgrup + 1;
                    }
                                       
                    else if (numNoAgrup == 6) {
                        pincel.fillStyle = "#dd297a";
                        pincel.fillText(letra,(550+50*numNoAgrup),400);
                        dibujarLineaFinal();
                        pincel.fillStyle = "#dd297a";
                        pincel.fillText("Fin del juego!",690,200);
                        pincel.strokeStyle = "#dd297a";
                        
                    }
                }
                //ACUMULA LETRAS YA USADAS
                agrupados.push(letra); 
          }else {
                alert("Esa letra ya fue ingresada");
            }
        }else {
            alert("Sólo usar letras");
        }        

    });


});


btnReiniciarJuego = document.querySelector("#reiniciar-juego");
btnReiniciarJuego.addEventListener("click", function(){
    location.reload();
});





