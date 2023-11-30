// Callback
// setTimeout(() => { 
//    console.log('Running...');
   
//    setTimeout(() => {
//       console.log('Running...');
//    }, 2000)

//       setTimeout(() => {
//          console.log('Running...');
//       }, 2000)
// }, 2000)


// Promise
const waitFor = (time = 2000) => {
   return new Promise((resolve) => {
      setTimeout(() => {
         console.log('Running...');
         resolve();
      }, time)
   })
}

waitFor(3000)
   .then(waitFor)
   .then(waitFor)