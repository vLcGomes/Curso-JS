function progressaoAritmetica(num, n1, razao) {
  let nums = [n1]
  for (let x = 1;nums.length < num; x++) {
    nums.push(n1+razao)
    n1 = nums[x]
  }
  let sum = nums.reduce((partialSum, a) => partialSum + a, 0)
  return console.log(sum, nums)
}


function progressaoGeometrica(num, n1, razao) {
  let nums = [n1, razao]
  for (let x = 1; nums.length < num; x++) {
    nums.push(nums[x] * razao)
  }
  let sum = nums.reduce((partialSum, a) => partialSum + a, 0)
  return console.log(sum,nums)
}


progressaoAritmetica(15,1,1)
progressaoAritmetica(15,1,2)
progressaoAritmetica(15,1,3)
progressaoAritmetica(15,1,5)
progressaoAritmetica(5,3,3)
progressaoAritmetica(10,10,10)
progressaoAritmetica(5,5,10)
progressaoAritmetica(15,3,3)
progressaoAritmetica(15,0,5)


progressaoGeometrica(15,1,1)
progressaoGeometrica(15,1,2)
progressaoGeometrica(15,1,3)
progressaoGeometrica(15,1,5)
progressaoGeometrica(5,3,3)
progressaoGeometrica(10,10,10)
progressaoGeometrica(5,5,10)
progressaoGeometrica(15,3,3)
progressaoGeometrica(15,0,5)