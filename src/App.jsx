import React, { useState } from 'react'
import GamePage from './comonents/GamePage'
import GameStart from './comonents/GameStart'

function App() {
  const [isPlay,setISPlay] = useState(false)

  const toggle = () => {
    setISPlay((prev) => !prev)
  }

  return (
    <div className='w-full h-full flex justify-center items-center'>
      
      {isPlay ? (<GameStart />) : <GamePage toggle={toggle} />}
    </div>
  )
}

export default App