const tecnologias =  new Map();
tecnologias.set('React', { framework: false });
tecnologias.set('Angular', { framework: true });

console.log(tecnologias.get('React'));
console.log(tecnologias.get('Angular').framework);

const chavesVariadas = new Map([
   [function () { }, 'Função'],
   [{}, 'Objeto'],
   [123, 'Numeros'],
])

chavesVariadas.forEach((chave, valor) => {
   console.log(chave, valor);
})

chavesVariadas.delete(123)
console.log(chavesVariadas.has(123));

console.log(chavesVariadas)

