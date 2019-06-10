import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [chatroom, setChatroom] = useState("");
  const [rooms, setRooms] = useState([]);

  useLayoutEffect(() => {
    setLoggedIn(localStorage.getItem('user') ? true : false);
    if (isLoggedIn) {
      axios.get('/chatroom')
        .then(function (response) {
          console.log(response);

          setRooms(response.data)

          console.log(response.data);
          console.log(response.data);
          console.log(response.data);
          console.log(response.data);
          console.log(response.data);

        })
    }

  }, [isLoggedIn])


  const createRoom = (e) => {
    e.preventDefault();
    console.log(chatroom);
    axios.post('/chatroom', {
      id: chatroom,
    })
      .then(function (response) {
        console.log(response);
        alert('alert')
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <div className="Page">
        <h2>Home</h2>
        <div className="create">
          <h4>Create chatroom</h4>
          <form onSubmit={(e) => createRoom(e)}>
            <input type="text" value={chatroom} onChange={(e) => setChatroom(e.target.value)} placeholder="Room name..." />
            <button type="submit" className="submit-btn">Create Room</button>
          </form>
        </div>

      </div>
      {isLoggedIn ? <div className="show">
        <h4>Rooms</h4>
        <ul>
          {rooms.map(data => <li><Link to={`/chatroom?id=${data}`} > {data} </Link></li>)

          }
        </ul>
      </div> :
        <div className="links">
          <Link to="/Login" className="login">Login</Link>
          <Link to="/Register" className="Register">Register</Link>
        </div>}
    </div>
  );
}
export default Home