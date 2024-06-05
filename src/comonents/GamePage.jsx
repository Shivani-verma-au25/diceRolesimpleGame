import React from 'react'
import dice from '/src/assets/dice.png';
import Button from './Button';

function GamePage({toggle}) {
  return (
    <div className='w-full h-screen px-10 py-2 flex justify-center items-center '>
      <div className='w-full h-full'><img  className='' src={dice} alt="" /></div>
      <div className='w-full font-["Poppins] tetxt-center'><h1 className='font-bold text-6xl'>DICE GAME</h1>
      <Button  text={"Play Game"} onClick={toggle} />
      {/* <button onClick={toggle} >Play</button> */}
      </div>
    </div>
  )
}

export default GamePage