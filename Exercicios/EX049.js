function despesasTotais(items) {
  let despesas = 0
  for(let i = 0; i < items.length; i++) {
    despesas += items[i].preco
  }
  return console.log(despesas)
}

despesasTotais([
  {nome: 'Galaxy S20', categoria: 'Eletronicos', preco: 3599.99},
  {nome: 'Macbook Pro', categoria: 'Eletronicos', preco: 30999.99}
])
despesasTotais([
  {nome: 'Jornal Online', categoria: 'Informação', preco: 89.99},
  {nome: 'Cinema', categoria: 'Entretenimento', preco: 150}
])