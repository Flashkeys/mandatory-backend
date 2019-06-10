import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import openSocket from 'socket.io-client';
import { getParameterByName } from './utils.js';
import axios from 'axios';

const socket = openSocket('http://localhost:3001/');

const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const username = localStorage.getItem("user");
  
  socket.on('data', value => {
    setMessages([...messages, value]);
  })
  console.log(messages);

  const typeMessage = (e) => {
    e.preventDefault();
    socket.emit("sendData", { username, content: message });
  }
  console.log(username);
  



  return (
    <div className="container">
      <div className="chatroom-container">
        <div className="chat-form">
          <form onSubmit={(e) => typeMessage(e)}>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="text..." />
            <button type="submit" className="submit-btn">Send</button>
          </form>

          <div className="chatroom">
            {messages.map(message => <p>{message.content}  <span style={{ fontSize: "12px", color: "f8f8f8" }}> message by </span>  {message.username} </p>)}
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatRoom