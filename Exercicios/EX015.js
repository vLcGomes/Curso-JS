function fatorial(num) {
  let Fat = 1
  for (; num > 0;) {
    Fat *= num
    num -= 1
  }
  return Fat
}


console.log(fatorial(6))
console.log(fatorial(10))
console.log(fatorial(5))
console.log(fatorial(3))
console.log(fatorial(8))
console.log(fatorial(2))