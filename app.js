const seccionBatalla = document.getElementById('campo-batalla');
const msjBatalla = document.getElementById('msj-batalla');
const imgAtaqueJugador = document.getElementById('img-ataque-jugador');
const imgAtaquePc = document.getElementById('img-ataque-pc');
const btnPiedra = document.getElementById('btn-piedra');
const btnPapel = document.getElementById('btn-papel');
const btnTijeras = document.getElementById('btn-tijeras');
const btnModo = document.getElementById('btn-modo'); // Nuevo botón para cambiar el modo

let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;
let modoOscuro = false; // Variable para controlar el modo claro/oscuro

const imagenes = [
    {
        name: "Piedra",
        url: "assets/Piedra.PNG" 
    },
    {
        name: "Papel",
        url: "assets/Papel.PNG" 
    },
    {
        name: "Tijeras",
        url: "assets/Tijeras.PNG" 
    }
];

function iniciar(){
    seccionBatalla.style.display = 'none';
}

btnPiedra.addEventListener('click', function(){
    opcionJugador = "Piedra";
    opPc();
});

btnPapel.addEventListener('click', function(){
    opcionJugador = "Papel";
    opPc();
});

btnTijeras.addEventListener('click', function(){
    opcionJugador = "Tijeras";
    opPc();
});

function opPc(){
    var aleatorio = nAleatorio();

    if(aleatorio == 0){
        opcionPc = "Piedra";
    }else if(aleatorio == 1){
        opcionPc = "Papel";
    }else if(aleatorio == 2){
        opcionPc = "Tijeras"
    }

    batalla();
}

function batalla(){
    if(opcionJugador == opcionPc){
        msjBatalla.innerHTML = "Empate";
    }else if(opcionJugador == "Piedra" && opcionPc == "Tijeras"){
        msjBatalla.innerHTML = "Ganaste!";
    }else if(opcionJugador == "Papel" && opcionPc == "Piedra"){
        msjBatalla.innerHTML = "Ganaste!";
    }else if(opcionJugador == "Tijeras" && opcionPc == "Papel"){
        msjBatalla.innerHTML = "Ganaste!";
    }else{
        msjBatalla.innerHTML = "Perdiste :(";
    }

    addImagenes();
}

function nAleatorio(){
    let n = Math.floor(Math.random() * 3);
    return n;
}

function addImagenes(){
    for(let i=0;i<imagenes.length;i++){
        if(opcionJugador == imagenes[i].name){
            imgJugador = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
            imgAtaqueJugador.innerHTML = inserta;
        }
        
        if(opcionPc == imagenes[i].name){
            imgPc = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
            imgAtaquePc.innerHTML = inserta;
        }
    }

    seccionBatalla.style.display = 'flex';
}

window.addEventListener('load', iniciar);

// Función para cambiar el modo entre claro y oscuro
function cambiarModo() {
    modoOscuro = !modoOscuro;
    if (modoOscuro) {
        document.body.classList.add('modo-oscuro');
        btnModo.textContent = 'Modo Claro';
    } else {
        document.body.classList.remove('modo-oscuro');
        btnModo.textContent = 'Modo Oscuro';
    }
}
