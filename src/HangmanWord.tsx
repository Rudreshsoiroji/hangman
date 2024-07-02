import React from 'react'
type HangmanWordProps = {
    gussedLetters: string[],
    wordToGuess: string,
    reveal?: boolean
}

function HangmanWord({gussedLetters, wordToGuess, reveal = false}: HangmanWordProps) {
    // const word = "test";
    // const guessLetter = ["t"];
  return (
    <div style={{display: 'flex', fontFamily:"monospace", fontWeight:"bold", gap: "0.25em" ,fontSize: "6rem", textTransform:"uppercase"}} >
       {wordToGuess.split("").map((letter, index)=>{
return <span style={{borderBottom: "solid 1rem black"}} key={index}>
    
    <span style={{    visibility:
                gussedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !gussedLetters.includes(letter) && reveal ? "red" : "black",
            }}>
        {letter}
        </span>
    
    </span>

       })}
        </div>
  )
}

export default HangmanWord