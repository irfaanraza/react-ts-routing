import React from 'react';
import './App'
import {BrowserRouter as Router, Link,Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users'; 

const App: React.FC =() =>{
  return (
    <Router>
      <div>
        
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
    
        
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
         <Route path="/users" exact component={Users}/>
        </Switch>
        
        
      </div>
    </Router>
  );
}

export default App;
