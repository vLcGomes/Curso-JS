function valorAssociacao(month, value) {
  if (month >= 1 && month <= 12) {
    value = calculaJuros(month, value)
    return console.log(`O valor à ser pago é R$ ${value}`)
  } else {
    return console.log('Este não é um mês válido')
  }
}

function calculaJuros(month, value) {
  for (; month > 1; month--)
    value += (value * 0.05)
  return value.toFixed(2)
}

valorAssociacao(4, 100)
valorAssociacao(3, 150)
valorAssociacao(1, 150)
valorAssociacao(1, 250)
valorAssociacao(5, 150)
// valorAssociacao(12, 150)
// valorAssociacao(2, 150)
// valorAssociacao(3, 150)
// valorAssociacao(4, 150)
// valorAssociacao(10, 150)