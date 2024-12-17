function interval(start = 0, end = 100) {
  let oddNumsInInterval = []
  if (start > end) {
    [start, end] = [end, start]
  }
  for (let x = start; x < end; x++) {
    if (x % 2 != 0) {
      oddNumsInInterval.push(x)
    }
  }
  return console.log(oddNumsInInterval)
}

interval(100, 5)
interval(10, 5)
interval(15, 3)
interval(10, 50)
interval(3, 55)
interval(1, 5)
interval()