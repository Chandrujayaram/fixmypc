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
      {/* Bold and Italic Title */}
      <h1 style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '36px', color: '#333' }}>
        FixMyPC 🛠️
      </h1>

      {/* Cool PC Repair Illustration Image */}
      <div style={{ margin: '20px 0' }}>
        <img 
          src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=500&auto=format&fit=crop" 
          alt="PC Repair" 
          style={{ width: '300px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}
        />
      </div>

      <div style={{ margin: '20px 0' }}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Ask your PC issue (e.g., slow, wifi)" 
          style={{ 
            padding: '10px', 
            width: '300px', 
            marginRight: '10px', 
            fontSize: '16px',
            fontStyle: 'italic' // Input text-ஐயும் italic ஆக்கியாச்சு
          }}
        />
        <button 
          onClick={handleSearch} 
          style={{ 
            padding: '10px 20px', 
            fontSize: '16px', 
            fontWeight: 'bold', // Button text-ஐ bold ஆக்கியாச்சு
            cursor: 'pointer',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Get Solution
        </button>
      </div>
      
      {response && (
        <div style={{ 
          marginTop: '20px', 
          padding: '15px', 
          background: '#f0f0f0', 
          display: 'inline-block', 
          borderRadius: '5px',
          fontWeight: 'bold',  // Solution-ஐ Bold & Italic ஆக்கியாச்சு
          fontStyle: 'italic'
        }}>
          <strong>Solution:</strong> {response}
        </div>
      )}
    </div>
  );
}

export default App;