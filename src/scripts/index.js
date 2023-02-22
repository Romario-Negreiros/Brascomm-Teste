const form = document.querySelector('.form')
const formResetBtn = document.querySelector('.formResetBtn')
const successMsg = document.querySelector('.success-msg')

const handleFormSubmit = event => {
  event.preventDefault()
  const data = {}
  const { children } = event.target

  for (let i = 0; i < children.length - 2; i++) {
    data[children[i].children[0].name] = children[i].children[0].value
  }

  localStorage.setItem(data.codigo, JSON.stringify({ ...data, dataCadastro: new Date(data.dataCadastro).toLocaleDateString('pt-BR') }))
  formResetBtn.click()

  successMsg.classList.add('show')
  setTimeout(() => {
    successMsg.classList.remove('show')
  }, 5000)
}

form.addEventListener('submit', handleFormSubmit)

