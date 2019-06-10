import React, { useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

const Login = props => {
  const [username, setUsername] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(11111111111);
    console.log(username);
    axios.post('/users/login', {
      firstName: username,
    })
      .then(function (response) {
        localStorage.setItem('user', username)
        setRedirect(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  if (redirect) {
    return <Redirect to='/' />
  }

  return (
    <div className="container">
      <Link to="/">Back</Link>
      <div className="page">
        <h2>Login</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username..." />
        <br></br>
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  )
}
export default Login