function contaNegativos(nums) {
  let count = 0
  nums.map(x => {if (x < 0) {count++}})
  console.log(`Existem ${count} números negativos`)
}

contaNegativos([1,-4, 2,-5,-6, 7, 53, 6, 8, -3, 8])