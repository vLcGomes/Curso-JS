function diaUtil(day) {
  switch (day) {
    case 1:
    case 7:
      return console.log('Este dia é no fim de semana portanto não é um dia Útil!')
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return console.log('Este é um dia Útil!')
    default:
      return console.log('Dia inválido')
  }
}


diaUtil(1)
diaUtil(2)
diaUtil(3)
diaUtil(4)
diaUtil(5)
diaUtil(6)
diaUtil(7)
