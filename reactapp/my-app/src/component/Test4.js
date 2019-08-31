import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    withRouter,
    Prompt,
    NavLink
  } from "react-router-dom"
  const Foo1=()=>{
    return(
        <div>
            <h1>Foo1</h1>
        </div>
    );
}

const Foo2=()=>{
    return(
        <div>
            <h1>Foo2</h1>
        </div>
    );
}
export default class Test4 extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavLink activeStyle={{color:"red"}} activeClassName="aa" to="/test1">test1</NavLink>
                    <NavLink isActive={()=>false} activeClassName="aa" to="/test2">test2</NavLink>
                    <Route path="/test1" component={Foo1}/>
                    <Route path="/test2" component={Foo2}/>
                </Router>
            </div>
        )
    }
}
