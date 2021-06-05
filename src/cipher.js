const cipher = {
    //para crear el cifrado del codigo del usuario, arronjando error si se ingresa un valor invalido
    encode : (llave, codigo) => {
      if (llave === null || llave === 0) {
        throw new TypeError();
      }
    //defino el nombre de la variable, utilizando un FOR para crear un loop
    //con charCodeAt, obtengo el valor ascii de las letras en el mensaje
      let cifradoTotal = '';
      for ( let i = 0 ; i < codigo.length ; i += 1) {
        const numeroAscii = codigo.charCodeAt(i);

    //numeros ASCII 48-57=numeros del 0-9
    //numeros ASCII 65-90=letras A-Z (sin Ñ)
    //numeros ASCII 97-122=letras a-z (sin ñ)
        if( numeroAscii >= 65 && numeroAscii <= 90 ) {
          cifradoTotal += String.fromCharCode((numeroAscii - 65 + llave) % 26 + 65);
        } else if ( numeroAscii >= 97 && numeroAscii <= 122 ) {
          cifradoTotal += String.fromCharCode((numeroAscii - 97 + llave) % 26 + 97);
        } else if ( numeroAscii >= 48 && numeroAscii <= 57 ) {
          cifradoTotal += String.fromCharCode((numeroAscii - 48 + llave) % 10 + 48);
        } else {
          cifradoTotal += codigo[i];
        }
      }
      return cifradoTotal;
  },

    decode : (llave, codigo) => {
      if (llave === null || llave === 0) {
        throw new TypeError();
      }

      let descifradoTotal = '';
      for ( let i = 0 ; i < codigo.length ; i += 1) {
        const numeroAscii = codigo.charCodeAt(i);

        if( numeroAscii >= 65 && numeroAscii <= 90 ) {
          descifradoTotal += String.fromCharCode((numeroAscii - 90 - llave) % 26 + 90);
        } else if ( numeroAscii >= 97 && numeroAscii <= 122 ) {
          descifradoTotal += String.fromCharCode((numeroAscii - 122 - llave) % 26 + 122);
        } else if ( numeroAscii >= 48 && numeroAscii <= 57 ) {
          descifradoTotal += String.fromCharCode((numeroAscii - 57 - llave) % 10 + 57);
        } else {
          descifradoTotal += codigo[i];
        }
      }
      return descifradoTotal;
    }
  };

  export default cipher;