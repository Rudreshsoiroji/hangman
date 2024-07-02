import { useEffect, useState } from 'react'
import word from './wordList.json'
import  HangmanDrawing  from './HangmanDrawing'
import HangmanKeybord  from './HangmanKeybord'
import  HangmanWord  from './HangmanWord'
import './App.css'

function App() {
  // words
  const [wordToGuess, setWordToGuess] = useState(()=>{
    return word[Math.floor(Math.random()*word.length)]
  
  })
//
// Guess letter
const [guessLetter, setGuessLetter] = useState<string[]>([])

const incorrectLetter = guessLetter.filter((letter) => !wordToGuess.includes(letter));


const addGuessedLetter = (letter: string) => {
  if (guessLetter.includes(letter)) return
  else setGuessLetter([...guessLetter, letter])
}

useEffect(() => {

  const handleClick = (e: KeyboardEvent) => {
    const key = e.key
    if (!key.match(/^[a-z]$/)) return

    e.preventDefault()
    addGuessedLetter(key)
  };

  document.addEventListener("keypress", handleClick);
  return () => {
    document.removeEventListener("keypress", handleClick);
  };
  
},[guessLetter])
  

  return (
   <div
   style={{
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    gap: '2rem',
   }}
   >
<div style={{fontSize: '3rem', textAlign: 'center'}}>
  win 
  loos
</div>
    {wordToGuess}

    <HangmanDrawing  numberOfGuesses={incorrectLetter.length} />
    <HangmanWord  gussedLetters={guessLetter} wordToGuess={wordToGuess}  />
    <div style={{alignSelf: 'stretch'}}>
    <HangmanKeybord/>

    </div>


   </div>
  )
}

export default App
