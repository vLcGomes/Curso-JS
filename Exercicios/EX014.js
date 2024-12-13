function anoBissexto(year) {
  if (year % 400) {
    if (year % 100 == 0 || year % 4 == 0) {
      console.log(`${year} é um Ano Bissexto`)
      return true
    } 
    else {
      console.log(`${year} não é um Ano Bissexto`)
      return false
    }
  } 
  else {
    console.log(`${year} não é um Ano Bissexto`)
    return false
  }
}


anoBissexto(1998)
anoBissexto(1997)
anoBissexto(2015)
anoBissexto(2012)
anoBissexto(2000)
anoBissexto(1985)
anoBissexto(1999)
anoBissexto(1900)
anoBissexto(1874)
anoBissexto(2024)