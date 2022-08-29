import React from "react";
import Form from "./Form";

var userIsRegistrered = false;

function App() {
  return (
    <div className="container">
    <Form isRegistrered={userIsRegistrered}/>
    </div>
  );
}

export default App;
