import cipher from './cipher.js';

console.log(cipher);

const checkBtnA = document.getElementById("checkBtnA");
  checkBtnA.addEventListener('click', () => {
    window.location="cifrar.html";
  });

const checkBtnB = document.getElementById("checkBtnB");
  checkBtnB.addEventListener('click', () => {
    window.location="descifrar.html";
  });

function cifrar() {
  let textoCifrar = document.getElementById("Text1").value;
  let clave = document.getElementById("key").value;
}

