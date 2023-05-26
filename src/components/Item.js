import React, { useState } from 'react'



function Item({ data }) {
  const [trigger,SetTrigger]= useState(false);
  return (
    <div className='shadow-md bg-white text-center'>
      <p onClick={()=>SetTrigger(!trigger)} className='text-2xl p-10'>{data.setup}</p>
      {trigger && <p className='text-1xl p-10'>{data.punchline}</p>}
    </div>
  )
}

export default Item