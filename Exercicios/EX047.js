function removerPropriedade(objInicial, itemParaRemover) {
  const objFinal = {...objInicial}
  delete objFinal[itemParaRemover]
  Object.is({
    id: 20,
    nome: 'caneta',
    descricao: 'não preenchido'
  }, 'descricao', objFinal)
  return console.log(objFinal)
  
}


removerPropriedade({
  id: 20,
  nome: 'caneta',
  descricao: 'não preenchido'
}, 'descricao')


