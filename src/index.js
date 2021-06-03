import cipher from './cipher.js';
//console.log(cipher);

document.getElementById("welcome").innerText = "BIENVENIDX"
document.getElementById("textoAqui").innerText = "Por favor, introduce el texto que deseas Cifrar/Descifrar"
document.getElementById("question").innerText = "¿Qué deseas hacer?"
document.getElementById("key").innerText = "Por favor, indica la llave"
document.getElementById("textoResultado").innerText = "Resultado:"

function cifrar() {
  let c = document.getElementById("codigo");
  document.getElementById("resultado").innerHTML = c.value;
  c.value= "";
  c.innerHTML = cipher.aCifrar
}
document.getElementById("btnCifrar").addEventListener("click",cifrar)

function descifrar() {
  let d = document.getElementById("codigo");
  document.getElementById("resultado").innerHTML = d.value;
  d.value= "";
  d.innerHTML = "";
}
document.getElementById("btnDescifrar").addEventListener("click",descifrar)


//let c es codigo a cifrar
//let c es codigo d descifrar