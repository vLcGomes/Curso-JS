function encontraParesDe1a100() {
  for (let valor = 1; valor <= 100; valor++) {
    if (valor % 2 == 0) {
      console.log(`O valor ${valor} é par`)
    }
  }
}

encontraParesDe0a100()