
for(let letra of 'Cod3r') {
   console.log(letra);
}

const ecma = ['Map', 'Set', 'Promise'];

for(let i in ecma) {
   console.log(i);
} 

for(let assunto of ecma) {
   console.log(assunto);
}

const assuntosMap = new Map([
   ['Map', { abordado: true }],
   ['Set', { abordado: true }],
   ['Promise', { abordado: false }]
])

for(let assunto of assuntosMap) {
   console.log(assunto);
}

for(let chaves of assuntosMap.keys()) {
   console.log(chaves);
}

for(let valores of assuntosMap.values()) {
   console.log(valores);
}

for(let [ch, vl] of assuntosMap.entries()) {
   console.log(ch, vl);
} 

const letras = new Set(['a', 'b', 'c']);

for(let letra of letras) {
   console.log(letra);
}