// frontend/src/App.js
import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Chamando a API do backend
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>API Test</h1>
      <p>{message ? message : 'Loading...'}</p>
    </div>
  );
}

export default App;
