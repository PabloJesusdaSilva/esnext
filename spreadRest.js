// Spread with Objectj
const employee = { nome: 'Karen', salario: 19283.29 };
const clone = { ativo: true, ...employee };

console.log(clone);

// Spread with Arrays
const groupA = ['Pablo', 'Karen', 'Nicoli', 'Vinicius'];
const groupB = [ ...groupA, 'Gabriel', 'Julia'];

console.log(groupB);