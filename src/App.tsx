import { useCallback, useEffect, useState } from 'react'
import word from './wordList.json'
import  HangmanDrawing  from './HangmanDrawing'
import HangmanKeybord  from './HangmanKeybord'
import  HangmanWord  from './HangmanWord'
import './App.css'

function getWord() {
  return word[Math.floor(Math.random() * word.length)]
}

function App() {

  
  // words
  const [wordToGuess, setWordToGuess] = useState(getWord)
//
// Guess letter
const [guessLetter, setGuessLetter] = useState<string[]>([])

const incorrectLetter = guessLetter.filter((letter) => !wordToGuess.includes(letter));

const isWinner = wordToGuess.split("").every((letter) => guessLetter.includes(letter));
const isLoser = incorrectLetter.length >= 6;

// const addGuessedLetter = useCallback((letter: string) => {
  //   if (guessLetter.includes(letter)) return
  //   else setGuessLetter([...guessLetter, letter])
  // })
  
  const addGuessedLetter = useCallback((letter: string) => {
    if (guessLetter.includes(letter) || isWinner || isLoser) return
    else setGuessLetter([...guessLetter, letter])
  },[guessLetter, isWinner, isLoser])
  
  
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


  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      setGuessLetter([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])
  
  
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
     {isWinner && "Winner! - Refresh to try again"}
     {isLoser && "Nice Try - Refresh to try again"}

</div>
    
    <HangmanDrawing  numberOfGuesses={incorrectLetter.length} />
    <HangmanWord  reveal={isLoser} gussedLetters={guessLetter} wordToGuess={wordToGuess}  />
    <div style={{alignSelf: 'stretch'}}>
    <HangmanKeybord disabled={isWinner || isLoser} addGuessedLetter={addGuessedLetter} activeLetters={guessLetter.filter(letter => wordToGuess.includes(letter))} inactiveLetters={incorrectLetter}/>

    </div>


   </div>
  )
}

export default App
