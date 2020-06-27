module.exports = {
  get rootPath(){
    const { Helpers } = module.exports
    const { path } = Helpers()

    return path('..', '..')
  }
}
