function recorde(partidas) {
  let times = partidas.split(' ')
  times = times.map(item => +item)
  let newRecord = times[0]
  let recordBreak = 0
  let minimumPoints = times[0]
  
  for (partida in times) {
    if (times[partida] > newRecord) {
      newRecord = times[partida]
      recordBreak++
    }
    if (times[partida] < minimumPoints) {
      minimumPoints = times[partida]
    }
  }
  return [recordBreak, times.indexOf(minimumPoints) + 1]
}

console.log(recorde('10 20 20 8 25 3 0 30 1'))