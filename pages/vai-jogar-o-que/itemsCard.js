window.addEventListener('load', () => {
  const { Helpers, rootPath } = module.exports

  const { path } = Helpers()
  const prefixURL = path(rootPath, 'assets', 'pages', 'vai-jogar-o-que', 'games')

  module.exports = {
    itemsCard: [
      {
        title: 'Battlefield 1',
        image: {
          url: path(prefixURL, 'battlefield-i'),
          extension: 'jpg'
        }
      },
      {
        title: 'GTA V',
        image: {
          url: path(prefixURL, 'gta-v'),
          extension: 'jpg'
        }
      },
      {
        title: 'The Witcher 3 - Wild Hunt',
        image: {
          url: path(prefixURL, 'the-witcher-3-wild-hunt'),
          extension: 'jpg'
        }
      },
      {
        title: 'League of Legends',
        image: {
          url: path(prefixURL, 'league-of-legends'),
          extension: 'jpg'
        }
      },
      {
        title: 'Dota 2',
        image: {
          url: path(prefixURL, 'dota-2'),
          extension: 'jpg'  
        }
      },
      {
        title: 'Minecraft',
        image: {
          url: path(prefixURL, 'minecraft'),  
          extension: 'jpg'
        }
      },
      {
        title: 'Counter-Strike: Global Offensive',
        image: {
          url: path(prefixURL, 'counter-strike-global-offensive'),
          extension: 'jpg'  
        }
      },
      {
        title: 'Rainbow Six Siege',
        image: {
          url: path(prefixURL, 'rainbow-six-siege'),
          extension: 'jpg'
        }
      },
      {
        title: 'Overwatch',
        image: {
          url: path(prefixURL, 'overwatch'),
          extension: 'jpg'  
        }
      },
      {
        title: 'Tom Clancy\'s - The division',
        image: {
          url: path(prefixURL, 'tom-clancy-s-the-division'),
          extension: 'jpg'
        }
      },
      {
        title: 'Assasins Creed - Origins',
        image: {
          url: path(prefixURL, 'assasins-creed-origins'),
          extension: 'jpg'
        }
      },
      {
        title: 'Fortnite',
        image: {
          url: path(prefixURL, 'fortnite'),
          extension: 'jpg'
        }
      },
      {
        title: 'Fifa 2018',
        image: {
          url: path(prefixURL, 'fifa-2018'),
          extension: 'jpg'
        }
      },
      {
        title: 'Roblox',
        image: {
          url: path(prefixURL, 'roblox'),
          extension: 'png'
        }
      },
      {
        title: 'Paladins',
        image: {
          url: path(prefixURL, 'paladins'),
          extension: 'png'
        }
      },
      {
        title: 'Apex Legends',
        image: {
          url: path(prefixURL, 'apex-legends'),
          extension: 'png'
        }
      },
      {
        title: 'Call of Duty Black Ops 4',
        image: {
          url: path(prefixURL, 'call-of-duty-black-ops-4'),
          extension: 'png'
        }
      },
      {
        title: 'Battlefield V',
        image: {
          url: path(prefixURL, 'battlefield-v'),
          extension: 'png'
        }
      },
      {
        title: 'Metro Exodus',
        image: {
          url: path(prefixURL, 'metro-exodus'),
          extension: 'png'
        }
      }
    ]
  }
})
