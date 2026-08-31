import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    
      <div className='w-full h-screen' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-8 inset-x-2 px-2'>
        <div className='bg-white flex flex-wrap justify-center px-2 py-2 rounded-2xl shadow-2xl gap-3'>
          <button
          onClick={()=>setColor("red")}           
          className='text-white cursor-pointer  outline-none bg-red-500 p-1.5 m-1.5 rounded-xl  ' style={{backgroundColor:"red"}}>Red</button>
          <button  onClick={()=>setColor("green")} className='text-  cursor-pointer  outline-none bg-red-500 p-1.5 m-1.5 rounded-xl  ' style={{backgroundColor:"green"}}>Green</button>
          <button  onClick={()=>setColor("orange")} className='text-  cursor-pointer  outline-none bg-red-500 p-1.5 m-1.5 rounded-xl  ' style={{backgroundColor:"orange"}}>Orange</button>
          <button  onClick={()=>setColor("violet")} className='text-  cursor-pointer  outline-none bg-red-500 p-1.5 m-1.5 rounded-xl  ' style={{backgroundColor:"violet"}}>Violet</button>
          <button  onClick={()=>setColor("purple")} className='text-  cursor-pointer  outline-none bg-red-500 p-1.5 m-1.5 rounded-xl  ' style={{backgroundColor:"purple"}}>Purple</button>
          <button  onClick={()=>setColor("lavender")} className='text-  cursor-pointer  outline-none bg-red-500 p-1.5 m-1.5 rounded-xl  ' style={{backgroundColor:"lavender"}}>Lavender</button>
          <button  onClick={()=>setColor("blue")} className='text-  cursor-pointer  outline-none bg-red-500 p-1.5 m-1.5 rounded-xl  ' style={{backgroundColor:"blue"}}>Blue</button>
          <button  onClick={()=>setColor("olive")} className='text-  cursor-pointer  outline-none bg-red-500 p-1.5 m-1.5 rounded-xl  ' style={{backgroundColor:"olive"}}>Olive</button>
          <button  onClick={()=>setColor("Grey")} className='text-  cursor-pointer  outline-none bg-red-500 p-1.5 m-1.5 rounded-xl  ' style={{backgroundColor:"grey"}}>Grey</button>
          <button  onClick={()=>setColor("yellow")} className='text-  cursor-pointer  outline-none bg-red-500 p-1.5 m-1.5 rounded-xl  ' style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>setColor("Pink")}  className='text-  cursor-pointer  outline-none bg-red-500 p-1.5 m-1.5 rounded-xl  ' style={{backgroundColor:"pink"}} >Pink</button>
        </div>
      </div>

      </div>
    
  )
}

export default App
