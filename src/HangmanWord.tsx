import React from 'react'

function HangmanWord() {
    const word = "test";
    const guessLetter = ["t"];
  return (
    <div style={{display: 'flex', fontFamily:"monospace", fontWeight:"bold", gap: "0.25em" ,fontSize: "6rem", textTransform:"uppercase"}} >
       {word.split("").map((letter, index)=>{
return <span style={{borderBottom: "solid 1rem black"}} key={index}>
    
    <span style={{visibility: guessLetter.includes(letter) ? "visible" : "hidden"}}>
        {letter}
        </span>
    
    </span>

       })}
        </div>
  )
}

export default HangmanWord