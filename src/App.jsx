import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rating from './components/Rating'

function App() {

  return (
    <div className="h-screen w-screen bg-verydarkblue font-sans">
      <Rating />
    </div>
  )
}

export default App
