import cipher from './cipher.js';
console.log(cipher);

//textos en HTML
document.getElementById("welcome").innerText = "BIENVENIDX"
document.getElementById("textoAqui").innerText = "Por favor, introduce el texto que deseas Cifrar/Descifrar"
document.getElementById("question").innerText = "¿Qué deseas hacer?"
document.getElementById("key").innerText = "Por favor, indica la llave"
document.getElementById("textoResultado").innerText = "Resultado:"

//llamar funciones de de archivo cipher
const textoCifrado = cipher.cifradoFinal;
const textoDescifrado = cipher.descifradoTotal;

//enviar texto de la caja de codigo a la de resultado de acuerdo al boton
function cifrar() {
  let c = textoCifrado;
  document.getElementById("resultado").innerHTML = c;
 }
document.getElementById("btnCifrar").addEventListener("click",cifrar)

function descifrar() {
  let d = textoDescifrado;
  document.getElementById("resultado").innerHTML = d;
 }
 document.getElementById("btnDescifrar").addEventListener("click",descifrar)
