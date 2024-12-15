function calculaMediaGeral(nums) {
  let soma = 0
  nums.map(x => soma += x)
  console.log(`A media dos valores no Array é ${soma / nums.length}`)
}

calculaMediaGeral([1, 4, 6, 5, 3, 2, 8, 7, 9])