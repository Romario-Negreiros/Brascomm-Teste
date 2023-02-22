const keys = Object.keys(localStorage)

const data = []
keys.forEach(key => {
  const item = JSON.parse(localStorage.getItem(key))
  data.push(item)
})

const tbody = document.querySelector('.table-body')

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

data.forEach(value => {
  const tr = document.createElement('tr')

  const thCodigo = document.createElement('th')
  thCodigo.textContent = value.codigo
  thCodigo.setAttribute('scope', 'row')
  tr.appendChild(thCodigo)

  const tdRazaoSocial = document.createElement('td')
  tdRazaoSocial.textContent = value.razaoSocial
  tr.appendChild(tdRazaoSocial)

  const tdDataCadastro = document.createElement('td')
  tdDataCadastro.textContent = value.dataCadastro
  tr.appendChild(tdDataCadastro)

  const tdValorLimiteCredito = document.createElement('td')
  tdValorLimiteCredito.textContent = formatter.format(value.valorLimiteCredito)
  tr.appendChild(tdValorLimiteCredito)

  tbody.append(tr)
})
