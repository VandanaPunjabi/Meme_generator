import React from 'react'
import './App.css'
import Header from './Header'
import Meme from './Meme'

function App() {
  return (
    <div className='App'>
      <Header
       name="MEme Generator"
      />
      <Meme/>
    </div>
  )
}

export default App