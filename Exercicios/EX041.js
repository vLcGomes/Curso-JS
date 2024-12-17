function invertVetores(vetor1, vetor2) {
  for (let x = 0; x < vetor1.length; x++) {
    [vetor1[x], vetor2[x]] = [vetor2[x], vetor1[x]]
  }
  return console.log(vetor1, vetor2)
}

invertVetores([1, 3, 2], [4, 5, 6])
invertVetores([6, 2, 3], [7, 8, 9])
invertVetores([3, 6, 5], [5, 6, 1])
invertVetores([7, 8, 9], [4, 5, 3])