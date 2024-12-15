

function contaParesEImpares(nums) {
  let contador = 0
  nums.map((x) => {if (x % 2 == 0) contador++})
  return console.log(`O Array possui ${contador} números Pares e ${nums.length - contador} números Ímpares`)
}

let nums = [1,2,5,7,3,2,9,5,1,2,39,9,9,5,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


contaParesEImpares(nums)