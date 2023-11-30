// Tagged Template - process the template inside a function
function tag(partes, ...valores) {
   console.log(partes);
   console.log(valores);

   return 'Other string';
}

const name = 'Pablo';
const situation = 'approved';
console.log(tag `${name} it is ${situation}.`)