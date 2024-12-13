function frutas(fruta) {
  switch (fruta.toLowerCase()) {
    case 'maçã':
      return console.log('Não vendemos esta fruta aqui')
    case 'kiwi':
      return console.log('Estamos comm escassez de kiwis')
    case 'melancia':
      return console.log('Aqui está, são 3 reais o quilo')
    default:
      return console.log(Error)
  }
}



frutas('maçã')
frutas('melancia')
frutas('kiwi')
frutas('abacate')
