const fs = require('fs');
const path =  require('path');

const readingFile = (caminho) => {
   return new Promise(resolve => {
      fs.readFile(caminho, (_, content) => {
         resolve(content.toString());
      })
   })
}

const caminho = path.join(__dirname, 'dados.txt');

readingFile(caminho)
   .then(console.log)