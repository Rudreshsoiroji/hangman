import React from 'react'

const HEAD = (   <div style={{
    position: 'absolute',
    width: '50px',
    height: '50px',
    border: '10px solid black',
    borderRadius: '100%',
    top: '50px',
    right: '-30px'
}}>
</div>)

const BODY = (   <div style={{
    position: 'absolute',
    width: '10px',
    height: '100px',
    backgroundColor: 'black',
    top: '118px',
    right: '0'
}}>
</div>)

const RIGHT_ARM = (   <div style={{
    position: 'absolute',
    width: '100px',
    height: '10px',
    backgroundColor: 'black',
    top: '150px',
    right: '-100px',
    rotate: '-30deg',
    transformOrigin: 'left bottom'
}}>
</div>)
const LEFT_ARM = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom",
      }}
    />
  )
  
  const RIGHT_LEG = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom",
      }}
    />
  )
  
  const LEFT_LEG = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: 0,
        rotate: "-60deg",
        transformOrigin: "right bottom",
      }}
    />
  )


function HangmanDrawing() {
  return (
      <div style={{position: 'relative'}}>
        {HEAD}
        {BODY}
        {RIGHT_ARM}
        {LEFT_ARM}
        {RIGHT_LEG}
        {LEFT_LEG}

        <div style={{height:"50px", width:"10px", backgroundColor:"black", position:"absolute", top:"0", right:"0"}}></div>

        <div style={{height:"10px", width:"200px", 
            marginLeft:"120px", backgroundColor:"black"}}></div>
         
        
        <div style={{height:"400px", width:"10px", backgroundColor:"black", marginLeft:"120px"}}></div>
        <div style={{height:"10px", width:"250px", backgroundColor:"black"}}></div>
      
    </div>
  )
}

export default HangmanDrawing
