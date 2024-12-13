function sistemaDeNotas(nota) {
  if (nota >= 38) {
    if (nota % 5 >= 3) {
      nota = Math.ceil(nota / 5) * 5
    }
    console.log(`O Aluno foi Aprovado. Nota: ${nota}`)
  } else {
    console.log(`Aluno Reprovado. Nota: ${nota}`)
  }
}


sistemaDeNotas(81)
sistemaDeNotas(38)
sistemaDeNotas(37)
sistemaDeNotas(44)
sistemaDeNotas(41)
sistemaDeNotas(56)
sistemaDeNotas(63)
sistemaDeNotas(29)
sistemaDeNotas(31)
sistemaDeNotas(99)
sistemaDeNotas(19)