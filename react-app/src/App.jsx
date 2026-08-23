import React, { useState } from 'react';

function App() {
  // Declare a state variable named 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h2>Simple Counter App</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>
      
      <div>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ padding: '10px 20px', margin: '5px', fontSize: '16px', cursor: 'pointer' }}
        >
          Increment
        </button>
        
        <button 
          onClick={() => setCount(count - 1)}
          style={{ padding: '10px 20px', margin: '5px', fontSize: '16px', cursor: 'pointer' }}
        >
          Decrement
        </button>
        
        <button 
          onClick={() => setCount(0)}
          style={{ padding: '10px 20px', margin: '5px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#ffcccc' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;