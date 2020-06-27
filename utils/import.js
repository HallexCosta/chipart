module.exports = {
  require: (url) => {
    const script = document.createElement('script')

    if (url.split('.')) {
      script.setAttribute('src', `${url}`)
    } else {
      script.setAttribute('src', `${url}.js`)
    }

    document.body.appendChild(script)
    return module.exports
  }
}

