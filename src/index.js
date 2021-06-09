import cipher from './cipher.js';

console.log(cipher);

//textos en HTML
document.getElementById("welcome").innerText = "BIENVENIDX"
document.getElementById("textoAqui").innerText = "Por favor, introduce el texto que deseas Cifrar/Descifrar"
document.getElementById("question").innerText = "¿Qué deseas hacer?"
document.getElementById("key").innerText = "Por favor, indica la llave"
document.getElementById("textoResultado").innerText = "Resultado:"
document.getElementById("piePagina").innerText = "Version 0.0.0.1"


//enviar texto de la caja de codigo a la de resultado de acuerdo al boton
function cifrar() {
  let clave = parseInt(document.getElementById("clave").value);
  let codigo = document.getElementById("codigo").value;
  let c = cipher.encode(clave, codigo);
  document.getElementById("resultado").value = c;
      }
document.getElementById("btnCifrar").addEventListener("click",cifrar)

function descifrar() {
  let clave = document.getElementById("clave").value;
  let codigo = document.getElementById("codigo").value;
  let d = cipher.decode(clave, codigo);
  document.getElementById("resultado").value = d;
  }
 document.getElementById("btnDescifrar").addEventListener("click",descifrar)


