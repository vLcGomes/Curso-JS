function defineMaiorEMenor(nums) {
  let maior = nums[0]
  let menor = nums[0]
  for (x = 1; x < nums.length; x++) {
    if (nums[x] > maior) { maior = nums[x]}
    if (nums[x] < menor) { menor = nums[x]}
  }
  return console.log(`O maior valor é ${maior} e o menor valor é ${menor}`)
}

defineMaiorEMenor([1, 4, 5, 2, 7, 8, -1, 5, 12, -15, 47])