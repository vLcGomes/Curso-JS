function soma(nums) {
  let soma = 0
  for(let i = 0; i < nums.length; i++) {
    soma += nums[i]
  }
  return soma
}

console.log(soma([1,2,3,4,5]))
console.log(soma([2,2,2,2,2]))
console.log(soma([1,1,1,1,1]))