import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = props => {
  const [setUsername, updateUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(setUsername);
    axios.post('/users', {
      firstName: setUsername,
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
      <Link to="/">Back</Link>
      <div className="page">
        <h2>Register</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={setUsername} onChange={(e) => updateUsername(e.target.value)} placeholder="Username..." />
        <br></br>
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  )
}
export default Register