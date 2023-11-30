
const primeiroElemento = array => array[0];

const primeiraLetra = string => string[0];

const letraMinuscula = letra => letra.toLowerCase();

new Promise(function(resolve  ) {
   resolve  (['Pablo', 'Karen', 'Vinicius', 'Nicoliu']);
})
   .then(primeiroElemento)
   .then(primeiraLetra)
   .then(letraMinuscula)
   .then(console.log)