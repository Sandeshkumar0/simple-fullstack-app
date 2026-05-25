import React, { useState } from 'react'

function App() {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const sendData = async () => {
    try {
      const response = await fetch('http://localhost:5000/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      


      const data = await response.json();
      setMessage(data.message || '');
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>Frontend</h1>

      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={sendData}>SEND</button>

      <h2>{message}</h2>

    </div>
  )
}

export default App;