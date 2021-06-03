const cipher = {
  encode(){
    let textoCifrar = document.getElementById("codigo").value;
    let key = document.getElementById("llave").value;
    let code = (textoCifrar.chartCodeAt()- 65 + key)% 26 + 65;
    let aCifrar = String.fromCharCode(code);
    let encode = aCifrar;
    document.getElementById("cifrado").innerHTML= aCifrar;

    document.getElementById("btnCifrar").addEventListener("click",encode)
  },

};


export default cipher;
