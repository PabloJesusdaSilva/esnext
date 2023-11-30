// let and const
{
   var a = 1;
   let b = 2;

   console.log(b);
}

console.log(a);

// Template String
const product = 'IPad';
console.log(`Is the ${product} expensive!`)

// Destructuring
const [l, e, ...tras] = 'Cod3r';
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { nome, idade } = { nome: 'Pablo', idade: 19 };
console.log(nome, idade);