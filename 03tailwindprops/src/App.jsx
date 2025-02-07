import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "JSingh",
    age: 69
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="JSINGH" someObj={myObj} btntxt="Click me" />
      <Card username="CAC" btntxt="" />
    </>
  )
}

export default App
