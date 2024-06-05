import React from 'react'

function Button({onClick,text}) {
  return (
    <button onClick={onClick} className='px-5 p-2 bg-zinc-800 text-zinc-100 hover:bg-zinc-900  rounded-md' >{text}</button>
  )
}

export default Button