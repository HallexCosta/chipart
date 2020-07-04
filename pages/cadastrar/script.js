const handle = {
  inputMasks: {
    cpf: (cpf) => {
      const cpfFiltered = cpf.replace('/[^\d]/g', '')
      const cpfFormated = cpfFiltered.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
      document.querySelector('#cpf').value = cpfFormated
    }, 
    phone: (number) => {
      const numberFiltered = number.replace('/[^\d]/g', '')
      const numberFormated = numberFiltered.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
      document.querySelector('#phone').value = numberFormated
    },
    date: (date) => {
      const dateFiltered = date.replace('[^\d]/g', '')
      const dateFormated = date.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3")
      document.querySelector('#date').value = dateFormated
    }
  }
}

window.addEventListener('load', () => {
  submitForm()

  function submitForm(){
    document.querySelector('#register').addEventListener('submit', (e) => {
      e.preventDefault()    
    })
  }
})
