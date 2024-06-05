import React, { useState } from 'react'

function NumberSelect({numbserSelect,setNumberSelect,error}) {
    let number = [1,2,3,4,5,6]

    

    return (
      <div>
          <p className='text-red-700 font-bold'>{error}</p>
        <div className='w-[50vw] h-[5vw] flex justify-center items-center  gap-20 border border-zinc-800'>
          {number.map((val,i) =>(
          <div key={i} onClick={()=> setNumberSelect(val)} className={`${numbserSelect === val ? 'bg-zinc-800 text-zinc-200' : "border border-zinc-800 w-32 h-full flex justify-center items-center"} border border-zinc-800 w-32 h-full flex justify-center items-center `} >{val}</div>))}
        </div>
        <p className='text-end text-xl font-bold'>Select number</p>
      </div>
      );
    }
    
    export default NumberSelect;