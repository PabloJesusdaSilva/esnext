const waitFor = (time = 2000) => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve();
      }, time)
   })
}

const returnValue = () => {
   return new Promise(resolve => {
      setTimeout(() => resolve(10), 5000)
   })
}

const execute = async () => {
   let value = await returnValue();

   await waitFor(1500);
   console.log(`Running one ${value}...`);
   
   await waitFor(1500);
   console.log(`Running two ${value + 1}...`);
   
   await waitFor(1500);
   console.log(`Running three ${value + 2}...`);

   return value + 3;
}

execute().then(console.log);