// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import Home from './component/Home';
import { BrowserRouter, Route, HashRouter,Link } from 'react-router-dom'
// import { Routes } from 'react-router';
import Post from './component/Post';
class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
          <Route path='/' exact component={Home} />
          <Route path='/:post_id' component={Post} />
          {/* <Home/>
            <Post/> */}
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
