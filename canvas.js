var tablero = document.querySelector("canvas");
var pincel = tablero.getContext("2d");
pincel.font = "bold 25px sans-serif";
pincel.strokeStyle = "darkblue";

function dibujarTablero(){
    pincel.fillStyle = "whitesmoke";
    pincel.fillRect(0,0,1200,800);
}

function dibujarGuiones() {
    for (var i = 0; i < palabraAleatoria.length; i++) {
        pincel.beginPath();
        pincel.moveTo((500+50*i),500);
        pincel.lineTo((525+50*i),500);
        pincel.stroke();
       
    }
}

function dibujarLineas(x, y, x1, y2) {
    pincel.beginPath();
    pincel.moveTo(x, y);
    pincel.lineTo(x1, y2);
    pincel.stroke();
    
}

function dibujarHorca(){
    dibujarLineas(100, 600, 200, 600);
    dibujarLineas(150, 600, 150, 200);
    dibujarLineas(150, 200, 250, 200);
    dibujarLineas(250, 200, 250, 220);
    pincel.stroke();
}

function dibujarCabeza(){
    pincel.beginPath();
    pincel.arc(250, 270, 50, 0, 2*3.14);
    pincel.stroke();
}

function dibujarCuerpo(){
    dibujarLineas(250, 320, 250, 500);
    pincel.stroke();
}

function dibujarPiernaIzq(){
    dibujarLineas(250, 500, 200, 550);
    pincel.stroke()
}

function dibujarPiernaDer(){
    dibujarLineas(250, 500, 300, 550);
    pincel.stroke()
}

function dibujarBrazoIzq(){
    dibujarLineas(250, 350, 200, 400);
    pincel.stroke()
}

function dibujarBrazoDer(){
    dibujarLineas(250, 350, 300, 400);
    pincel.stroke()
}

function dibujarLineaFinal(){
    dibujarLineas(190, 320, 310, 320);
    pincel.stroke()
}


