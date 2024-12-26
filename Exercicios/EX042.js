function conceito(notas) {
  for (let nota in notas) {
    if (nota >= 0 && nota <= 4.9) {console.log('D')}
    if (nota >= 5 && nota <= 6.9) {console.log('C')}
    if (nota >= 7 && nota <= 8.9) {console.log('B')}
    if (nota >= 9 && nota <= 10.0) {console.log('A')}
    if (nota > 10 || nota < 0) {return console.log('Nota Inválida!')}
  }
}


conceito([1, 1.5, 4, 4.5, 6, 3.7, 9.9, 13, 6.5, 7.5, 9.1, 8.1, 10])