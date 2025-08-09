import React, { useState } from 'react';

export default function About() {
  
 const [myStyle, setMyStyle] = useState(
{
  color: 'white',
  backgroundColor: 'black'
})

const [btntext, setbtntext] = useState("Enable light mode")

const toggleStyle = ()=>{
  if(myStyle.color === 'white'){
    setMyStyle({
      color: 'black',
  backgroundColor: 'white',
  border: '1px solid white'
    })
    setbtntext("Enable dark mode")
  }
  else{
    setMyStyle({
      color: 'white',
  backgroundColor: 'black'
    })
    setbtntext("Enable light mode")
  }
}

  return (
    <div className="container my-4"  style={myStyle}>
      <h1 className='my-3'>About us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button" style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion. This is the second item’s accordion body.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion. This is the third item’s accordion body.
            </div>
          </div>
        </div>
        <div className="container">
        <button onClick={toggleStyle} type="button" class="btn btn-warning">{btntext}</button></div>
     
    </div>
      </div>
      
  );
}
