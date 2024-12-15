function interval1020(nums) {
  let insideInterval = 0
  for (let x = 0; x < nums.length; x++) {
    if (nums[x] >= 10 && nums[x] <= 20) {
      insideInterval++
    }
  }
  return console.log(`No Array existem ${insideInterval} números dentro do intervalo [10, 20] e ${nums.length - insideInterval} números fora deste intervalo`)
}

interval1020([12,14,4,5,34,21,20,11,15,14])