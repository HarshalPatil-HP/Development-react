import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 font-sans">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Simple Counter App</h2>
      <p className="text-2xl font-semibold text-blue-600 mb-8">Current Count: {count}</p>
      
      <div className="flex gap-4">
        <button 
          onClick={() => setCount(count + 1)}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md cursor-pointer"
        >
          Increment
        </button>
        
        <button 
          onClick={() => {
            if(count > 0){
              setCount(count - 1)

            }
          }}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-md cursor-pointer"
        >
          Decrement
        </button>
        
        <button 
          onClick={() => setCount(0)}
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors shadow-md cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;