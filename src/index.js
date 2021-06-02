import cipher from './cipher.js';

console.log(cipher);

document.getElementById("welcome").innerText = "BIENVENIDX"
document.getElementById("textoAqui").innerText = "Por favor, introduce el texto que deseas Cifrar/Descifrar"
document.getElementById("question").innerText = "¿Qué deseas hacer?"
document.getElementById("key").innerText = "Por favor, indica la llave"

function cifrar () {
  let textoIngresado = document.getElementById("Text1").value;
  let llave = document.getElementById("llave").value;

  const btnCifrar = document.getElementById("btnCifrar");
    btnCifrar.addEventListener('click', () => {
    let textoCifrar = document.getElementById("text2").innerHTML = textoIngresado;
    });

  const btnDescifrar = document.getElementById("btnDescifrar");
    btnDescifrar.addEventListener('click', () => {
   //FORMULA PARA DESCIDRAR TEXTO Y MOSTRAR EN CAJA RESULTADO;
   });
}