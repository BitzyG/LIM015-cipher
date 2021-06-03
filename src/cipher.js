function cipher () {
    let textoCifrar = document.getElementById("codigo").value;
    let code = textoCifrar.chartCodeAt();
    let key = document.getElementById("key").value;
    let aCifrar = (code.chartCodeAt()- 65 + key)%26+65;
  document.getElementById("cipher").innerHTML= aCifrar
}

export default cipher;
