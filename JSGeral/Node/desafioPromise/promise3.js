function callbackSucess(x, y) {
  return x + y
}

function callbackError(x, y) {
  throw new Error(`O resultado da soma é um número Ímpar ${x+y}`)
}

function somaPares(x, y) {
  return new Promise((resolve, reject) => {
    if ((x+y) % 2 == 0) {
      resolve(callbackSucess(x, y))
    } else {
      reject(callbackError(x, y))
    }
    }
  ) 
}



somaPares(5, 5).then(console.log)
somaPares(8, 3).then(console.log)
somaPares(8, 8).then(console.log)