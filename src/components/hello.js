const hello = () => {
  const app = document.getElementById('app')
  const hello = document.createElement('h1')
  hello.textContent = 'Hello, world!'
  app.appendChild(hello)
}

export { hello }
