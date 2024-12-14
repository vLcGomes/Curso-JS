function comanda(codigo, quantidade) {
  switch (codigo) {
    case 100:
      return console.log(quantidade * 3.00)
    case 200:
      return console.log(quantidade * 4.00)
    case 300:
      return console.log(quantidade * 5.50)
    case 400:
      return console.log(quantidade * 7.50)
    case 500:
      return console.log(quantidade * 3.50)
    case 600:
      return console.log(quantidade * 2.80)
    default:
      return console.log('Produto não existente no cardápio')
  }
}

comanda(100, 3)
comanda(200, 3)
comanda(300, 3)
comanda(400, 3)
comanda(500, 3)
comanda(600, 3)
comanda(100, 7)
comanda(800, 3)
comanda(300, 6)
comanda(200, 1)
comanda(900, 2)
comanda(600, 10)
comanda(300, 2)