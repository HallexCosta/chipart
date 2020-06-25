window.addEventListener('load', () => {
  const { Helpers, rootPath } = module.exports
  const { path } = Helpers()

  const prefixURL = path(rootPath, 'assets', 'pages', 'monte-seu-pc-gamer', 'pieces-computer')

  const items = [
    {
      title: 'PROCESSADOR',
      svg_url: path(prefixURL, 'cpu.svg')
    },
    {
      title: 'PLACA MÃE',
      svg_url: path(prefixURL, 'mother-board.svg')
    },
    {
      title: 'WATER COOLER',
      svg_url: path(prefixURL, 'water-cooler.svg')
    },
    {
      title: 'FANS',
      svg_url: path(prefixURL, 'fans.svg')
    },
    {
      title: 'MEMÓRIA RAM',
      svg_url: path(prefixURL, 'ram-memory.svg')
    },
    {
      title: 'PLACA DE VÍDEO',
      svg_url: path(prefixURL, 'video-card.svg')
    },
    {
      title: 'HARD DISK',
      svg_url: path(prefixURL, 'hard-disk.svg')
    },
    {
      title: 'SSD',
      svg_url: path(prefixURL, 'ssd.svg')
    },
    {
      title: 'GRAVADOR',
      svg_url: path(prefixURL, 'recorder.svg')

    },
    {
      title: 'FONTE',
      svg_url: path(prefixURL, 'font.svg')

    },
    {
      title: 'GABINETE',
      svg_url: path(prefixURL, 'cabinet.svg')

    },
    {
      title: 'MONITOR',
      svg_url: path(prefixURL, 'monitor.svg')

    },
    {
      title: 'SISTEMA OPERACIONAL',
      svg_url: path(prefixURL, 'operation-system.svg')

    },
    {
      title: 'MOUSE',
      svg_url: path(prefixURL, 'mouse.svg')

    },
    {
      title: 'TECLADO',
      svg_url: path(prefixURL, 'keyboard.svg')

    },
    {
      title: 'HEADSET',
      svg_url: path(prefixURL, 'headset.svg')

    }
  ]

  console.table(items)

  const builderGroup = document.querySelector('.list-items-build')

  items.map(({title, svg_url}) => {
    const objectSVG = createObjectSVG()
    objectSVG.attribute('data', svg_url)
    objectSVG.attribute('type', 'image/svg+xml')

    const label = createLabel()
    label.attribute('for', 'title')
    label.content(title)

    const svgContainer = createSvgContainer()
    svgContainer.addClass('svg-container')
    svgContainer.add(objectSVG.get())

    const pcBuilder = createPCBuilder()
    pcBuilder.add(svgContainer.get())
    pcBuilder.add(label.get()) 
    pcBuilder.clickListener()
    if (title === 'PROCESSADOR') {
      pcBuilder.addClass('selected')
    }

    builderGroup.appendChild(pcBuilder.get()) 
  })

  const allPCBuilders = document.querySelectorAll('.pc-builder')


  function createLabel() {
    const label = document.createElement('label')

    const attribute = (attributeName, attributeValue) => {
      label.setAttribute(attributeName, attributeValue)
    }
    const add = (node) => {
      label.appendChild(node)
    }
    const content = (content) => {
      const textNode = document.createTextNode(content)
      label.appendChild(textNode)
    }
    const get = () => {
      return label
    }

    return {
      add,
      attribute,
      content,
      get
    }
  }

  function createObjectSVG() {
    const objectSVG = document.createElement('object')

    const addClass = (className) => {
      objectSVG.classList.add(className)
    }
    const attribute = (attributeName, attributeValue) => {
      objectSVG.setAttribute(attributeName, attributeValue)
    }
    const add = (node) => {
      objectSVG.appendChild(node)
    }
    const get = () => {
      return objectSVG
    }
    return {
      add,
      addClass,
      attribute,
      get
    }
  }

  function createSvgContainer() {
    const svgContainer = document.createElement('div')

    const addClass = (className) => {
      svgContainer.classList.add(className)
    }

    const add = (nodeObject) => {
      svgContainer.appendChild(nodeObject)
    }
    const get = () => {
      return svgContainer
    }
    return {
      add,
      addClass,
      get
    }
  }
  function createPCBuilder() {
    const pcBuilder = document.createElement('div')
    pcBuilder.classList.add('pc-builder')

    const addClass = (className) => {
      pcBuilder.classList.add(className)
    }
    const add = (node) => {
      pcBuilder.appendChild(node)
    }
    const clickListener = () => {
      pcBuilder.addEventListener('click', () => {
        const allPCBuilders = document.querySelectorAll('.pc-builder')

        allPCBuilders.forEach(currentPCBuilder => {
          if (currentPCBuilder !== pcBuilder)
            currentPCBuilder.classList.remove('selected') 
        })

        pcBuilder.classList.add('selected')
      })
    }
    const get = () => {
      return pcBuilder
    }

    return {
      add,
      addClass,
      clickListener,
      get
    }
  }
})
