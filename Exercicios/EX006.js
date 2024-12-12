function elevaX(x, y) {
  // return Math.pow(x, y)
  let res = 1
  for (; y > 0; y--) {
    res *= x
  }
  return console.log(res)
}

elevaX(2, 3)
elevaX(2, 4)
elevaX(4, 5)