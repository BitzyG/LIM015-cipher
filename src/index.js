import cipher from './cipher.js';

console.log(cipher);

document.getElementById("welcome").innerText = "BIENVENIDX"
document.getElementById("textoAqui").innerText = "Por favor, introduce el texto que deseas Cifrar/Descifrar"
document.getElementById("question").innerText = "¿Qué deseas hacer?"
document.getElementById("key").innerText = "Por favor, indica la llave"

function cifrar(){
  let textoCifrar = document.getElementById("text1").value;
  let code = textoCifrar.chartCodeAt();
  let key = document.getElementById("key").value;
  let aCifrar = (code - 65 + key)%26+65;

  document.getElementById("text2").innerHTML = aCifrar;
}

document.getElementById("btnCifrar").addEventListener("click",cifrar)

