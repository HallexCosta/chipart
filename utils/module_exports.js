window.module = {
  constructor(){
    this.modules = {}
  },
  get exports() { 
    return this.modules
  },
  set exports(values){
    this.modules = {
      ...this.modules,
      ...values
    } 
  }
}


