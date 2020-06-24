window.modules = {
  constructor(){
    this.exports = {}
  },
  get export() { 
    return this.exports
  },
  set export(values){
    this.exports = {
      ...this.exports,
      ...values
    } 
  }
}


