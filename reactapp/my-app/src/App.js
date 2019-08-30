import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"
import Test1 from "./component/Test1"
import Test2 from "./component/Test2"
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">test1</Link>
        <Link to="/test2">test2</Link>
        <Switch>
          <Route path="/test2" component={Test2}/>
          <Route path="/" component={Test1}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
