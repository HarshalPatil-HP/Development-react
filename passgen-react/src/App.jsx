import { useCallback, useState, useEffect } from 'react'
import './App.css'

function App() {
  const [na, setna] = useState(false);
  const [ca, setca] = useState(false);
  const [pass, setpass] = useState('');
  const [length, setlength] = useState(8);

  const passGen = useCallback(() => {
    let password = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (na) str += "0123456789";
    if (ca) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      password += str.charAt(char);
    }
    
    setpass(password);
  }, [na, ca, length]);

  useEffect(() => {
    passGen();
  }, [length, na, ca, passGen]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-white'>
        <h1 className="text-white text-center my-3 text-xl font-bold">Password Generator</h1>
        
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="bg-white text-black outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800'>
            copy
          </button>
        </div>

        <div className='flex gap-x-4 text-sm'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => { setlength(e.target.value) }}
              className='cursor-pointer'
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={na}
              id="numberInput"
              onChange={() => setna((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={ca}
              id="characterInput"
              onChange={() => setca((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App