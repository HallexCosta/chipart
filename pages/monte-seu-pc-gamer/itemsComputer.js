const { Helpers, rootPath } = module.exports
const { path } = Helpers()

const prefixURL = path(rootPath, 'assets', 'pages', 'monte-seu-pc-gamer', 'pieces-computer')

module.exports = {
  items: [
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
}
