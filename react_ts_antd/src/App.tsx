import React from 'react';
import './App.css';
import UserList from './UserList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About';
import Users from './pages/Users';
import Home from './pages/Home';
import Login from './pages/Login';
function App() {
  return (
    <>
      {/* <UserList/> */}
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="/login">login page</a>
          </li>
          <li>
            <Link to="/users">Users
              <ul>
                <li><Link to={'/user/list'}>user list</Link></li>
                <li><Link to={'/user/detail/1'}>user detail</Link></li>
              </ul>
            </Link>
          </li>
        </ul>
        <Switch>
          {/*exact:boolean 不写表示true；或者不写exact，把这个放到最下面，表示精确匹配  */}
          <Route path={'/'} exact>
            <Home />
          </Route>
          <Route path={'/about'}>
            <About />
          </Route>
          <Route path={'/user'}>
            <Users />
          </Route>
 
        </Switch>
       <Route path={'/login'}>
          <Login/>
        </Route>
      </Router>
    </>
  );
}

export default App;