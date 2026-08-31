import { useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
function App() {
  

  return (
    <>
      <Cards username='harshal' clickBtn='Visit me' />
      <Cards username='patil'/>
      <Cards/>
    </>
  )
}

export default App
