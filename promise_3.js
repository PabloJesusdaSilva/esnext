const generateNumbersBetween = (min, max) => {
   if(min > max) [max, min] = [min, max];

   return new Promise(resolve => {
      const factor = max - min + 1;
      const random = parseInt(Math.random() * factor) + min;

      resolve(random);
   })
}

generateNumbersBetween(20, 50)
   .then(number => number * 10)
   .then(numberX => `O número gerado foi ${numberX}`)
   .then(console.log)