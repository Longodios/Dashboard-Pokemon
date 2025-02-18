"use client"
import React from 'react'

import { useState } from 'react'

interface Props {
  value? : number;
}

export const CardCounter = ({value = 10} : Props ) => {

  const [counter , setCounter ] = useState(value)
  return (

    <>
    
    
        <span className="text-center text-black text-9xl">{counter}</span>
    <div className="flex">
        <button onClick={ () => setCounter(counter + 1)} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">+1</button>
        <button onClick={() => setCounter(counter - 1)}className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">-1</button>


        
      



    </div>
    </>
    
  )
}

export default CardCounter
