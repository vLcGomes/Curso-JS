function Cedulas(totalValue) {
  let notas100 = 0
  let notas50 = 0
  let notas10 = 0
  let notas5 = 0
  let notas1 = 0
  let Nota = valorDasNotas(totalValue)

  while (totalValue >= Nota) {
    switch (Nota) {
      case 100:
        totalValue -= 100
        notas100++
        break
      case 50:
        totalValue -= 50
        notas50++
        break
      case 10:
        totalValue -= 10
        notas10++
        break
      case 5:
        totalValue -= 5
        notas5++
        break
      case 1:
        totalValue -= 1
        notas1++
        break
    }
    Nota = valorDasNotas(totalValue)
  }
  return quantasCedulas(notas100, notas50, notas10, notas5, notas1)
}

function valorDasNotas(totalValue) {
  if (totalValue >= 100) {
    return 100
  }
  if (totalValue >= 50) {
    return 50
  }
  if (totalValue >= 10) {
    return 10
  }
  if (totalValue >= 5) {
    return 5
  }
  if (totalValue >= 1) {
    return 1
  }
}

function quantasCedulas(notas100, notas50, notas10, notas5, notas1) {
  let cedulas = ''
  if (notas100 > 0) {
    cedulas += `${notas100} nota{s} de R$ 100. `
  }
  if (notas50 > 0) {
    cedulas += `${notas50} nota{s} de R$ 50. `
  }
  if (notas10 > 0) {
    cedulas += `${notas10} nota{s} de R$ 10. `
  }
  if (notas5 > 0) {
    cedulas += `${notas5} nota{s} de R$5. `
  }
  if (notas1 > 0) {
    cedulas += `${notas1} nota{s} de R$ 1. `
  }
  return cedulas
}

console.log(Cedulas(153))