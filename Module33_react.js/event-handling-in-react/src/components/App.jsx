import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("");
  const [name, setName] = useState("")
  const [isMouseOver, setMouseOver] = useState(false);
 

  function handleClick() {
    setHeadingText(name);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function mouseOver() {
    setMouseOver(true);
  }

  function mouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
      onChange={handleChange} 
      type="text" 
      placeholder="What's your name?" 
      value={name}
      />
      <button 
      style={{backgroundColor: isMouseOver ? "black" : "white"}} 
      onMouseOver={mouseOver}
      onMouseOut={mouseOut} 
      onClick={handleClick}
      >Submit</button>
    </div>
  );
}

export default App;
