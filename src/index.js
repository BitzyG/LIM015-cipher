import cipher from './cipher.js';

console.log(cipher);

document.getElementById("welcome").innerText = "BIENVENIDX"
document.getElementById("textoAqui").innerText = "Por favor, introduce el texto que deseas Cifrar/Descifrar"
document.getElementById("question").innerText = "¿Qué deseas hacer?"
document.getElementById("key").innerText = "Por favor, indica la llave"

let textoCifrar = document.getElementById("texto1").value;
let key = document.getElementById("key").value;
let aCifrar = (textoCifrar.chartCodeAt()- 65 + key)%26+65;
let textoCifrado = String.fromCharCode(aCifrar);
let option1 = "btnCifrar";

if (option1){
  const option1 = document.getElementById("btnCifrar");
  option1.addEventListener('click', () => {
    document.getElementById("aCifrar").innerText = textoCifrado
  });
  }

