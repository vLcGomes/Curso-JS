function multiplicaPorX(nums, multiplicador) {
  if (multiplicador > 5) {
    multiplicaSeESomenteSe(nums, multiplicador)
  }
  for (let x = 0; x < nums.length; x++) {
    console.log(`${nums[x]} x ${multiplicador} = ${nums[x] * multiplicador}`)
  }
}

function multiplicaSeESomenteSe(nums, multiplicador) {
  for (let x = 0; x < nums.length; x++) {
    console.log(`${nums[x]} x ${multiplicador} = ${nums[x] * multiplicador}`)
  }
}


multiplicaPorX([1,4,2,5], 5)
multiplicaPorX([1,2,3,5], 3)
multiplicaPorX([8,4,2,6], 4)
multiplicaPorX([1,5,8,9], 6)
multiplicaPorX([8,6,2,3], 5)