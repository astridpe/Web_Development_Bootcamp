import React from "react";
import Input from "./Input";
import Login from "./Login";

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <form className="form">
      <Input 
        type="text"
        placeholder="Username"
      />
      <Input 
        type="password"
        placeholder="Password"
        />
      <Login 
        type="submit"
      />
      </form>
    </div>
  );
}

export default App;
