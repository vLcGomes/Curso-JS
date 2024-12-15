function crescimentoAnualDasCriancas(alturaCrianca1, taxaDeCrescimentoAnual1,alturaCrianca2, taxaDeCrescimentoAnual2) {
  let menorCrianca = qualAMenorCrianca(alturaCrianca1, alturaCrianca2)
  if (!!menorCrianca == true) {
    let anosParaUltrapassar = quantosAnosVaiDemorar(menorCrianca, alturaCrianca1, taxaDeCrescimentoAnual1, alturaCrianca2, taxaDeCrescimentoAnual2)
    if (anosParaUltrapassar == 0) {
      return console.log('A menor criança nunca ultrapassará a maior')
    }
    return console.log(`A menor criança com ${menorCrianca}cm, ultrapassará a maior em ${anosParaUltrapassar} ano(s)`)
  } else {
    return console.log('As duas crianças tem a mesma altura')
  }
}

function qualAMenorCrianca(alturaCrianca1, alturaCrianca2) {
  if (alturaCrianca1 < alturaCrianca2) {
    return alturaCrianca1
  } else if (alturaCrianca2 < alturaCrianca1) {
    return alturaCrianca2
  } else {
    return false
  }
}

function quantosAnosVaiDemorar(menorCrianca, alturaCrianca1, taxaDeCrescimentoAnual1, alturaCrianca2, taxaDeCrescimentoAnual2) {
  let contador = 0
  if (menorCrianca == alturaCrianca1 && taxaDeCrescimentoAnual1 > taxaDeCrescimentoAnual2) {
    while (alturaCrianca1 > alturaCrianca2) {
      alturaCrianca1 += taxaDeCrescimentoAnual1
      alturaCrianca2 += taxaDeCrescimentoAnual2
      contador++
    }
  }
  if (menorCrianca == alturaCrianca2 && taxaDeCrescimentoAnual2 > taxaDeCrescimentoAnual1) {
    while (alturaCrianca2 < alturaCrianca1) {
      alturaCrianca1 += taxaDeCrescimentoAnual1
      alturaCrianca2 += taxaDeCrescimentoAnual2
      contador++
    }
  }
  return contador

}

crescimentoAnualDasCriancas(180, 10, 179, 13)
crescimentoAnualDasCriancas(180, 10, 180, 13)
crescimentoAnualDasCriancas(170, 10, 179, 10)
crescimentoAnualDasCriancas(180, 5, 169,  3)
crescimentoAnualDasCriancas(120, 10, 175, 12)
crescimentoAnualDasCriancas(210, 2, 130, 9)