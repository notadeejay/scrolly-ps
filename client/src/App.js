import React, { useState, useEffect } from 'react';
import './App.css';
import ScrollExample from './components/ScrollExample'



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
        <ScrollExample />
      </header>
    </div>
  );
}

export default App;
