const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
  const funcionarios = response.data
  const funcionariasChinesas = funcionarios.filter(funcionario => funcionario.pais == 'China' && funcionario.genero == 'F')
  let menorSalario = funcionariasChinesas[0].salario

  for (let i = 0; i < funcionariasChinesas.length; i++) {
    if (funcionariasChinesas[i].salario < menorSalario) {
      menorSalario = funcionariasChinesas[i].salario
    }
  }

  const funcionariaComMenorSalario = funcionariasChinesas.filter(funcionario => funcionario.salario == menorSalario)
  console.log(funcionariaComMenorSalario)
})
