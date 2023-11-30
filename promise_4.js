const generateNumbersBetween = (min, max, time) => {
   if(min > max) [max, min] = [min, max];

   return new Promise(resolve => {
      setTimeout(() => {
         const factor = max - min + 1;
         const random = parseInt(Math.random() * factor) + min;
         
         resolve(random);
      }, time)
   })
}


const generateNumbers = () => {
   return Promise.all([
      generateNumbersBetween(1, 70, 1000),
      generateNumbersBetween(1, 700, 1500),
      generateNumbersBetween(1, 100, 500),
      generateNumbersBetween(1, 50, 2000),
      generateNumbersBetween(1, 2150, 1000)
   ])
}

console.time('promise');

generateNumbers()
   .then(console.log)
   .then(() => {
      console.timeLog('promise');
      console.timeEnd('promise');
   })