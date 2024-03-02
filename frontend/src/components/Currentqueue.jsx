import React from 'react'

function Currentqueue({list}) {
  return (
    <ul className='QueueList'>
      {list && list.map((el, ind)=>{
        return <li>{el.title}</li>
      })}
    </ul>
  )
}

export default Currentqueue