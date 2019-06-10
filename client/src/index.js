import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import ChatRoom from './ChatRoom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/chatroom" component={ChatRoom} />
    </Switch>
  </Router>
  , document.getElementById('root')); 