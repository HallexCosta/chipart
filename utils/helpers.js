modules.export = {
  Helpers:() => {
    const path = (...directories) => {
      const fulldirectory = directories.join('/')
      return fulldirectory
    }
    return {
      path
    }
  }
}