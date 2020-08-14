import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './Components/Auth/Auth.js'
import Dashboard from './Components/Dashboard/Dashboard.js'
import Form from './Components/Form/Form.js'
import Nav from './Components/Nav/Nav.js'
import Post from './Components/Post/Post.js'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Dashboard/>
      <Form/>
      <Auth/>
      <Post/>
    </div>
  );
}

export default App;
