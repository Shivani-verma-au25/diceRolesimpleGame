import React from 'react'

function Score({score}) {
  return (
    <div className='w-[10vw] h-[10vw] px-2'>
        <h1 className='text-[5vw] leading-2 '>{score || 0} </h1>
        <p className='leading-2 text-xl font-bold'>Scores</p>
    </div>
  )
}

export default Score