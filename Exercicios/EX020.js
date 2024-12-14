function aumento(plano, salario) {
  switch (plano.toUpperCase()) {
    case 'A':
      return console.log(salario * 1.1)
    case 'B':
      return console.log(salario * 1.15)
    case 'C':
      return console.log(salario * 1.2)
    default:
      return console.log('Plano inválido')
  }
}

aumento('Z', 1550.00)
aumento('b', 1850.00)
aumento('c', 1750.00)
aumento('C', 1350.00)
aumento('B', 2330.00)
aumento('A', 3570.00)
aumento('D', 12570.00)
aumento('C', 1570.00)