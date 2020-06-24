window.addEventListener('load', () => {
  const { itemsCard } = module.exports

  function createListGames(selector) {
    const cards = createCardsGroup(selector).get()

    itemsCard.map(({ title, image }) => {
      const card = createCard()
      const img = createElementImage().setURL(`${image.url}.${image.extension}`)
      const legend = createElementLegend().setContent(title)

      card.add(img)
      card.add(legend)
      cards.appendChild(card.get())
    })

    return {
      getCards: () => cards
    }
  }

  function createCardsGroup(selector) {
    const cards = document.querySelector(selector)
    //REMOVER ESSA FUNÇÃO
    const add = card => {
      cards.appendChild(card)
    }

    return {
      add,
      get: () => cards
    }
  }


  function createElementLegend() {
    const legend = document.createElement('legend')

    const setContent = (content) => {
      const title = document.createTextNode(content)
      legend.appendChild(title)
      return legend
    }

    return {
      setContent
    }
  }

  function createElementImage() {
    const image = document.createElement('img')

    const setURL = url => {
      image.setAttribute('src', url)
      return image
    }

    return {
      setURL
    }
  }

  function createCard() { 
    const card = document.createElement('div')
    card.classList.add('card')

    const add = element => {
      return card.appendChild(element)
    } 

    return {
      add,
      get: () => card
    }
  }

  module.exports = {
    createListGames
  }
})

