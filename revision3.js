// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3};
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Improvementes to literal notation
const name = 'Pablo';
const age = 19;
const person = {
   name,
   age,
   hello() {
      return 'Hello World!'
   }
}

console.log(person.name, person.age, person.hello());

// Class 
class Hello {}
class Person extends Hello {
   message() {
      return 'Hello, i am Pablo!';
   }
}

console.log(new Person().message());