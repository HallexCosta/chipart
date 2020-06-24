module.exports = {
  Helpers: () => {
    const path = (...directories) => {
      return directories.join('/')
    }
    return {
      path
    }
  }
}
