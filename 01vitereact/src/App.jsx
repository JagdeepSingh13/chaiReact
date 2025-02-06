import Chai from './chai'

function App() {
  const username = 'JSingh'

  return (
    // there should be only one main element or div or <>
    <>
      <Chai />
      <p>Hello {username}</p>
    </>
  )
}

export default App  