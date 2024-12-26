function qualOMes(x) {
  if (x <= 12 || x >= 1) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return console.log(`${meses[x-1]}`)
  }
  return console.log('Mês Inválido')
}

qualOMes(1)
qualOMes(2)
qualOMes(3)
qualOMes(4)
qualOMes(5)
qualOMes(12)
