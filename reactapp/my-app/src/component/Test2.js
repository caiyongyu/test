import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from "react-router-dom"

const RouterLink=({to,title})=>{
    return(
        <Route
            path={to}
            children={({match})=>{
                console.log(match)
                return(
                    <Link to={to}>{match?'>':""}{title}</Link>
                )
            }}
        />
    )
}

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

export default class Teat2 extends Component {
    render() {
        return (
            <div>
                <Router>
                    <RouterLink to="/foo1" title="foo1"/>
                    <RouterLink to="/foo2" title="foo2"/>
                    <Switch>
                        <Route path="/foo1" component={Foo1}/>
                        <Route path="/foo2" component={Foo2}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
