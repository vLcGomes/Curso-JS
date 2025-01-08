const characterId = document.getElementById('characterId')
const content = document.getElementById('content')
const btnGo = document.getElementById('btn-go')
const btnReset = document.getElementById('btn-reset')
const conteinerResult = document.getElementById('result-style')
const image = document.getElementById('img')

const fetchAPI = async (value) => {
  const result = await fetch(`https://rickandmortyapi.com/api/character/${value}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    return data;
  })
  return result
}

const keys = ['name', 'status', 'species', 'gender', 'origin', 'episode'];
const newKeys = {
  name: 'Nome',
  status: 'Status',
  species: 'Espécie',
  gender: 'Gênero',
  origin: 'Planeta de origem',
  episode: 'Episódios',
}

const buildResult = (result) => {
  return keys.map((key) => document.getElementById(key))
  .map((elem) => {
    if(elem.checked === true && (Array.isArray(result[elem.name])) === true) {
      const arrayResult = result[elem.name].join('\r\n')
      const newElem = document.createElement('p')
      newElem.innerHTML = `${newKeys[elem.name]}: ${arrayResult}`
      content.appendChild(newElem)

    } else if(elem.checked === true && (elem.name) === 'origin') {
      const newElem = document.createElement('p')
      newElem.innerHTML = `${newKeys[elem.name]}: ${result[elem.name].name}`
      content.appendChild(newElem)

    } else if(elem.checked ===true && (typeof(result[elem.name]) !== 'object')){
      const newElem = document.createElement('p')
      newElem.innerHTML = `${newKeys[elem.name]}: ${result[elem.name]}`
      content.appendChild(newElem)
    }
  })
}


btnGo.addEventListener('click', async (event) => {
  event.preventDefault()

  if(characterId.value === '') {
    return content.innerHTMl = 'Selecione um ID'
  }

  const result = await fetchAPI(characterId.value)
  if(content.firstChild === null) {
    conteinerResult.className = 'result-style'
    image.src = `${result.image}`
    buildResult(result)
  } else {
    content.innerHTML = ''
    conteinerResult.className = 'result-style'
    image.src = `${result.image}`
    buildResult(result)
  }
})

btnReset.addEventListener('click', () => {location.reload()})