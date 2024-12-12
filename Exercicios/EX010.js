function bhaskara(a, b, c) {
  let delta = Math.pow(b, 2) -4*a*c
  if (delta < 0) {
    return console.log('Delta é negativo!')
  }
  let xPositivo = (-b + Math.sqrt(delta)) / (2 * a)
  let xNegativo = (-b - Math.sqrt(delta)) / (2 * a)
  return console.log(`xPositivo: ${xPositivo.toFixed(1)}, xNegativo: ${xNegativo.toFixed(1)}`)
}

bhaskara(1, 12, -13)
bhaskara(3, -5, 12)
bhaskara(6, 5, 16)
bhaskara(7, 2, -15)
bhaskara(5, 24, -18)
bhaskara(2, 15, 3)