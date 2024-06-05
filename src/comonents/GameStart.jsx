import React, { useState } from 'react'
import Score from './Score'
import NumberSelect from './NumberSelect'
import Button from './Button'
import Hints from './Hints'

function GameStart() {
  const [currentDice ,setCurrentDice] = useState(1)
  const [numbserSelect,setNumberSelect] = useState()
  const [score,setScroe] = useState(0)
  const [error,setError] = useState('')
  const [show ,setShow] = useState(false)

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const rnadomDice = () =>{
    if (!numbserSelect) {
      setError('You have not selectd any number')
      return
    }else{
      setError('')
    }

    const number = getRandomNumber(1,6)
    setCurrentDice(number)


    if (numbserSelect === number) {
      setScroe((prev) => prev + number)
    }else{
      setScroe((prev) => prev - 2 )
    }
    setNumberSelect(undefined)
  } 

  const reset = () =>{
    setScroe('')
  }
  
  const showHints = () =>{
    setShow((prev) => !prev)
  }

  return (
    <div className='w-full h-screen '>
      <div className='flex  justify-around items-center gap-10'>
        <Score score={score} />
        <NumberSelect numbserSelect ={numbserSelect} setNumberSelect={setNumberSelect} error={error} />
        </div>
        <div className='w-full flex justify-center items-center flex-col gap-5 mt-10 '>
          <div className='w-[100vw] flex justify-center items-center ' onClick={rnadomDice}>
          <img  className='w-[10%] ' src={`../src/assets/dices/dice_${currentDice}.png`} alt="" />
          </div>
          <div className='flex  justify-center items-center flex-col gap-4'>
            <span className='font-bold font-["Poppins]'>Click to dice role</span>
            <p className='font-bold font-["Poppins]'>Your Dice Number is : {currentDice}</p> <span className='font-bold font-["Poppins]'>your selected number is :{numbserSelect}</span>
              <Button text={'Reset'} onClick={reset} />
              <Button text={"Show Result"}  onClick={showHints} />
              {show ? <Hints/> : ''}
            </div>
        </div>
        
    </div>
  )
}

export default GameStart