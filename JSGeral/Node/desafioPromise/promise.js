const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')



// const lerArquivo = new Promise(resolve => {
//   resolve(fs.readFile(caminho, ImprimeTexto))
// })


function lerArquivo(caminho) {
  return new Promise(resolve => fs.readFile(caminho, function(_, conteudo) {
    resolve(conteudo.toString())
  })
)}

lerArquivo(caminho).then(x =>console.log(x))