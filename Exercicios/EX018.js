function compraCarroHatch(model) {
  switch (model.toLowerCase()) {
    case 'hatch':
      return console.log('Compra efetuada com sucesso')
    case 'sedan':
    case 'motocicleta':
    case 'caminhonete':
      return 'Tem certeza que não prefere este modelo?'
    default:
      return 'Não trabalhamos com este tipo de automóvel aqui.'
  }
}

console.log(escolherCarro('hatch'));
console.log(escolherCarro('motocicleta'));
console.log(escolherCarro('sedan'));
console.log(escolherCarro('caminhonete'));
console.log(escolherCarro('jetski'));