import cipher from './cipher.js';

console.log(cipher);

document.getElementById("welcome").innerText = "BIENVENIDX"
document.getElementById("textoAqui").innerText = "Por favor, introduce el texto que deseas Cifrar/Descifrar"
document.getElementById("question").innerText = "¿Qué deseas hacer?"
document.getElementById("key").innerText = "Por favor, indica la llave"
document.getElementById("textoResultado").innerText = "Resultado:"

function cifrar() {
  let x = document.getElementById("codigo");
  document.getElementById("resultado").innerHTML = x.value;
  x.value= "";
  x.innerHTML = "";
}
document.getElementById("btnCifrar").addEventListener("click",cifrar)

function descifrar() {
  let x = document.getElementById("codigo");
  document.getElementById("resultado").innerHTML = x.value;
  x.value= "";
  x.innerHTML = "";
}
document.getElementById("btnDescifrar").addEventListener("click",descifrar)

