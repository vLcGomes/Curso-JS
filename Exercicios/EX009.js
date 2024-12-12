function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
  let montanteTotal = capitalInicial
  montanteTotal += capitalInicial * (taxaDeJuros * tempoDeAplicacao)
  return `R$ ${montanteTotal.toFixed(2)}`
}

function jurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
  let montanteTotal = capitalInicial
  for (; tempoDeAplicacao > 0; tempoDeAplicacao--) {
    montanteTotal += montanteTotal * taxaDeJuros
  }
  return `R$ ${montanteTotal.toFixed(2)}`
}



console.log(jurosSimples(1000, 0.10, 3))
console.log(jurosSimples(1000, 0.20, 5))
console.log(jurosSimples(1000, 0.50, 3))
console.log(jurosSimples(1000, 0.50, 10))
console.log(jurosCompostos(1000, 0.10, 3))
console.log(jurosCompostos(1000, 0.20, 5))
console.log(jurosCompostos(1000, 0.50, 3))
console.log(jurosCompostos(1000, 0.50, 10))