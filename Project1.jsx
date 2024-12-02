import React, { useState } from 'react'

function Project1() {
  //useState
  const [num, setNum] = useState(0);
  
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center '>
    <div className="card w-60 h-40 bg-white rounded-sm">
    <h1 className='font-bold text-center py-6 text-2xl'>Number is {num} </h1>
    <div className="btn flex items-center justify-center gap-2">
    <button onClick={()=>{setNum(num+1)}} className='bg-green-500 p-1 text-white rounded-sm'>Increament</button>
    <button onClick={()=>{setNum(num-1)}}  className='bg-red-500 p-1 text-white rounded-sm'>Decreament</button>
    </div>
    </div> 
    </div>
  )
}

export default Project1
