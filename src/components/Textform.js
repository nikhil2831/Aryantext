import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');

  
  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleCopy = () => {
    console.log("i am copy");
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }


  return (
    <>
    <div className="container" style={{color : props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>

        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          style={{backgroundColor : props.mode === 'light' ? 'dark' : 'white' }}
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)} 
        ></textarea>
      </div>

      <button
type="button"
className="btn btn-primary mx-1"
onClick={handleUpperCase} 
      >
        Convert to upper case
      </button>
      <button type="button" className="btn btn-primary mx-1" onClick={handleLowerCase} >
        Convert to lower case
      </button>

      <button type="button" className="btn btn-primary mx-1" onClick={handleCopy} >
        Copy text
      </button>

      <button type="button" className="btn btn-primary mx-1" onClick={handleExtraSpaces} >
        remove extra spaces
      </button>

    </div>
    <div className="container" style={{color : props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>Your text summary is here</h1>
      <p>{text.split(" ").length}words {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
