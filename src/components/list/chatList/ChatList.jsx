import React, { useState } from 'react'
import './chatList.css'

function ChatList() {
  const [addMode, setAddMode] = useState(false)
  return (
    <div className='chatList'>
      <div className='search'>
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder='search' />
        </div>
        <img src={addMode ? './minus.png' : './plus.png'} alt="" className='
        add' onClick={() => { setAddMode(prev => !prev) }} />
      </div>


      <div className="item">
        <img src="./avatar.png" alt="" srcset="" />
        <div className="texts">
          <span>Rupam </span>
          <p>Hello</p>
        </div>

      </div>
     
    </div>
  )
}


export default ChatList