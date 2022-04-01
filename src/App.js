import React, { useEffect } from "react";
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from "./spotify";

function App() {

  useEffect(() => {  
    const token = getTokenFromResponse();
    console.log('I HAVE A TOKEN -> ', token);
  }, [])
  

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
