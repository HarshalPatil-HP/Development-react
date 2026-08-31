import { useState } from 'react'
import './App.css'

function App() {
  
  const [na,setna]=useState(false);
  const [ca,setca]=useState(false);
  const [pass,setpass]=useState('');
  const [length,setlenth]=useState(8);

  const passGen=()=>{
    let password='';
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(na) str += "0123456789";
    if (ca) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i <=length; i++) {
      let char=Math.floor(Math.random() * str.length()+1);
      password += str.charAt(char);
    }
    setPassword(pass);
  }

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 '>
      <h1 class="'text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            
            className="bg-white text-black outline-none w-full py-1 px-3 cursor-no-drop"
            placeholder="Password"
            readOnly
           
        />
        <button
        
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>

    <div className='flex gap-x-2 '>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        
        className='cursor-pointer'
         
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          
          id="numberInput"
          
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              
              id="characterInput"
              
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>

    </div>
    </>
  )
}

export default App
