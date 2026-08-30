import React, { useState } from 'react'

export default function App() {

  let [counter, setCounter] = useState(0);

  let add = () => {
    if (counter < 20) {
      setCounter((prev)=>prev + 1);
      setCounter((prev)=>prev + 1);
      setCounter((prev)=>prev + 1);
   
    }
  }
  let remove = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  let reset = () => {
    setCounter(0);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
      <p className="text-2xl font-bold text-gray-800">clicked times: {counter}</p>
      <div className="flex gap-3">
        <button onClick={add} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
          add 3 times {counter}
        </button>
        <button onClick={remove} className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition">
          remove {counter}
        </button>
        <button onClick={reset} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow hover:bg-gray-700 transition">
          reset {counter}
        </button>
      </div>
    </div>
  )
}