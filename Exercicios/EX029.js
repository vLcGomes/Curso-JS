function stringsIguais(str1, str2) {
  str1 = str1.toLowerCase().split('')
  str2 = str2.toLowerCase().split('')
  if (str1.length > str2.length) {
    for (let x = 0; x < str2.length; x++) {

      if (str1.indexOf(str2[x]) != -1) {
        continue
      } else {
        return false
      }
    }
    return true
  } 
  else if (str2.length > str1.length) {
    for (let x = 0; x < str1.length; x++) {

      if (str2.indexOf(str1[x]) != -1) {
        continue
      } else {
        return false
      }
    }
    return true
  }
}

console.log(stringsIguais('tesTa', 'testando'))
console.log(stringsIguais('FaLa', 'faLlante'))
console.log(stringsIguais('Paz', 'pArado'))
console.log(stringsIguais('tesTando', 'tesTa'))
console.log(stringsIguais('FaLlante', 'faLla'))
console.log(stringsIguais('PArado', 'pAz'))