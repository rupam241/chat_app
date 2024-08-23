import React, { useState } from 'react';
import "./chat.css";
import UserInfo from '../list/userInfo/UserInfo';
import EmojiPicker from 'emoji-picker-react';

function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="User Avatar" />
          <div className="texts">
            <span>Rupam Dey</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="Phone Icon" />
          <img src="./video.png" alt="Video Icon" />
          <img src="./info.png" alt="Info Icon" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>lorem5</p>
            <span>1 min ago</span>
          </div>
          
        </div>

         <div className="message own">
         
          <div className="texts">
            <p>lorem5</p>
            <span>1 min ago</span>
          </div>
          
        </div>

         <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>lorem5</p>
            <span>1 min ago</span>
          </div>
          
        </div>

         <div className="message own">
         
          <div className="texts">
            <p>lorem5</p>
            <span>1 min ago</span>
          </div>
          
        </div>

         <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>lorem5</p>
            <span>1 min ago</span>
          </div>
          
        </div>
         <div className="message own">
       
          <div className="texts">
            <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="" />
            <p>lorem5</p>
            <span>1 min ago</span>
          </div>
          
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="Image Icon" />
          <img src="./camera.png" alt="Camera Icon" />
          <img src="./mic.png" alt="Mic Icon" />
        </div>
        <input
          type="text"
          placeholder='Type a message'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt="Emoji Icon"
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker"> {open && <EmojiPicker onEmojiClick={handleEmoji} />}</div>
         
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  );
}

export default Chat;
