function mediaAluno(id, nota1, nota2, nota3) {
  const notas = [nota1, nota2, nota3]
  notas.sort()
  let media = (notas[0] * 3 + notas[1] * 3 + notas[2] * 4) / 10
  if (media >= 5) {
    return console.log(`Aluno ${id} foi Aprocado. Nota: ${media}`)
  } else {
    return console.log(`Aluno ${id} foi Reprovado. Nota: ${media}`)
  }
}

mediaAluno(1, 5, 7, 8)
mediaAluno(2, 6, 9, 9)
mediaAluno(3, 7, 7, 7)
mediaAluno(4, 4, 5, 2)
mediaAluno(5, 5, 5, 5)