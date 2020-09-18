import React, { useState, useEffect } from 'react';
import './App.css';
import StickySide from './components/StickySide'
import StickyOverlay from './components/StickyOverlay'



function App() {
  const [response, setApiResponse] = useState("")
  const [error, setError] = useState(null)

  
  useEffect(() => {
    fetch("http://localhost:9000/test")
    .then(res => res.text())
    .then(
      (res) => { setApiResponse(res);
    },
        (error) => {
          setError(error);
        }
      )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p className="App-intro">{response}</p>
        <StickyOverlay />
      </header>
    </div>
  );
}

export default App;
