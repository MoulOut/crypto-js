const secretMessage = 'my secret message';

console.log(secretMessage);

function cifraMessage(message, positions) {
  const cifraMessage = message.split('').map((caracter) => {
    const codeCaracter = caracter.charCodeAt();
    return String.fromCharCode(codeCaracter + positions);
  });
  return cifraMessage.join('');
}

const cypher = cifraMessage(secretMessage, 3);
console.log(cypher);

function decifraMessage(cifradaMessage, positions) {
  const decifreMessage = cifradaMessage.split('').map((caracter) => {
    const codeCaracter = caracter.charCodeAt();
    return String.fromCharCode(codeCaracter - positions);
  });

  return decifreMessage.join('');
}

console.log(decifraMessage(cypher, 3));
