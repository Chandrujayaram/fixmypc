import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSearch = async () => {
    try {
      const res = await fetch('https://fixmypc-backend.vercel.app/get-solution', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: query }),
      });
      const data = await res.json();
      setResponse(data.answer);
    } catch (err) {
      console.error("Error connecting to backend:", err);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>FixMyPC 🛠️</h1>
      <div style={{ margin: '20px 0' }}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Ask your PC issue (e.g., slow, wifi)" 
          style={{ padding: '10px', width: '300px', marginRight: '10px', fontSize: '16px' }}
        />
        <button onClick={handleSearch} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Get Solution
        </button>
      </div>
      
      {response && (
        <div style={{ marginTop: '20px', padding: '15px', background: '#f0f0f0', display: 'inline-block', borderRadius: '5px' }}>
          <strong>Solution:</strong> {response}
        </div>
      )}
    </div>
  );
}

export default App;