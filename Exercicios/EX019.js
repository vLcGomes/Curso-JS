function calc(x, operator, y) {
  switch (operator) {
    case '+':
      return console.log(x + y)
    case '-':
      return console.log(x - y)
    case '*':
      return console.log(x * y)
    case '/':
      return console.log(x / y)
    default:
      return console.log('Operação inválida')
  }
}

calc(3,'*',5)
calc(6,'-',5)
calc(9,'+',0)
calc(1,'*',6)
calc(3,'*',7)
calc(-3,'*',4)
calc(2,'-',4)
calc(3,'+',5)
calc(3,'*',5)
calc(3,'+',3)
calc(2,'*',5)
calc(1,'/',0)
calc(9,'/',1)