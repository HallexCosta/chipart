window.addEventListener('load', () => {
  const { itemsCard } = module.exports

  function createListGames(selector) {
    const cards = createCardsGroup(selector).get()

    itemsCard.map(({ title, image }) => {
      const card = createCard()
      const img = createElementImage()
      const legend = createElementLegend()

      img.addClass('selected')
      img.setURL(`${image.url}.${image.extension}`)

      legend.setContent(title)

      card.add(img.get())
      card.add(legend.get())
      cards.appendChild(card.get())
    })

    return {
      getCards: () => cards
    }
  }

  function createCardsGroup(selector) {
    const cards = document.querySelector(selector)

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
    }

    return {
      setContent,
      get: () => legend
    }
  }
  
  function createElementImage() {
    const image = document.createElement('img')

    const addClass = className => {
      image.classList.add(className)
    }

    const setURL = url => {
      image.setAttribute('src', url)
    }

    return {
      setURL,
      addClass,
      get: () => image
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

