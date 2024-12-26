function retornaSegundoMaior(numeros) {
  let maiorValor = numeros[0]
  for(let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorValor) {
      maiorValor = numeros[i]
    }
  }
  let segundoMaior = 0
  for(let j = 0; j < numeros.length; j++) {
    if (numeros[j] < maiorValor && numeros[j] > segundoMaior) {
      segundoMaior = numeros[j]
    }
  }
  return console.log(segundoMaior)
}


retornaSegundoMaior([12, 15, 1, 5])
retornaSegundoMaior([8, 4, 5, 6])
retornaSegundoMaior([11, 13, 2, 7])
