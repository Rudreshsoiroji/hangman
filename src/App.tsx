import { useState } from 'react'
import word from './wordList.json'

import './App.css'

function App() {
  const [wordToGuess, setWordToGuess] = useState(()=>{
    return word[Math.floor(Math.random()*word.length)]
  })

  return (
    <>
    <h1>Hello</h1>
    {wordToGuess}
    </>
  )
}

export default App
