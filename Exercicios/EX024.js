function valorPlanoSaude(age) {
  let valorInicial = 100
  let valorAdicional
  if (age < 10) {
    valorAdicional = 80
  } else if (age >= 10 && age <= 30){
    valorAdicional = 60
  } else if (age > 30 && age <= 60){
    valorAdicional = 95
  } else if (age > 60){
    valorAdicional = 130
  }
  return valorInicial + valorAdicional
}

console.log(valorPlanoSaude(65))
console.log(valorPlanoSaude(15))
console.log(valorPlanoSaude(35))
console.log(valorPlanoSaude(27))
console.log(valorPlanoSaude(78))
