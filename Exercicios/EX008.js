function converteParaDinheiro(x) {
  let rounded = x.toFixed(2)
  let res = rounded.replace('.', ',')
  console.log(`R$${res}`)
}

converteParaDinheiro(0.3000)
converteParaDinheiro(1.4600)
converteParaDinheiro(5.6470)
converteParaDinheiro(2.750)
