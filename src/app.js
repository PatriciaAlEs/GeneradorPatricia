/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function random1(longitudArray) {
  let randomQuien = Math.floor(Math.random() * longitudArray);
  return randomQuien;
}

function generandoExcusas() {
  const generaQuien = ["El perro ", "Mi abuela ", "El cartero ", "Mi Gato "];
  const generaAccion = ["comió ", "arañó ", "perdió ", "rompió "];
  const generaQue = ["mi trabajo ", "mi telefono ", "mi coche "];
  const generaCuando = [
    "despues de clase",
    "cuando estoy durmiendo",
    "mientras estoy durmiendo",
    "durante mi comida",
    "mientras estoy jugando"
  ];

  const indiceQuien = random1(generaQuien.length);
  const indiceAccion = random1(generaAccion.length);
  const indiceQue = random1(generaQue.length);
  const indiceCuando = random1(generaCuando.length);

  return (
    generaQuien[indiceQuien] +
    generaAccion[indiceAccion] +
    generaQue[indiceQue] +
    generaCuando[indiceCuando]
  );
}

window.onload = function() {
  document.getElementById("excuse").innerHTML = generandoExcusas();
  console.log(generandoExcusas());
};
