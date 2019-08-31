import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom"
import {Provider} from 'react-redux'
import Test1 from "./component/Test1"
import Test2 from "./component/Test2"
import Test3 from "./component/Test3"
import Test4 from "./component/Test4"
import Test5 from "./component/Test5"
import Test6 from "./component/Test6"
import state from "./store"
const Foo=({match})=>{
  return(
    <h1>hello{match.params.id}</h1>
  )
}
function App() {
  return (
    <div className="App">
      <Provider store={state}>
      <Router>
        <Link to="/54321">test1</Link> |
        <Link to="/test2">test2</Link> |
        <Link to="/test3">test3</Link> |
        <Link to="/test4">test4</Link> |
        <Link to="/test5">test5</Link> |
        <Link to="/test6">test6</Link> |
        <Link to="/foo/123456">foo</Link> |
        <Link to="/testrender">testrender</Link> |
        <Link to="/redirect">redirect</Link>
        <Switch>
          <Route path="/foo/:id" component={Foo}/>
          <Route path="/testrender" render={()=>{
            return(
              <h1>hello world</h1>
            )
          }}/>
          <Route path="/redirect" render={()=>{
            return(
              <Redirect to="2221"/>
            )
          }}/>
          <Route path="/test2" component={Test2}/>
          <Route path="/test3" component={Test3}/>
          <Route path="/test4" component={Test4}/>
          <Route path="/test5" component={Test5}/>
          <Route path="/test6" component={Test6}/>
          <Route path="/:id" component={Test1}/>
          
        </Switch>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
