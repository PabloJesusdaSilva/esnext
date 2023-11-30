// não aceita repetição/não indexada
const times = new Set();
times.add('Vasco');
times.add('São Paulo').add('Palmeiras').add('Corinthias');
times.add('Flamengo');
times.add('Vasco');

console.log(times);
console.log(times.size);
console.log(times.has('vasco'));
times.delete('Flamengo');

const nomes = ['Pablo', 'Karen', 'Teste'];
const nomesSet = new Set(nomes);

console.log(nomesSet);