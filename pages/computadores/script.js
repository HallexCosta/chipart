window.addEventListener('load', () => {
  const listProducts = createListProducts()
  listProducts.changeIconAndExpandButtonCategorias()
  listProducts.addClassActivedOnLinkClicked()

  function createListProducts() {
    const buttonCategorias = document.querySelector('.container aside .list-product .vertical .title')
    const verticalItems = document.querySelector('.container aside .list-product .vertical .items')

    changeIconAndExpandButtonCategorias = () => {
      const icons = {
        plus: 'fi-plus',
        minus: 'fi-minus'
      }
      const icon = document.querySelector('.container aside .list-product .vertical li i')
      const { plus, minus } = icons
      buttonCategorias.addEventListener('click', () => {
        console.log('Clicked')
        changeIcons()
        expandCategories()
      })

      changeIcons = () => {
        const currentClass = icon.getAttribute('class')
        console.log(`Current class: ${currentClass}`)
        if (currentClass == plus) {
          console.log(`Change ${plus} for ${minus}`)
          icon.classList.remove(plus)
          icon.classList.add(minus)
        } else {
          console.log(`Change ${minus} for ${plus}`)
          icon.classList.remove(minus)
          icon.classList.add(plus)
        }
      }
        
      expandCategories = () => {
        const currentClass = icon.getAttribute('class')
          
        if (currentClass == plus) {
          verticalItems.style.maxHeight = '0'
        } else {
          verticalItems.style.maxHeight = '300px' 
        }
      }
    }

    addClassActivedOnLinkClicked = () => {
      const links = document.querySelectorAll('.container aside .list-product .vertical .items li a')
      
      console.log('Call addClassActivedOnLinkClicked')

      links.forEach(link => {
        link.addEventListener(('click'), () => {
          links.forEach(link => {
            link.style.color = '#000'
            console.log('Load black color in', link)
          })
          link.style.color = '#6fc81e'
        })
      })
    }

    return {
      addClassActivedOnLinkClicked,
      changeIconAndExpandButtonCategorias
    }
  }
})
