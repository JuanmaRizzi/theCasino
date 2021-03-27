'use strict';
//Selecting elements
const jugador0El = document.querySelector('.jugador--0');
const jugador1El = document.querySelector('.jugador--1');
const score0El = document.querySelector('#score--0'); //El= element
const score1El = document.getElementById('score--1'); // forma mas rapida que query selection
const scoreActual0El = document.getElementById('jugando--0');
const scoreActual1El = document.getElementById('jugando--1');

const dadoEl = document.querySelector('.dado');
const btnNuevo = document.querySelector('.btn-nuevo-juego');
const btnTirar = document.querySelector('.btn-tirar-dados');
const btnMantener = document.querySelector('.btn-mantener');

const cambiarJugador = function () {
  document.getElementById(`jugando--${jugadorActivo}`).textContent = 0;
  scoreActual = 0;
  jugadorActivo = jugadorActivo === 0 ? 1 : 0;
  jugador0El.classList.toggle('jugador--activo');
  jugador1El.classList.toggle('jugador--activo');
};
/*
const forzarjugador1 = function(){
    document.getElementById(`jugando--${jugadorActivo}`).textContent = 0
    scoreActual = 0;
    jugadorActivo = jugadorActivo === 0 ? 0 : 0;
    jugador0El.classList.add('jugador--activo')
    jugador1El.classList.remove('jugador--activo')
    

}
*/

//starting conditions
/*
score0El.textContent = 0
score1El.textContent = 0
dadoEl.classList.add('oculto')

const scores = [0,0 ] //fijarse aca si los arrays van con , o ;
let scoreActual = 0
let jugadorActivo = 0
let jugando = true*/

let scores, scoreActual, jugadorActivo, jugando;

const inicializar = function () {
  dadoEl.classList.add('oculto');

  scores = [0, 0]; //YA FUERON DECLARADAS; SOLO ESTAMOS ASIGNANDO VALORES. fijarse aca si los arrays van con , o ;
  scoreActual = 0;
  jugadorActivo = 0;
  jugando = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  scoreActual0El.textContent = 0;
  scoreActual1El.textContent = 0;

  jugador0El.classList.remove('jugador--ganador');
  jugador1El.classList.remove('jugador--ganador'); // le podemos pdir a JS que elimine una clase por mas que no este presente ahi
  jugador0El.classList.add('jugador--activo');
  jugador1El.classList.remove('jugador--activo');
};

inicializar();
//roll dice functionalities

btnTirar.addEventListener('click', function () {
  if (jugando) {
    // como la variable jugando es un boolean; no hace falta comprarala con nada

    const dado = Math.trunc(Math.random() * 6) + 1;
    console.log(dado);

    dadoEl.classList.remove('oculto');
    dadoEl.src = `${dado}_dado.png`;

    if (dado !== 1) {
      scoreActual += dado;
      document.getElementById(
        `jugando--${jugadorActivo}`
      ).textContent = scoreActual;

      // scoreActual0El.textContent =scoreActual  // cambiar despues oprque va a depender del jugador activo
    } else {
      document.getElementById(`jugando--${jugadorActivo}`).textContent = 0;
      scoreActual = 0;
      jugadorActivo = jugadorActivo === 0 ? 1 : 0;
      jugador0El.classList.toggle('jugador--activo');
      jugador1El.classList.toggle('jugador--activo');
    }
  }
});

btnMantener.addEventListener('click', function () {
  if (jugando) {
    console.log(' btn hold');
    scores[jugadorActivo] += scoreActual;
    document.getElementById(`score--${jugadorActivo}`).textContent =
      scores[jugadorActivo];

    if (scores[jugadorActivo] >= 100) {
      jugando = false; // aca desactivamos todos lo botones en caso de ganar (llegar a cien)
      document
        .querySelector(`.jugador--${jugadorActivo}`)
        .classList.add('jugador--ganador');
      document
        .querySelector(`.jugador--${jugadorActivo}`)
        .classList.remove('jugador--activo');
    } else {
      cambiarJugador();
    }
  }
});

/*
btnNuevo.addEventListener('click', function(){
    document.querySelector(`.jugador--${jugadorActivo}`).classList.remove('jugador--ganador')
    jugando = true
    scoreActual0El.textContent = 0
    scoreActual1El.textContent = 0
    score0El.textContent = 0
    score1El.textContent = 0
    forzarjugador1()
    

})*/
/*
btnNuevo.addEventListener('click', function(){
    score0El.textContent = 0
    score1El.textContent = 0
    scoreActual0El.textContent = 0
    scoreActual1El.textContent = 0
    jugador0El.classList.remove('jugador--ganador')
    jugador1El.classList.remove('jugador--ganador') // le podemos pdir a JS que elimine una clase por mas que no este presente ahi
    jugador0El.classList.add('jugador--activo')
    jugador1El.classList.remove('jugador--activo')
})
*/

btnNuevo.addEventListener('click', inicializar);
