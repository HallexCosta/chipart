window.addEventListener('load', () => {
  const createScript = (url) => {
    const script = document.createElement('script')

    if (url.split('.')) {
      script.setAttribute('src', `${url}`)
    } else {
      script.setAttribute('src', `${url}.js`)
    }
    console.log(script)

    const run = () => {
      document.body.appendChild(script)
    }
    return {
      run
    }
  }
  
  const require = (url) => {
    createScript(url).run()
  }

  module.exports = {
    require
  }
})
