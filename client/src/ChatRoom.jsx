import React, { useState, useEffect } from 'react';
import Moment from 'moment';

let io = require('socket.io-client');
let socket = io("http://localhost:3001");

const ChatRoom = (props) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const username = props.username;

  useEffect(() => {
    socket.on('data', value => {
      setMessages(messages => {
        return [...messages, value];
      });
    });

    return () => {
      socket.off('data');
    };
  }, []);
 
  const typeMessage = (e) => {
    e.preventDefault();
    socket.emit("message", { username, content: message });
  }

  //TIMESTAMP
  //---------------------------------
  const date = new Date();

  function timeCheck(time) {
    if (time === undefined) {
      return "timestamp not found";
    } else {
      return Moment(time, "YYYY-MM-DDThh:mm:ssZ").fromNow()
    }
  }
//---------------------------------
  return (
    <div className="container">
      <div className="chatroom-container">
        <div className="chat-form">
          <form onSubmit={(e) => typeMessage(e)}>
            <input type="text" value={message} 
                   onChange={(e) => setMessage(e.target.value)} 
                   placeholder="text..." />
            <button type="submit" className="submit-btn">Send</button>
          </form>

          <div className="chatroom">
            {messages.map(message => 
              <ul id="messages" >
                <li>{message.username}  
                  <span>{timeCheck(date)}</span>   
                  <p>{message.content}</p></li>
              </ul>)}
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatRoom 