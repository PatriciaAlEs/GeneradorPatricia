/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function obtenerExcusaAleatoria(longitudArray) {
  return Math.floor(Math.random() * longitudArray);
}

function generandoExcusas() {
  const GENERAQUIEN = ["El perro ", "Mi abuela ", "El cartero ", "Mi gato "];
  const GENERAACCION = ["comió ", "arañó ", "perdió ", "rompió "];
  const GENERAQUE = ["mi trabajo ", "mi telefono ", "mi coche "];
  const GENERACUANDO = [
    "después de clase",
    "cuando estoy durmiendo",
    "mientras estoy durmiendo",
    "durante mi comida",
    "mientras estoy jugando"
  ];

  const INDICEQUIEN = obtenerExcusaAleatoria(GENERAQUIEN.length);
  const INDICEACCION = obtenerExcusaAleatoria(GENERAACCION.length);
  const INDICEQUE = obtenerExcusaAleatoria(GENERAQUE.length);
  const INDICECUANDO = obtenerExcusaAleatoria(GENERACUANDO.length);

  return (
    GENERAQUIEN[INDICEQUIEN] +
    GENERAACCION[INDICEACCION] +
    GENERAQUE[INDICEQUE] +
    GENERACUANDO[INDICECUANDO]
  );
}

window.onload = function() {
  document
    .getElementById("botonGeneradorExcusas")
    .addEventListener("click", function() {
      document.getElementById("excuse").innerHTML = generandoExcusas();
    });
};
