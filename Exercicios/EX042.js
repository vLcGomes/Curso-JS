function conceito(nota) {
  if (nota >= 0 && nota <= 4.9) {return console.log('D')}
  if (nota >= 5 && nota <= 6.9) {return console.log('C')}
  if (nota >= 7 && nota <= 8.9) {return console.log('B')}
  if (nota >= 9 && nota <= 10.0) {return console.log('A')}
  if (nota > 10 || nota < 0) {return console.log('Nota Inválida!')}
}


conceito(1)
conceito(1.5)
conceito(4)
conceito(4.5)
conceito(6)
conceito(3.7)
conceito(9.9)
conceito(13)
conceito(6.5)
conceito(7.5)
conceito(9.1)
conceito(8.1)
conceito(10)