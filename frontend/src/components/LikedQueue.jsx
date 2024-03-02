import React, { useContext } from 'react'
import NewContext from '../context/NewContext'

function LikedQueue({list}) {
  return (
    <ul className='QueueList'>
      {list && list.map((el, ind)=>{
        return <li key={ind}>{el.title}</li>
      })} 
    </ul>
  )
}

export default LikedQueue