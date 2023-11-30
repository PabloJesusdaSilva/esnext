const generateNumbersBetween = (min, max, numerosProibidos) => {
   if(min > max) [max, min] = [min, max];

   return new Promise((resolve, reject) => {
      const factor = max - min + 1;
      const random = parseInt(Math.random() * factor) + min;

      if(numerosProibidos.includes(random)) {
         reject('Número repetido!');
      } else {
         resolve(random);
      }
   })
}

const generateMegaSena = async (qtdeNumbers) => {
   try {
      const numbers = [];

      for(let _ of Array(qtdeNumbers).fill()) {
         numbers.push(await generateNumbersBetween(1, 60, numbers));
      }

      return numbers;
   } catch (e) {
      throw 'Error!';
   }
}

generateMegaSena(20)
   .then(console.log)
   .catch(console.log)