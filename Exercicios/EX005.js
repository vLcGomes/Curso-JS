function qualTriangulo(x, y, z) {
  if (x == y && x == z){
    return console.log('Este é um Triângulo Equilátero')
  } else if (x == y || x == z){
    return console.log('Este é um Triângulo Isósceles')
  } else {
    return console.log('Este é um Triângulo Escaleno')
  }
}

qualTriangulo(1, 1, 1)
qualTriangulo(2, 1, 3)
qualTriangulo(3, 5, 4)
qualTriangulo(5, 5, 4)
qualTriangulo(0, 0, 0)