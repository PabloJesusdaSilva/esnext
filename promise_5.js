const workOrNot = (value, chanceOfError) => {
   return new Promise((resolve, reject) => {
      try {
         if(Math.random() < chanceOfError) {
            reject('An error has ocurred!');
         } else {
            resolve(value);
         }
      } catch(error) {
         reject(error);
      }
   })
}

workOrNot('Testing...', 0.5)
   .then(value => console.log(`Value: ${value}`))
   .catch(error => console.log(`Error: ${error}`))