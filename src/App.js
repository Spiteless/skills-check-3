import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav.js'
import routes from './routes.js'
import { withRouter } from 'react-router-dom'

function App(props) {
  return (
    <div className="App">
      { (props.location.pathname === "/")
          ? false
          :  <Nav/> }
      {routes}
    </div>
  );
}

export default withRouter(App);
