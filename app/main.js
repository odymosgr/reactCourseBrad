import React from "react"
import ReactDOM from "react-dom/client"

function ExampleComponent() {
  return (
    <div>
      <h1>This is our App!</h1>
      <p>The sky is blue</p>
      <p>Roses are red</p>
      <p>My t-shirt is blue</p>
      <p>So I like you</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<ExampleComponent />)

if (module.hot) {
  module.hot.accept()
}
