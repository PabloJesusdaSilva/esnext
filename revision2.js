// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(5, 5));

// Arrow Function 
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});

lexico1();
lexico2();

// Param Default
function log(text = 'Node') {
   console.log(text);
}

log();
log('Text');

// Rest Operator
function total(...numbers) {
   let total = 0;
   numbers.forEach(n => total += n);

   return total;
}

console.log(total(1, 2, 3, 4, 5));