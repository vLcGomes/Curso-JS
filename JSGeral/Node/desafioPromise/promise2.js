const fs = require('fs')
const path = require('path')
const caminho = path.join(__dirname, 'dados.json')

function lerArquivo(caminho) {
  return new Promise(resolve => {
    fs.readFile(caminho, (_, conteudo) => {
      resolve(JSON.parse(conteudo))
    })
  })
}

lerArquivo(caminho)
.then(console.log)